import Header from '../components/Header';
import avatar from '../assets/images/avatar.png';

export default function About() {
	return (
		<section className="container max-w-lg mx-auto px-6">
			<div className="flex">
				<img className="w-10 sm:w-20" src={avatar} alt="avatar" />
				<div className="container mr-10 sm:mr-20">
					<Header header={'About Me'} />
				</div>
			</div>

			<p className="text-xs sm:text-base pt-10">
				Experienced software engineer with a passion for developing
				programs and APIs that expedite the efficiency and effectiveness
				of organizational success. Well-versed in technology and
				programming to create systems that are reliable and
				user-friendly. Confident communicator, strategic thinker, and
				innovative creator to develop software that is customized to
				meet a company&apos;s organizational needs, highlight their core
				competencies and further their success.
			</p>
		</section>
	);
}
