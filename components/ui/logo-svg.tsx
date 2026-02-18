'use client'

export default function LogoSvg({ className = '', size = 40 }: { className?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#F5A623" />
                    <stop offset="50%" stopColor="#E07B8B" />
                    <stop offset="100%" stopColor="#9B72CB" />
                </linearGradient>
            </defs>
            {/* Letter A */}
            <path
                d="M 60,420 L 160,80 L 230,260"
                stroke="url(#logoGradient)"
                strokeWidth="28"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Letter M */}
            <path
                d="M 190,420 L 240,140 L 300,280 L 360,80 L 440,420"
                stroke="url(#logoGradient)"
                strokeWidth="28"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Smile curve */}
            <path
                d="M 60,430 Q 250,520 440,430"
                stroke="url(#logoGradient)"
                strokeWidth="24"
                strokeLinecap="round"
                fill="none"
            />
        </svg>
    )
}
