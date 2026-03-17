export interface BlogCardProps {
    title: string;
    excerpt: string;
    coverImage: string;
    href: string;
    onClick?: () => void;
    readMoreLabel?: string;
    animationDelay?: number;
}
export declare function BlogCard({ title, excerpt, coverImage, href, onClick, readMoreLabel, animationDelay, }: BlogCardProps): import("react/jsx-runtime").JSX.Element;
