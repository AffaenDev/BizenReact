import { Appearance } from 'react-native';

// Theme configuration with easy color palette customization
export const themes = {
  light: {
    background: '#ffffff',
    text: '#0f172a',
    primary: '#1e3a8a',
    secondary: '#0f172a',
    accent: '#f59e0b',
    card: '#f1f5f9',
    border: '#e2e8f0',
  },
  dark: {
    background: '#0f172a',
    text: '#f8fafc',
    primary: '#3b82f6',
    secondary: '#1e293b',
    accent: '#fbbf24',
    card: '#1e293b',
    border: '#334155',
  },
};

// Get the current system theme
export const getSystemTheme = () => {
  return Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';
};

// Default theme
export const defaultTheme = getSystemTheme();

// Export theme type
export type ThemeType = keyof typeof themes;
export type ThemeColors = typeof themes.light;