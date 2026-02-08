'use client';

import { motion } from 'framer-motion';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
	Download, Terminal, HardDrive, MemoryStick, User, KeyRound,
	FileDown, Shield, Box, Cpu, Link, ExternalLink, Info
} from 'lucide-react';

const Kali = () => {
	const specifications = [
		{ icon: <Cpu className="w-5 h-5" />, label: 'Sistema', value: 'Debian 64-bit' },
		{ icon: <Cpu className="w-5 h-5" />, label: 'CPU', value: '2 processadores' },
		{ icon: <MemoryStick className="w-5 h-5" />, label: 'Memória RAM', value: '2GB' },
		{ icon: <HardDrive className="w-5 h-5" />, label: 'Armazenamento', value: '90GB (Dinâmico)' },
		{ icon: <User className="w-5 h-5" />, label: 'Usuário', value: 'kali' },
		{ icon: <KeyRound className="w-5 h-5" />, label: 'Senha', value: 'kali@nil' },
		{ icon: <FileDown className="w-5 h-5" />, label: 'Tamanho do Arquivo', value: '11GB (.OVA)' },
		{ icon: <Box className="w-5 h-5" />, label: 'Rede', value: 'NAT' },
	];

	const features = [
		{
			icon: <Shield className="w-6 h-6" />,
			title: 'Ferramentas de Segurança Pré-configuradas',
			description: 'Ferramentas prontas para testes de invasão e análises de segurança'
		},
		{
			icon: <Cpu className="w-6 h-6" />,
			title: 'Desempenho Otimizado',
			description: 'Configurado para melhor performance no ambiente VirtualBox'
		},
		{
			icon: <Terminal className="w-6 h-6" />,
			title: 'Configuração Personalizada',
			description: 'Ajustes prontos para uso imediato após a importação'
		}
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<div className="relative overflow-hidden pt-20 pb-32">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
					<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
				</div>

				<div className="relative max-w-4xl mx-auto px-4">
					<ScrollAnimation>
						<div className="text-center mb-12">

							<h1 className="text-4xl md:text-6xl font-bold mt-6 mb-16 gradient-text">
								Kali Linux para VirtualBox
							</h1>

							{/* Logo Section */}
							<div className="flex items-center justify-center gap-0 mb-8">
								<img
									src="/profile/kali_logo.png"
									alt="Logo do Kali Linux"
									className="w-24 h-24 opacity-70"
								/>
								<Link className="w-5 h-5 text-white/60" />
								<img
									src="/profile/Virtualbox_logo.png"
									alt="Logo do VirtualBox"
									className="w-24 h-24 object-contain opacity-65"
								/>
							</div>

							<motion.a
								href="https://mega.nz/file/Uid1DI6T#GXSPao6M3evGdKYVM-koj9zUdC31KnteKDW--5ZjG50"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all group"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Download className="w-5 h-5" />
								Baixar arquivo .OVA
								<span className="text-sm opacity-70">(11 GB)</span>
							</motion.a>

							<p className="text-xl text-gray-400 mt-6 mb-8">
								Kali Linux pré-configurado com ferramentas essenciais de segurança
							</p>
						</div>
					</ScrollAnimation>

					{/* Features Grid */}
					<ScrollAnimation>
						<div className="grid md:grid-cols-3 gap-6 mb-16">
							{features.map((feature) => (
								<motion.div
									key={feature.title}
									className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/5"
									whileHover={{ scale: 1.02 }}
								>
									<div className="text-white/60 mb-4">{feature.icon}</div>
									<h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
									<p className="text-gray-400 text-sm">{feature.description}</p>
								</motion.div>
							))}
						</div>
					</ScrollAnimation>

					{/* Specifications Grid */}
					<ScrollAnimation>
						<div className="grid md:grid-cols-2 gap-8 mb-12">
							{/* System Specifications */}
							<div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
								<h3 className="text-xl font-semibold mb-4">Especificações do Sistema</h3>
								<div className="grid gap-3">
									{specifications.slice(0, 4).map((spec) => (
										<div key={spec.label} className="flex items-center gap-3 text-gray-300">
											<div className="text-white/60">{spec.icon}</div>
											<span className="font-medium">{spec.label}:</span>
											<span>{spec.value}</span>
										</div>
									))}
								</div>
							</div>

							{/* Login Information */}
							<div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
								<h3 className="text-xl font-semibold mb-4">Informações de Login</h3>
								<div className="grid gap-3">
									{specifications.slice(4, 6).map((spec) => (
										<div key={spec.label} className="flex items-center gap-3 text-gray-300">
											<div className="text-white/60">{spec.icon}</div>
											<span className="font-medium">{spec.label}:</span>
											<span>{spec.value}</span>
										</div>
									))}
									<div className="mt-2 text-sm text-gray-400">
										<Info className="w-4 h-4 inline mr-2 text-white/60" />
										Lembre-se de alterar a senha padrão após a importação
									</div>
								</div>
							</div>
						</div>
					</ScrollAnimation>

					{/* Additional Information */}
					<ScrollAnimation>
						<div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/5">
							<h3 className="text-xl font-semibold mb-4">Recursos Adicionais</h3>
							<div className="grid gap-4">
								<a
									href="https://www.virtualbox.org/manual/ch01.html#ovf"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
								>
									<ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
									Como importar um arquivo .OVA no VirtualBox
								</a>
								<a
									href="https://www.kali.org/docs/policy/kali-linux-license/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
								>
									<ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
									Licenciamento e informações Open Source do Kali Linux
								</a>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};

export default Kali;										<div key={spec.label} className="flex items-center gap-3 text-gray-300">
											<div className="text-white/60">{spec.icon}</div>
											<span className="font-medium">{spec.label}:</span>
											<span>{spec.value}</span>
										</div>
									))}
								</div>
							</div>

							{/* Login Information */}
							<div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5">
								<h3 className="text-xl font-semibold mb-4">Login Information</h3>
								<div className="grid gap-3">
									{specifications.slice(4, 6).map((spec) => (
										<div key={spec.label} className="flex items-center gap-3 text-gray-300">
											<div className="text-white/60">{spec.icon}</div>
											<span className="font-medium">{spec.label}:</span>
											<span>{spec.value}</span>
										</div>
									))}
									<div className="mt-2 text-sm text-gray-400">
										<Info className="w-4 h-4 inline mr-2 text-white/60" />
										Remember to change the default password after importing
									</div>
								</div>
							</div>
						</div>
					</ScrollAnimation>

					{/* Additional Information */}
					<ScrollAnimation>
						<div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/5">
							<h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
							<div className="grid gap-4">
								<a
									href="https://www.virtualbox.org/manual/ch01.html#ovf"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
								>
									<ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
									How to Import .OVA into VirtualBox
								</a>
								<a
									href="https://www.kali.org/docs/policy/kali-linux-license/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
								>
									<ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
									Kali Linux Licensing & Open Source Info
								</a>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};

export default Kali;
