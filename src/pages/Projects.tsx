'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
  {
    title: 'Live Docs',
    description:
      'Editor de documentos colaborativo em tempo real desenvolvido com Next.js, TypeScript e Tailwind CSS, com edição ao vivo, comentários e notificações.',
    image: '/projects_img/project-1.png',
    tags: ["Next.js", "TypeScript", "Liveblocks", "Lexical Editor", "ShadCN", "Tailwind CSS"]
  },
  {
    title: 'Clone do Figma',
    description:
      'Ferramenta de design colaborativo em tempo real inspirada no Figma, permitindo criar, modificar e colaborar em designs simultaneamente.',
    image: '/projects_img/project-2.png',
    tags: ["Next.js", "TypeScript", "Liveblocks", "Fabric.js", "ShadCN", "Tailwind CSS"]
  },
  {
    title: 'Aplicativo de Videoconferência',
    description:
      'Aplicação de videoconferência que permite criar e participar de reuniões com chat, compartilhamento de tela e gravação.',
    image: '/projects_img/project-3.png',
    tags: ["Tailwind CSS", "React.js", "Next.js", "Clerk", "Stream"]
  },
  {
    title: 'Chatbot Gemini',
    description:
      'Chatbot desenvolvido em React inspirado no Google Gemini AI, com interface de conversa e integração com APIs do Google.',
    image: '/projects_img/project-4.png',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'Google APIs']
  },
  {
    title: 'Aplicativo de Viagens',
    description:
      'Aplicação web em Next.js que oferece informações de viagem, com interface modular e responsiva utilizando Tailwind CSS.',
    image: '/projects_img/project-5.png',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Projeto Brainwave',
    description:
      'Aplicação moderna com foco em IA, desenvolvida com React e Tailwind CSS, apresentando animações suaves, design único e layout responsivo.',
    image: '/projects_img/project-6.png',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'Vite']
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Projetos em Destaque
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.title}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BOTÕES DESATIVADOS */}
                <div className="flex space-x-4 opacity-50 cursor-not-allowed">
                  <div className="flex items-center space-x-1 text-gray-300">
                    <Github className="w-4 h-4" />
                    <span>Código</span>
                  </div>

                  <div className="flex items-center space-x-1 text-gray-300">
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
