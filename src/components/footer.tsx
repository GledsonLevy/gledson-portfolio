// src/components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="pt-20 pb-10 mt-20 border-t-2 border-gray-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono text-xs text-blue-600 dark:text-blue-500 tracking-widest uppercase mb-12 block font-semibold">
          // CONTATO_
        </span>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 flex flex-col gap-4">
            <span className="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-2 tracking-tighter">
              <span className="text-blue-600 dark:text-blue-500">
                &lt;/&gt;
              </span>{" "}
              Glêdson Levy
            </span>
            <p className="text-gray-600 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-sm mt-2">
              Transformando lógica em soluções. Aberto a novas oportunidades,
              parcerias e desafios no desenvolvimento de software.
            </p>
            <p className="text-gray-900 dark:text-white font-semibold mt-2">
              Vamos construir algo juntos?
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col justify-center">
            <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-5 border border-gray-200 dark:border-slate-800 shadow-inner">
              <div className="flex gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>
              <div className="font-mono text-xs text-gray-600 dark:text-slate-400 space-y-2">
                <p>
                  <span className="text-blue-600 dark:text-blue-400">
                    gledson@portfolio
                  </span>
                  <span className="text-gray-500 dark:text-slate-500">
                    :~ $
                  </span>{" "}
                  ping status
                </p>
                <div className="text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <span>&gt;</span>
                  <span>OS: Café & Foco</span>
                  <span className="flex items-center gap-1.5 ml-1 text-xs opacity-80 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    ONLINE
                  </span>
                </div>
                <p>
                  <span className="text-blue-600 dark:text-blue-400">
                    gledson@portfolio
                  </span>
                  <span className="text-gray-500 dark:text-slate-500">
                    :~ $
                  </span>{" "}
                  whoami --work
                </p>
                <p className="text-gray-900 dark:text-white font-medium">
                  &gt; Aberto a propostas
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col md:items-end justify-center gap-4">
            <h4 className="font-mono text-xs text-gray-500 dark:text-slate-500 uppercase tracking-widest mb-2">
              Conexões
            </h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/gledsonlevy"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gledsonlevy"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:gledsonlevy24@gmail.com"
                className="p-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-gray-500 dark:text-slate-500">
          <p>
            © {new Date().getFullYear()} Desenvolvido por Gledson. Todos os
            direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            Status:{" "}
            <span className="text-emerald-600 dark:text-emerald-500">
              200 OK
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
