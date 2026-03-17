export interface SettingsUser {
    username: string | null;
    email: string;
    roles?: string[];
    xp?: number;
    level?: number;
}
export interface UserSettingsProps {
    user: SettingsUser;
    onUpdateUsername: (username: string) => Promise<void>;
    onLogout: () => void;
}
export declare function UserSettings({ user, onUpdateUsername, onLogout }: UserSettingsProps): import("react/jsx-runtime").JSX.Element;
