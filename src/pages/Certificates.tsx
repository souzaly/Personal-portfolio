'use client';

import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">
            Certificados
          </h2>
        </motion.div>
      </ScrollAnimation>

      <ScrollAnimation>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/50 border border-white/10 rounded-xl p-10 text-center backdrop-blur-sm"
        >
          <div className="flex justify-center mb-6">
            <GraduationCap className="w-12 h-12 text-gray-400" />
          </div>

          <h3 className="text-2xl font-semibold mb-3">
            Ainda não possuo certificados
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Atualmente sou estudante do ensino médio e estou focado em aprender,
            desenvolver projetos práticos e evoluir minhas habilidades em
            programação.  
            <br />
            <br />
            Em breve, conforme eu concluir cursos e certificações, eles serão
            adicionados aqui.
          </p>
        </motion.div>
      </ScrollAnimation>
    </div>
  );
};

export default Certificates;
