import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CopyButtonProps {
    value: string;
    className?: string;
    label?: string;
    variant?: 'icon' | 'button';
}

export const CopyButton = ({ value, className, label, variant = 'button' }: CopyButtonProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    if (variant === 'icon') {
        return (
            <button
                onClick={handleCopy}
                className={cn("text-slate-400 hover:text-primary transition-colors h-5 w-5 flex items-center justify-center", className)}
                title="Copy email to clipboard"
            >
                {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
        );
    }

    return (
        <button
            onClick={handleCopy}
            className={cn(
                "inline-flex items-center justify-center gap-2 transition-all active:scale-95",
                className
            )}
        >
            {label && <span>{copied ? 'Copied!' : label}</span>}
            {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
    );
};
