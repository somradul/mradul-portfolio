import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white/50 py-12 px-6 md:px-12 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Left */}
                <div>
                    <span className="font-playfair font-bold text-lg text-white">
                        M. <span className="text-coral">Awasthi</span>
                    </span>
                    <p className="font-mono text-xs tracking-wider mt-1">
                        © 2026 · New Delhi, India
                    </p>
                </div>

                {/* Center Links */}
                <div className="flex gap-6">
                    {["About", "Experience", "Writing", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="font-mono text-xs tracking-widest uppercase hover:text-coral transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/mradul-awasthi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs tracking-widest uppercase hover:text-coral transition-colors"
                    >
                        LinkedIn ↗
                    </a>
                    <span className="font-mono text-xs px-3 py-1 border border-coral/40 text-coral">
                        Open to Work
                    </span>
                </div>

            </div>
        </footer>
    );
}
