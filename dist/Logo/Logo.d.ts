import { default as React } from 'react';
export interface LogoProps {
    /**
     * "icon"     — isotype only (square)
     * "full"     — isotype + wordmark (horizontal)
     * "wordmark" — wordmark only
     */
    variant?: 'icon' | 'full' | 'wordmark';
    /** Height in px. Width is calculated from aspect ratio. Default: 32 */
    size?: number;
    /** Fill color for paths and wordmark. Default: currentColor */
    color?: string;
    /** Fill color for the isotype circle background. Default: #925cf5 */
    accentColor?: string;
    className?: string;
    style?: React.CSSProperties;
    'aria-label'?: string;
}
export declare function Logo({ variant, size, color, accentColor, className, style, 'aria-label': ariaLabel, }: LogoProps): import("react/jsx-runtime").JSX.Element;
