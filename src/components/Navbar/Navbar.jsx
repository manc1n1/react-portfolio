import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav({ links }) {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, [pathname]);

	return (
		<nav className="container mx-auto px-6 py-3">
			<div className="sm:flex justify-between items-center font-bold">
				<Link className="text-2xl text-center" to="/">
					<h1 className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-green-800 via-green-500 from-green-400 bg-size-200 hover:bg-right">
						Joe Mancini
					</h1>
				</Link>
				<div className="flex justify-between sm:space-x-10 text-xs sm:text-lg mt-3 sm:mt-0">
					{links.map((link) => link)}
				</div>
			</div>
		</nav>
	);
}
