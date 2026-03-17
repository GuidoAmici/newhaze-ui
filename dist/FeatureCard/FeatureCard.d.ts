import { default as React } from 'react';
export interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    iconVariant?: 'accent' | 'cta' | 'success';
}
export declare function FeatureCard({ icon, title, description, iconVariant }: FeatureCardProps): import("react/jsx-runtime").JSX.Element;
