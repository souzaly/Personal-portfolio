'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const About = () => {
	const achievements = [
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "10+ Projetos",
			description: "Aplicações web e projetos pessoais desenvolvidos"
		},
		{
			icon: <Briefcase className="w-6 h-6" />,
			title: "Sem Experiência Profissional",
			description: "Focado em estudos e projetos próprios"
		},
		{
			icon: <GraduationCap className="w-6 h-6" />,
			title: "Estudante Autodidata",
			description: "Aprendizado contínuo em programação"
		}
	];

	const interests = [
		"Desenvolvimento Web",
		"Front-end",
		"Back-end",
		"APIs",
		"Open Source",
		"Inteligência Artificial"
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.h2 className="text-4xl font-bold mb-8 gradient-text">
					Sobre Mim
				</motion.h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 gap-8">
				<ScrollAnimation>
					<div className="aspect-square overflow-hidden rounded-2xl">
						<img
							src="/profile/profile.jpg"
							alt="Luan"
							className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
						/>
					</div>
				</ScrollAnimation>

				<ScrollAnimation className="space-y-6">
					<div className="space-y-4">
						<p className="text-gray-300 leading-relaxed">
							Oi! Meu nome é <strong>Luan</strong>, tenho <strong>16 anos</strong> e sou apaixonado por programação.
							Desde cedo me interesso por tecnologia e adoro transformar ideias em código.
						</p>

						<p className="text-gray-300 leading-relaxed">
							Atualmente ainda não faço faculdade, mas estudo programação de forma autodidata,
							dedicando boa parte do meu tempo a aprender novas tecnologias, praticar e criar projetos.
							Gosto de entender como as coisas funcionam por trás das aplicações.
						</p>

						<p className="text-gray-300 leading-relaxed">
							Tenho foco em desenvolvimento web, utilizando tecnologias modernas como JavaScript,
							React e Node.js. Estou sempre buscando evoluir, aprender boas práticas e me preparar
							para oportunidades futuras na área de tecnologia.
						</p>
					</div>

					<ScrollAnimation>
						<div className="pt-4">
							<h3 className="text-2xl font-semibold mb-4 gradient-text">
								Fatos Rápidos
							</h3>
							<ul className="list-none space-y-3">
								{[
									"16 anos",
									"Estudante autodidata em programação",
									"Focado em desenvolvimento web"
								].map((fact) => (
									<motion.li
										key={fact}
										className="flex items-center space-x-2 text-gray-300"
									>
										<span className="w-2 h-2 bg-white rounded-full" />
										<span>{fact}</span>
									</motion.li>
								))}
							</ul>
						</div>
					</ScrollAnimation>

					<ScrollAnimation>
						<div className="flex justify-start space-x-4">
							<a
								href="/files/cv_pdf/Luan(CV).pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
							>
								Baixar CV
							</a>
							<a
								href="/skills"
								className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
							>
								Minhas Skills
							</a>
						</div>
					</ScrollAnimation>
				</ScrollAnimation>
			</div>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">
						Conquistas
					</h3>
					<div className="grid md:grid-cols-3 gap-6">
						{achievements.map((achievement) => (
							<ScrollAnimation key={achievement.title}>
								<div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
									<div className="text-white mb-4">{achievement.icon}</div>
									<h4 className="text-xl font-semibold mb-2">
										{achievement.title}
									</h4>
									<p className="text-gray-400">
										{achievement.description}
									</p>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div className="mt-16">
					<h3 className="text-2xl font-semibold mb-8 gradient-text">
						Áreas de Interesse
					</h3>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{interests.map((interest) => (
							<ScrollAnimation key={interest}>
								<div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
									<Globe className="w-5 h-5 text-gray-400" />
									<span className="text-gray-300">{interest}</span>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
};

export default About;
