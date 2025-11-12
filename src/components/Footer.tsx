'use client';

import Link from 'next/link';

const navLinks = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Features',
        href: '/features-main',
    },
    {
        title: 'Algorithms',
        href: '/algorithms',
    },
    {
        title: 'Brand Kit',
        href: '/brand-kit',
    },
    {
        title: 'Contact Us',
        href: 'https://calendly.com/anishpujari25/30min',
        external: true,
    },
    {
        title: 'Pitch Deck',
        href: '/pitch-deck',
    },
    {
        title: 'Join Us',
        href: '/join-us',
    },
];

const legalLinks = [
    {
        title: 'Legal',
        href: '/legal',
    },
    {
        title: 'Privacy Policy',
        href: '/privacy-policy',
    },
    {
        title: 'Terms of Service',
        href: '/terms-of-service',
    },
    {
        title: 'Risk Disclosure',
        href: '/risk-disclosure',
    },
];

export default function FooterSection() {
    return (
        <footer className="pt-12 pb-16 md:pt-16 md:pb-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block hover:opacity-80 transition-opacity" aria-label="Go to home page">
                        <span className="text-4xl font-extrabold">TradeX<span className="text-green-600">.</span></span>
                    </Link>
                </div>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {navLinks.map((link, index) => (
                        link.external ? (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{link.title}</span>
                            </a>
                        ) : (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{link.title}</span>
                            </Link>
                        )
                    ))}
                </div>
                
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {legalLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X/Twitter"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                        </svg>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/company/trxdex/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                        </svg>
                    </Link>
                    <Link
                        href="https://www.instagram.com/trxdex_?igsh=dm1iODdrNTJlbmEz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                        </svg>
                    </Link>
                </div>
                <span className="text-muted-foreground block text-center text-sm mt-8">© {new Date().getFullYear()} TradeX. All rights reserved</span>
            </div>
        </footer>
    );
}