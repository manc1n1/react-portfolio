import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa6';

export default function Footer() {
	return (
		<footer className="flex items-center justify-center sticky bottom-0 py-3 bg-slate-200 dark:bg-slate-950">
			<h1 className="flex-1 ml-16 bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-green-800 via-green-500 from-green-400 bg-size-200 hover:bg-right font-bold text-xs sm:text-lg text-center">
				Made with{' '}
				<div className="inline-block">
					<h2>♥</h2>
					<h2>♥</h2>
					<h2>♥</h2>
				</div>{' '}
				in{' '}
				<a
					className="inline-block"
					id="footer"
					href="https://oldschool.runescape.wiki/w/Durial321"
					target="_blank"
					rel="noreferrer"
				>
					<h2>Falador</h2>
					<h2>Falador</h2>
					<h2>Falador</h2>
				</a>
			</h1>
			<div className="flex space-x-2 text-xs sm:text-lg text-green-500">
				<a
					href="https://github.com/manc1n1"
					target="_blank"
					rel="noreferrer"
				>
					<FaGithub />
				</a>
				<a
					href="https://www.linkedin.com/in/manc1n1"
					target="_blank"
					rel="noreferrer"
				>
					<FaLinkedin />
				</a>
				<a
					href="https://stackoverflow.com/users/5137528/manc1n1"
					target="_blank"
					rel="noreferrer"
				>
					<FaStackOverflow />
				</a>
			</div>
		</footer>
	);
}
