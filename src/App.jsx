import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
			<Nav />
			<main className="min-h-screen bg-slate-100 dark:bg-slate-900 text-gray-600 dark:text-gray-300 pt-24 sm:pt-16">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default App;
