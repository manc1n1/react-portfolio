import Header from '../components/Header';
import RepoCard from 'react-repo-card';

export default function Portfolio() {
	return (
		<section className="flex items-center justify-center flex-col max-w-xl mx-auto">
			<div className="px-2 sm:px-8">
				<div className="mb-10">
					<Header header={'Portfolio'} />
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-5">
					<RepoCard dark username="manc1n1" repository="zenvest" />
					<RepoCard
						dark
						username="manc1n1"
						repository="RandomRecipe"
					/>
					<RepoCard
						dark
						username="manc1n1"
						repository="finance-tracker"
					/>
					<RepoCard
						dark
						username="manc1n1"
						repository="weather-dashboard"
					/>
					<RepoCard
						dark
						username="manc1n1"
						repository="react-portfolio"
					/>
					<RepoCard
						dark
						username="manc1n1"
						repository="pro-portfolio"
					/>
					<RepoCard dark username="manc1n1" repository="tech-blog" />
					<RepoCard
						dark
						username="manc1n1"
						repository="employee-tracker"
					/>
					<RepoCard dark username="manc1n1" repository="dc-team" />
				</div>
			</div>
		</section>
	);
}
