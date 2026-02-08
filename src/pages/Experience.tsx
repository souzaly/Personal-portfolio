'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
      <ScrollAnimation>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          Experiência Profissional
        </motion.h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/50 border border-white/10 rounded-2xl p-10 sm:p-14 text-center backdrop-blur-sm hover:bg-gray-800/70 transition-all"
        >
          <div className="flex justify-center mb-6">
            <GraduationCap className="w-14 h-14 text-gray-400" />
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Ainda não possuo experiência profissional
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Atualmente sou estudante do ensino médio e estou focado em aprender
            programação de forma autodidata, desenvolvendo projetos pessoais e
            aprimorando minhas habilidades técnicas.
            <br /><br />
            Estou em busca da minha primeira oportunidade para aplicar meus
            conhecimentos na prática e evoluir profissionalmente.
          </p>
        </motion.div>
      </ScrollAnimation>
    </div>
  );
};

export default Experience;									>
										View Certificate
										<ExternalLink className="w-4 h-4" />
									</motion.a>
								</div>

								<div className="relative hidden md:block">
									<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
										<img
											src={exp.image}
											alt={exp.company}
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-transparent group-hover:scale-105 transition-transform duration-500" />
									</div>
									<div className="relative h-full flex items-center justify-center">
										<motion.a
											href={exp.certificateUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="px-8 py-3 text-white font-bold bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
											whileHover={{ y: -5 }}
										>
											View Certificate
											<ExternalLink className="w-4 h-4" />
										</motion.a>
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

export default Experience;
