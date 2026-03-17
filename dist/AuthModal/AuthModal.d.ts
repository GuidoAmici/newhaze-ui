import { AuthScreenProps, AuthMode } from './AuthScreen';
export interface AuthModalProps {
    onClose?: () => void;
    initialMode?: AuthMode;
    authScreenProps: Omit<AuthScreenProps, 'compact' | 'initialMode'>;
}
export declare function AuthModal({ onClose, initialMode, authScreenProps }: AuthModalProps): import("react/jsx-runtime").JSX.Element;
