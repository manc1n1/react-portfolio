import { useRouteError, useLocation } from 'react-router-dom';
import godAsh from '../assets/images/godash.png';

export default function ErrorPage() {
	let location = useLocation();
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<code>{location.pathname}</code>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			<img src={godAsh} alt="God Ash" />
		</div>
	);
}
