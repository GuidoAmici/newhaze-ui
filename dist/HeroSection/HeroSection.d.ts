import { default as React } from 'react';
export interface HeroSectionProps {
    title: string;
    highlight: string;
    description: string;
    cta?: React.ReactNode;
}
export declare function HeroSection({ title, highlight, description, cta }: HeroSectionProps): import("react/jsx-runtime").JSX.Element;
