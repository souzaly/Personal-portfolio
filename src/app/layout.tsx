import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export const metadata: Metadata = {
	title: 'Luan - Desenvolvedor de Software',
	description:
		'Luan - Desenvolvedor Full Stack especializado em MERN Stack, React.js, Node.js e tecnologias modernas da web. Experiência em desenvolvimento de bancos de dados e aplicações web.',
	keywords:
		'Luan, Desenvolvedor de Software, Desenvolvedor Full Stack, MERN Stack, Desenvolvedor Web, Desenvolvedor React, Especialista em Next.js, Desenvolvedor de Banco de Dados, Frontend, Backend, JavaScript, TypeScript, Node.js, MongoDB, SQL',
	authors: [{ name: 'Luan' }],
	creator: 'Luan',
	manifest: '/manifest.json',
	themeColor: '#000000',
	viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
	openGraph: {
		type: 'website',
		locale: 'pt_BR',
		url: 'https://seu-site.vercel.app/',
		title: 'Luan - Desenvolvedor Full Stack',
		description:
			'Desenvolvedor Full Stack especializado em MERN Stack, React.js, Node.js e tecnologias modernas da web.',
		siteName: 'Portfólio do Luan',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Luan - Desenvolvedor Full Stack',
		description:
			'Desenvolvedor Full Stack especializado em MERN Stack, React.js, Node.js e tecnologias modernas da web.',
		creator: '@luan_dev',
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
		},
	},
	metadataBase: new URL('https://seu-site.vercel.app'),
	alternates: {
		canonical: '/',
	},
	verification: {
		google: '/googlea4a36904e14398c1.html',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR" className={inter.className}>
			<head>
				<link rel="shortcut icon" href="/nextjs.png" type="image/x-icon" />
				<link rel="apple-touch-icon" href="/nextjs.png" />
				<meta name="theme-color" content="#000000" />
				<link rel="manifest" href="/manifest.json" />
				<meta
					httpEquiv="Content-Security-Policy"
					content="default-src 'self' data: blob: https:;
					script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https:;
					style-src 'self' 'unsafe-inline' https:;
					img-src 'self' data: blob: https: http:;
					font-src 'self' data: https:;
					connect-src 'self' data: blob: https:;
					worker-src 'self' blob: data:;"
				/>
			</head>
			<body>
				<div className="min-h-screen flex flex-col">
					<Background3D />
					<Navbar />
					<main className="flex-grow">{children}</main>
					<SpeedInsights />
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	);
}
