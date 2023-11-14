import { useState, useEffect } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Header from '../components/Header';
import resume from '../assets/resume.pdf';

export default function Resume() {
	pdfjs.GlobalWorkerOptions.workerSrc = new URL(
		'pdfjs-dist/build/pdf.worker.min.js',
		import.meta.url,
	).toString();

	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 620;

	useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth));
	}, []);

	return (
		<section className="flex items-center justify-center flex-col">
			<div className="mb-10">
				<Header header={'Resume'} />
			</div>
			{width > breakpoint ? (
				<div className="pb-5">
					<Document file={resume}>
						<Page pageNumber={1} />
					</Document>
				</div>
			) : (
				<div className="pb-5">
					<Document file={resume}>
						<Page width={300} pageNumber={1} />
					</Document>
				</div>
			)}
		</section>
	);
}
