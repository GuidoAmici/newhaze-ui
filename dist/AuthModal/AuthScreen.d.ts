declare global {
    interface Window {
        google?: {
            accounts?: {
                id?: {
                    initialize: (config: {
                        client_id: string;
                        callback: (response: {
                            credential: string;
                        }) => void;
                    }) => void;
                    prompt: () => void;
                };
            };
        };
    }
}
export type AuthMode = 'login' | 'register' | 'otp' | 'profile' | 'forgot' | 'forgot_sent';
export interface AuthScreenProps {
    onRegister: (email: string, password: string) => Promise<void>;
    onVerifyOtp: (email: string, token: string) => Promise<void>;
    onResendOtp: (email: string) => Promise<void>;
    onLogin: (email: string, password: string) => Promise<void>;
    onLoginWithGoogle?: (token: string) => Promise<void>;
    onForgotPassword: (email: string) => Promise<void>;
    onSaveUsername: (username: string) => Promise<void>;
    onGuest?: () => void;
    initialMode?: AuthMode;
    compact?: boolean;
    googleClientId?: string;
    appName?: string;
}
export declare function AuthScreen({ onRegister, onVerifyOtp, onResendOtp, onLogin, onLoginWithGoogle, onForgotPassword, onSaveUsername, onGuest, initialMode, compact, googleClientId, appName, }: AuthScreenProps): import("react/jsx-runtime").JSX.Element;
