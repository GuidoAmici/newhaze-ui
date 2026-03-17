import { default as React } from 'react';
export interface CardProps {
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
    style?: React.CSSProperties;
    className?: string;
}
export declare function Card({ children, active, onClick, style, className }: CardProps): import("react/jsx-runtime").JSX.Element;
export interface CardSectionProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
export declare function CardSection({ children, style, className }: CardSectionProps): import("react/jsx-runtime").JSX.Element;
