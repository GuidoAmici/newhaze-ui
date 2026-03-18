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
export type ThemeName = 'new-haze' | 'new-haze-light' | 'rabbitek' | 'rabbitek-light' | 'canahoria' | 'canahoria-dark';
export declare function resolveThemeName(stored: string | null): ThemeName;
declare const themes: Record<ThemeName, Theme>;
export default themes;
