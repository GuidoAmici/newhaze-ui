export interface ThemeColors {
    s0: string;
    s1: string;
    s2: string;
    s3: string;
    shadowSm: string;
    shadowLg: string;
    text: string;
    textMuted: string;
    textDim: string;
    border: string;
    borderLight: string;
    accent: string;
    accentBright: string;
    accentNeon: string;
    secondary: string;
    secondaryBright: string;
    error: string;
    errorBg: string;
    errorBorder: string;
    success: string;
    successBg: string;
    successBorder: string;
    focus: string;
}
export interface Theme {
    label: string;
    colors: ThemeColors;
}
export type ThemeName = 'new-haze' | 'new-haze-light' | 'rabbitek' | 'rabbitek-light' | 'canahoria' | 'canahoria-dark' | 'techno-violet' | 'techno-green';
/** HTML classes and color-scheme per theme — used by ThemeProvider and FOUC scripts */
export declare const THEME_HTML_CONFIG: Record<ThemeName, {
    classes: string[];
    colorScheme: 'dark' | 'light';
}>;
/** Legacy names that may exist in localStorage */
export declare const LEGACY_THEME_MAP: Record<string, ThemeName>;
export declare function resolveThemeName(stored: string | null): ThemeName;
declare const themes: Record<ThemeName, Theme>;
export default themes;
