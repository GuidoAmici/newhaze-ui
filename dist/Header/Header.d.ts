import { default as React } from 'react';
export interface NavUser {
    username: string;
    email: string;
    roles: string[];
}
type LinkProps = {
    href: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    'aria-label'?: string;
    onMouseEnter?: React.MouseEventHandler<HTMLElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLElement>;
};
export interface HeaderProps {
    /** Which app this is rendered in — used to highlight the active nav item */
    activeApp?: 'website' | 'learn' | 'inner-panel' | 'outer-panel';
    /** Authenticated user. null/undefined = logged out */
    user?: NavUser | null;
    onLogin?: () => void;
    onLogout?: () => void;
    /** Route for the profile/settings page (e.g. "/perfil"). Adds a link in the UserMenu dropdown. */
    profileHref?: string;
    /** Pass Next.js Link or React Router Link for client-side navigation. Defaults to <a>. */
    LinkComponent?: React.ComponentType<LinkProps>;
    /** Base URL for the main website. Defaults to https://newhaze.ar */
    websiteUrl?: string;
    /** Base URL for the learn app. Defaults to https://learn.newhaze.ar */
    learnUrl?: string;
    /** Extra nav links injected after the main nav (e.g. page section anchors) */
    extraNavLinks?: {
        label: string;
        href: string;
    }[];
}
export declare function Header({ activeApp, user, onLogin, onLogout, profileHref, LinkComponent, websiteUrl, learnUrl, extraNavLinks, }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
