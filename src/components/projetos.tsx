// src/components/Projetos.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Maximize2,
  X,
  Lock,
  Archive,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { myProjects } from "../data/projects";
import type { Project } from "../data/types";

export function Projetos() {
  const [activeProject, setActiveProject] = useState<Project>(myProjects[0]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  const rawImages =
    activeProject.images && activeProject.images.length > 0
      ? activeProject.images
      : [activeProject.image || "", "", ""];

  const galleryImages = [
    rawImages[0] || "",
    rawImages[1] || "",
    rawImages[2] || "",
  ];

  const handleSelectProject = (project: Project) => {
    setActiveProject(project);
    setSelectedImageIndex(0);
  };

  return (
    <section id="projetos" className="py-20 lg:py-32 scroll-mt-10">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs text-blue-600 dark:text-blue-500 tracking-widest uppercase mb-2 block font-semibold">
            // PROJETOS_
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-light-text dark:text-dark-text tracking-tighter mb-2">
            Meus trabalhos recentes
          </h2>
        </div>
        <p className="font-mono text-xs text-light-muted dark:text-dark-muted max-w-xs md:text-right">
          Sistemas e interfaces desenvolvidas
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        {myProjects.map((project) => (
          <button
            key={project.id}
            onClick={() => handleSelectProject(project)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border text-left whitespace-normal
              ${
                activeProject.id === project.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/30"
                  : "bg-transparent text-light-muted dark:text-dark-muted border-gray-300 dark:border-slate-700 hover:bg-light-card dark:hover:bg-dark-card hover:text-light-text dark:hover:text-dark-text"
              }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      <div className="rounded-2xl bg-light-card dark:bg-dark-card border border-gray-200 dark:border-slate-800 overflow-hidden transition-all duration-300 shadow-sm">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-[55%] border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-slate-800 bg-light-bg/50 dark:bg-dark-bg/30 flex flex-col items-center justify-between p-6 min-h-[380px]">
            <div
              onClick={() =>
                galleryImages[selectedImageIndex] &&
                setActiveModalImage(galleryImages[selectedImageIndex])
              }
              className="w-full h-[280px] flex items-center justify-center rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-light-card dark:bg-dark-card group relative cursor-pointer p-2"
            >
              {galleryImages[selectedImageIndex] ? (
                <>
                  <img
                    src={galleryImages[selectedImageIndex]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125 pointer-events-none"
                  />
                  <img
                    src={galleryImages[selectedImageIndex]}
                    alt={`${activeProject.title} preview ${selectedImageIndex + 1}`}
                    className="relative z-10 max-h-full max-w-full object-contain rounded-lg drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-20 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs backdrop-blur-[2px]">
                    <Maximize2 size={16} /> Clique para expandir
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-blue-500/60 p-4">
                  <Code2 size={48} className="mb-2" />
                  <span className="text-xs font-mono text-light-muted dark:text-dark-muted">
                    ~/preview_0{selectedImageIndex + 1}.png
                  </span>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-4 w-full justify-center">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all flex items-center justify-center relative bg-light-card dark:bg-dark-card ${
                    selectedImageIndex === idx
                      ? "border-blue-500 scale-105 shadow-md shadow-blue-500/20"
                      : "border-gray-300 dark:border-slate-700 opacity-60 hover:opacity-100"
                  }`}
                >
                  {img ? (
                    <>
                      <img
                        src={img}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover blur-sm opacity-30"
                      />
                      <img
                        src={img}
                        alt={`thumb ${idx + 1}`}
                        className="relative z-10 h-full w-full object-contain p-0.5"
                      />
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-light-muted dark:text-dark-muted text-[10px] font-mono gap-0.5">
                      <Code2 size={14} />
                      <span>thumb {idx + 1}</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-[45%] flex flex-col justify-between p-8">
            <div>
              <div className="flex gap-2 mb-4">
                <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50">
                  {activeProject.category}
                </span>
                <span
                  className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded border ${
                    activeProject.status === "Concluído"
                      ? "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50"
                      : "bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/50"
                  }`}
                >
                  {activeProject.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-3 tracking-tight">
                {activeProject.title}
              </h3>

              <p className="text-light-muted dark:text-dark-muted leading-relaxed mb-6 text-sm">
                {activeProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.technologies.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-light-bg dark:bg-dark-bg border border-gray-200 dark:border-slate-700 text-light-muted dark:text-dark-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-slate-800 flex flex-col gap-3">
              <div className="flex gap-3">
                {activeProject.githubUrl ? (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 py-2.5 px-3 rounded-xl border border-gray-300 dark:border-slate-700 text-light-text dark:text-dark-text font-mono text-xs hover:bg-light-bg dark:hover:bg-dark-bg transition-colors"
                  >
                    <FaGithub size={16} /> Repositório
                  </a>
                ) : (
                  <div
                    className="flex items-center justify-center gap-2 flex-1 py-2.5 px-3 rounded-xl border border-dashed border-gray-300 dark:border-slate-700 text-light-muted dark:text-dark-muted font-mono text-xs cursor-help bg-light-bg/50 dark:bg-dark-bg/30 transition-colors hover:border-gray-400 dark:hover:border-slate-600"
                    title={
                      activeProject.id === "buffet"
                        ? "Repositório confidencial / Código privado"
                        : "Projeto raiz! Desenvolvido localmente antes da equipe dominar o Git 😅"
                    }
                  >
                    {activeProject.id === "buffet" ? (
                      <>
                        <Lock size={16} /> Privado
                      </>
                    ) : (
                      <>
                        <Archive size={16} /> Sem Git
                      </>
                    )}
                  </div>
                )}

                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 py-2.5 px-3 rounded-xl bg-blue-600 text-white font-mono font-bold text-xs hover:bg-blue-500 transition-colors"
                  >
                    <ExternalLink size={16} /> Deploy
                  </a>
                )}
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full py-2.5 px-4 rounded-xl border border-gray-300 dark:border-slate-700 text-light-muted dark:text-dark-muted font-mono text-xs hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 flex items-center justify-center gap-2 transition-all mt-1"
              >
                {isExpanded ? (
                  <>
                    Recolher detalhes <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    Ver visão detalhada & recursos <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border-t border-gray-200 dark:border-slate-800 bg-light-bg/80 dark:bg-dark-bg/80 p-8"
            >
              <div className="max-w-4xl mx-auto space-y-6">
                {activeProject.longDescription && (
                  <div>
                    <h4 className="text-xs font-mono text-blue-600 dark:text-blue-500 tracking-widest uppercase mb-2">
                      // ARQUITETURA_E_PROPOSITO
                    </h4>
                    <p className="text-light-muted dark:text-dark-muted text-sm leading-relaxed">
                      {activeProject.longDescription}
                    </p>
                  </div>
                )}

                {activeProject.features &&
                  activeProject.features.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono text-blue-600 dark:text-blue-500 tracking-widest uppercase mb-3">
                        // RECURSOS_E_FUNCIONALIDADES
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {activeProject.features.map(
                          (feature: string, idx: number) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 p-3 rounded-lg bg-light-card dark:bg-dark-card border border-gray-200 dark:border-slate-800 text-xs text-light-muted dark:text-dark-muted"
                            >
                              <CheckCircle2
                                size={16}
                                className="text-blue-600 dark:text-blue-500 shrink-0 mt-0.5"
                              />
                              <span>{feature}</span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center">
              <button
                onClick={() => setActiveModalImage(null)}
                className="absolute top-0 right-0 text-white/70 hover:text-white bg-slate-800/80 hover:bg-slate-700 p-2.5 rounded-full backdrop-blur-sm transition-all border border-slate-700 flex items-center justify-center"
              >
                <X size={20} />
              </button>

              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={activeModalImage}
                alt="Visualização expandida"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-slate-800"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
