import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Hobbies } from "./components/hobbies";
import { Formacao } from "./components/formacao";
import { Projetos } from "./components/projetos";
import { Tecnologias } from "./components/tecnologias";
import { Footer } from "./components/footer";
import { Reveal } from "./components/Reveal";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0f19] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="container mx-auto px-4 max-w-6xl">
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <Hobbies />
        </Reveal>
        <Reveal>
          <Formacao />
        </Reveal>
        <Reveal>
          <Projetos />
        </Reveal>
        <Reveal>
          <Tecnologias />
        </Reveal>
        <Footer />
      </main>
    </div>
  );
}

export default App;
