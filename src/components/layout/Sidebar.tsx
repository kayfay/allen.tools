import { useState } from 'react';
import { Menu, X, Github, Linkedin, MapPin, Globe } from 'lucide-react';
import { cn } from '../../lib/utils';
import { CopyButton } from '../ui/CopyButton';

const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 right-4 z-50 p-2 bg-white border border-border rounded-lg md:hidden shadow-sm"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar Content */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-border transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:block",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="h-full flex flex-col p-8">
                    <div className="mb-12">
                        <h1 className="text-2xl font-bold tracking-tight text-primary">
                            ALLEN TOOLS
                        </h1>
                        <p className="text-sm text-secondary mt-1">AI & Data Scientist</p>
                    </div>

                    <nav className="flex-grow">
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-background hover:text-primary rounded-lg transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="mt-auto pt-8 border-t border-border space-y-4">
                        <div className="flex gap-4">
                            <a href="https://github.com/kayfay" target="_blank" className="text-slate-400 hover:text-primary transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/allentools" target="_blank" className="text-slate-400 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <CopyButton
                                value="allen@allen.tools"
                                variant="icon"
                            />
                        </div>
                        <div className="space-y-2 text-xs text-slate-500">
                            <p className="flex items-center gap-2"><MapPin size={12} /> Jacksonville, FL</p>
                            <p className="flex items-center gap-2"><Globe size={12} /> allen.tools</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};
