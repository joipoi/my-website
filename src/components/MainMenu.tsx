import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function MainMenu() {
    return (
        <div className="bg-gray-800 p-4">
            <nav className="flex space-x-4">
                <Link className="text-white hover:text-gray-300" href="/">Home</Link>
                <Link className="text-white hover:text-gray-300" href="/blog">Blog</Link>
                <Link className="text-white hover:text-gray-300" href="/guides">Guides</Link>
                <Link className="text-white hover:text-gray-300" href="/projects">Projects</Link>
                <ThemeToggle></ThemeToggle>
            </nav>
        </div>
    );
}