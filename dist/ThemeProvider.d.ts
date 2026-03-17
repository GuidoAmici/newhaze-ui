import { ThemeColors, ThemeName } from './themes';
interface ThemeContextValue {
    theme: ThemeColors;
    themeName: ThemeName;
    setThemeName: (name: ThemeName) => void;
    themeOptions: {
        value: ThemeName;
        label: string;
    }[];
}
export declare function ThemeProvider({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useTheme(): ThemeContextValue;
export {};
