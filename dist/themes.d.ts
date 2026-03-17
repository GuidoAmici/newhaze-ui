export interface ThemeColors {
    bgDark: string;
    bg: string;
    bgLight: string;
    text: string;
    textMuted: string;
    textDim: string;
    border: string;
    borderLight: string;
    accent: string;
    accentBright: string;
    accentNeon: string;
    cta: string;
    ctaLight: string;
    ctaText: string;
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
export type ThemeName = 'dark-purple' | 'green-botanical' | 'light' | 'dark-orange';
export declare function resolveThemeName(stored: string | null): ThemeName;
declare const themes: Record<ThemeName, Theme>;
export default themes;
