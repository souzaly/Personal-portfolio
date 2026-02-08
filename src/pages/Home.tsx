'use client';

import { VercelLogo } from '@/components/TechLogos';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Copy, Check, FileDown, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Home = () => {
  const [copied, setCopied] = useState(false);
  const email = 'code.luan@gmail.com';
  const whatsappNumber = '+916296554939';

  const { data: githubData } = useSWR(
    'https://api.github.com/users/niladri-1',
    fetcher
  );

  function formatRepoCount(count: number): string {
    if (count < 5) return count.toString();
    return `${Math.floor(count / 5) * 5}+`;
  }

  const githubRepos = githubData?.public_repos || 0;
  const displayRepos = formatRepoCount(githubRepos);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    if (window.innerWidth <= 640) {
      window.location.href = `mailto:${email}`;
      e.preventDefault();
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-7 sm:mt-0 md:mt-3 lg:mt-5">
      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Luan
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Eu crio e desenvolvo para a web
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-5 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Desenvolvedor de Software especializado em Full Stack, com experiência
          em Next.js, Node.js e tecnologias modernas da Web.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex justify-center gap-4">
            {/* BOTÃO DOWNLOAD CV DESATIVADO */}
            <button
              disabled
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-300 text-gray-600 
                         rounded-full text-sm sm:text-base font-medium 
                         flex items-center gap-2 cursor-not-allowed opacity-60"
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5" />
              Download CV
            </button>

            <Link
              href="/about"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white 
                         rounded-full text-sm sm:text-base font-medium 
                         hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
              Sobre Mim
            </Link>
          </div>

          <button
            onClick={handleEmailClick}
            className="group relative flex items-center gap-2 py-2 pl-8 pr-4 cursor-copy"
          >
            <div className="absolute left-0 flex items-center">
              <div className="w-3 text-gray-500 group-hover:text-white transition-colors">
                <VercelLogo />
              </div>
              <span className="text-lg font-mono text-gray-400 ml-3 group-hover:text-white">
                ~
              </span>
            </div>

            <span className="text-gray-400 group-hover:text-white ml-4">
              {email}
            </span>

            <div className="opacity-0 group-hover:opacity-100 ml-1 hidden sm:block">
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400 hover:text-white" />
              )}
            </div>
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-6 mt-10 max-w-xs mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://github.com/souzaly"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
            <span className="font-semibold">{displayRepos}</span>
            <span className="text-xs text-gray-400">Projetos no GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/naotemkkkk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white" />
            <span className="font-semibold">1500+</span>
            <span className="text-xs text-gray-400">Seguidores no LinkedIn</span>
          </a>

          <a
            href={`https://wa.me/40028922`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <MessageCircle className="w-6 h-6 text-gray-400 group-hover:text-white" />
            <span className="font-semibold">24x7</span>
            <span className="text-xs text-gray-400">WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
