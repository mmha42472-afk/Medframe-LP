import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent } from '../types/siteContent';
import { DEFAULT_SITE_CONTENT } from '../data/defaultSiteContent';

const STORAGE_KEY = 'medframe_studio_content_v1';

interface SiteContentContextType {
  content: SiteContent;
  updateSection: <K extends keyof SiteContent>(section: K, data: SiteContent[K]) => void;
  updateField: <K extends keyof SiteContent, F extends keyof SiteContent[K]>(
    section: K,
    field: F,
    value: SiteContent[K][F]
  ) => void;
  resetToDefaults: () => void;
  exportJSON: () => string;
  importJSON: (jsonString: string) => boolean;
  isDashboardOpen: boolean;
  setIsDashboardOpen: (open: boolean) => void;
  activeDashboardTab: string;
  setActiveDashboardTab: (tab: string) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const SiteContentContext = createContext<SiteContentContextType | undefined>(undefined);

export const SiteContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with defaults to ensure all fields exist
        return {
          ...DEFAULT_SITE_CONTENT,
          ...parsed,
          hero: { ...DEFAULT_SITE_CONTENT.hero, ...(parsed.hero || {}) },
          discretion: { ...DEFAULT_SITE_CONTENT.discretion, ...(parsed.discretion || {}) },
          consultation: { ...DEFAULT_SITE_CONTENT.consultation, ...(parsed.consultation || {}) },
          footer: { ...DEFAULT_SITE_CONTENT.footer, ...(parsed.footer || {}) },
        };
      }
    } catch (e) {
      console.error('Failed to load saved site content', e);
    }
    return DEFAULT_SITE_CONTENT;
  });

  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [activeDashboardTab, setActiveDashboardTab] = useState('overview');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Save to localStorage whenever content changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch (e) {
      console.error('Failed to persist site content to localStorage', e);
    }
  }, [content]);

  const updateSection = <K extends keyof SiteContent>(section: K, data: SiteContent[K]) => {
    setContent((prev) => ({
      ...prev,
      [section]: data,
    }));
    showToast(`✓ Updated ${String(section)} section`);
  };

  const updateField = <K extends keyof SiteContent, F extends keyof SiteContent[K]>(
    section: K,
    field: F,
    value: SiteContent[K][F]
  ) => {
    setContent((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section] as unknown as Record<string, unknown>),
        [field]: value,
      },
    }));
    showToast(`✓ Updated ${String(section)}.${String(field)}`);
  };

  const resetToDefaults = () => {
    setContent(DEFAULT_SITE_CONTENT);
    localStorage.removeItem(STORAGE_KEY);
    showToast('✓ Restored all sections to factory clinical defaults');
  };

  const exportJSON = () => {
    return JSON.stringify(content, null, 2);
  };

  const importJSON = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && typeof parsed === 'object' && parsed.hero) {
        setContent(parsed);
        showToast('✓ Successfully imported and applied new site configuration');
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON content import', e);
    }
    showToast('⚠️ Invalid JSON configuration format');
    return false;
  };

  return (
    <SiteContentContext.Provider
      value={{
        content,
        updateSection,
        updateField,
        resetToDefaults,
        exportJSON,
        importJSON,
        isDashboardOpen,
        setIsDashboardOpen,
        activeDashboardTab,
        setActiveDashboardTab,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </SiteContentContext.Provider>
  );
};

export const useSiteContent = () => {
  const context = useContext(SiteContentContext);
  if (!context) {
    throw new Error('useSiteContent must be used within a SiteContentProvider');
  }
  return context;
};
