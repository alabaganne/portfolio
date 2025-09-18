import { SectionHeader } from '@/components/section-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const education = [
	{
		school: 'Higher Institute of Applied Science and Technology of Sousse',
		degree: 'Engineering Degree in Software Engineering',
		period: 'June 2024',
		notes: ['Capstone focused on full-stack delivery and Agile leadership.'],
	},
	{
		school: 'Higher Institute of Applied Science and Technology of Sousse',
		degree: 'Bachelor of Science in Computer Science',
		period: 'June 2021',
		notes: [
			'Delivered internship management tools for local partners.',
			'Graduated among the top students, which made me eligible to pursue my studies in software engineering.',
		],
	},
	{
		school: 'High School of Jemmal',
		degree: 'High School Diploma - Experimental Science',
		period: 'June 2018',
		notes: ['Built a foundation in analytical thinking and collaboration.'],
	},
	{
		school: 'Microsoft Technology Associate',
		degree: 'Introduction to Programming Using HTML and CSS',
		period: '2019',
		notes: [],
	},
	{
		school: 'Microsoft Technology Associate',
		degree: 'Introduction to Programming Using JavaScript',
		period: '2019',
		notes: [],
	},
	{
		school: 'Microsoft Technology Associate',
		degree: 'Introduction to Programming Using Python',
		period: '2021',
		notes: [],
	},
	{
		school: 'Microsoft Technology Associate',
		degree: 'Database Fundamentals',
		period: '2021',
		notes: [],
	},
	{
		school: 'Cisco Certified Network Associate (CCNA)',
		degree: 'Introduction to Networks',
		period: '2022',
		notes: [],
	},
];

export function EducationSection() {
	return (
		<section id="education" className="space-y-8">
			<SectionHeader
				eyebrow="EDUCATION"
				title="Education & certifications"
				description="Academic foundations and professional credentials that inform my engineering approach."
			/>
			<ol className="grid gap-6 md:grid-cols-2">
				{education.map((item) => (
					<li key={`${item.school}-${item.degree}-${item.period}`} className="h-full">
						<div>
							<Card className="relative flex h-full flex-col overflow-hidden border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(148,163,184,0.08)] transition hover:border-sky-400/40 hover:bg-white/[0.06]">
								<CardHeader className={"flex-1 space-y-3 " + (item.notes.length === 0 ? "!mb-0" : "")}>
									<CardTitle className="text-base font-semibold leading-tight text-white">{item.school}</CardTitle>
									<span className="w-fit inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sky-100">
										<Calendar className="h-3 w-3" aria-hidden />
										{item.period}
									</span>
									<CardDescription className="text-sm text-slate-300">{item.degree}</CardDescription>
								</CardHeader>
								{item.notes && item.notes.length > 0 ? (
									<CardContent className={"text-xs text-slate-200"}>
										<ul className="space-y-1.5">
											{item.notes.map((note) => (
												<li key={note} className="flex gap-2 leading-relaxed">
                          <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-400/80" />
													<span>{note}</span>
												</li>
											))}
										</ul>
									</CardContent>
								) : null}
							</Card>
						</div>
					</li>
				))}
			</ol>
		</section>
	);
}
