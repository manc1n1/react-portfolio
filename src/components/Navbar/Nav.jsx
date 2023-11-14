import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Nav() {
	const links = [
		{ name: 'Portfolio', route: '/' },
		{ name: 'About', route: '/about' },
		{ name: 'Contact', route: '/contact' },
		{ name: 'Resume', route: '/resume' },
	];

	const renderLink = (content) => {
		return (
			<Link
				className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-green-800 via-green-500 from-green-400 bg-size-200 hover:bg-right"
				key={content.name}
				to={content.route}
			>
				{content.name}
			</Link>
		);
	};

	return (
		<header className="fixed z-50 w-full shadow-md bg-slate-200 dark:bg-slate-950">
			<Navbar links={links.map((nav) => renderLink(nav))} />
		</header>
	);
}
