import { FaPhone, FaXTwitter } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import Header from '../components/Header';
import avatar from '../assets/images/avatar.jpg';

export default function Contact() {
	return (
		<section className="flex items-center justify-center flex-col">
			<div className="mb-10">
				<Header header={'Contact'} />
			</div>
			<div
				className="relative flex flex-col text-gray-700 bg-white bg-opacity-10 bg-clip-padding
				backdrop-filter backdrop-blur-lg shadow-2xl w-60 sm:w-96 rounded-xl mb-4"
			>
				<div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border">
					<img src={avatar} alt="avatar" />
				</div>
				<div className="p-6 text-center">
					<h1 className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-green-800 via-green-500 from-green-400 bg-size-200 hover:bg-right text-2xl font-bold">
						Joe Mancini
					</h1>
					<p className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-green-800 via-green-500 from-green-400 bg-size-200 hover:bg-right font-bold text-xs sm:text-lg text-center">
						Software Engineer
					</p>
				</div>
				<div className="flex justify-center text-xs sm:text-lg text-green-500 p-6 pt-2 gap-7">
					<a href="tel:6316629785" target="_blank" rel="noreferrer">
						<FaPhone />
					</a>
					<a
						href="mailto:mancinij@udel.edu"
						target="_blank"
						rel="noreferrer"
					>
						<IoMdMail />
					</a>
					<a
						href="https://twitter.com/0xSuspext"
						target="_blank"
						rel="noreferrer"
					>
						<FaXTwitter />
					</a>
				</div>
			</div>
		</section>
	);
}
