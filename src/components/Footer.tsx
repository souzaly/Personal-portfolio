'use client';

import Link from 'next/link';
import { Code2, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const pageLinks = [
		{ name: 'Início', path: '/' },
		{ name: 'Sobre', path: '/about' },
		{ name: 'Educação', path: '/education' },
		{ name: 'Experiência', path: '/experience' },
		{ name: 'Habilidades', path: '/skills' },
		{ name: 'Projetos', path: '/projects' },
		{ name: 'Certificados', path: '/certificates' },
		{ name: 'Contato', path: '/contact' },
		{ name: 'Kali Linux', path: '/kali' },
	];

	// Divide os links em colunas de 3
	const column1 = pageLinks.slice(0, 3);
	const column2 = pageLinks.slice(3, 6);
	const column3 = pageLinks.slice(6, 9);

	return (
		<footer className="relative mt-24">
			<div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
					{/* Branding */}
					<div className="space-y-4">
						<Link href="/" className="flex items-center space-x-3">
							<Code2 className="w-8 h-8 text-white" />
							<span className="text-xl font-bold text-white">Luan Souza</span>
						</Link>
						<p className="text-sm text-gray-400">
							Desenvolvedor de Software baseado em Xique-xique, Bahia.
						</p>
					</div>

					{/* Contato */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Contato</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="mailto:code.luan@gmail.com"
									className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
								>
									<Mail className="w-4 h-4" />
									code.luan@gmail.com
								</a>
							</li>
							<li>
								<a
									href="tel:+40028922"
									className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
								>
									<Phone className="w-4 h-4" />
									+4002-8922
								</a>
							</li>
						</ul>
					</div>

					{/* Links Rápidos */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Links Rápidos</h3>
						<div className="grid grid-cols-3 gap-x-6 gap-y-3">
							{/* Coluna 1 */}
							<div>
								{column1.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
									>
										{link.name}
									</Link>
								))}
							</div>

							{/* Coluna 2 */}
							<div>
								{column2.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
									>
										{link.name}
									</Link>
								))}
							</div>

							{/* Coluna 3 */}
							<div>
								{column3.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
									>
										{link.name}
									</Link>
								))}
							</div>
						</div>
					</div>

					{/* Redes Sociais */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Redes Sociais</h3>
						<div className="flex space-x-4">
							<a
								href="https://github.com/souzaly"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Github className="w-5 h-5" />
							</a>
							<a
								href="https://linkedin.com/in/souzaly"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Linkedin className="w-5 h-5" />
							</a>
							<a
								href="mailto:code.luan@gmail.com"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Mail className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>

				{/* Barra inferior */}
				<div className="border-t border-white/10 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm text-gray-400">
							© {currentYear} Souza. Todos os direitos reservados.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<a
								href=""
								rel="noopener noreferrer"
								className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
							>
								<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 32 32">
									<path d="M12 1L24 22H0L12 1Z" />
								</svg>
								Portfólio do Souza
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
