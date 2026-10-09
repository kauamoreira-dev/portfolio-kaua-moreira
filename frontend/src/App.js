import { Component, useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { LangProvider } from "@/i18n";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Tech } from "@/components/Tech";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-ink p-8 text-center">
          <p className="text-slate-400">Algo deu errado ao carregar esta seção.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.1, anchors: true });
    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <ErrorBoundary>
      <LangProvider>
        <div className="grain min-h-screen bg-ink font-sans text-slate-50">
          <a
            href="#conteudo"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:text-white"
          >
            Pular para o conteúdo
          </a>
          <Cursor />
          <Navbar />
          <main id="conteudo">
            <Hero />
            <Marquee />
            <About />
            <Projects />
            <Tech />
            <Process />
            <Contact />
          </main>
          <Footer />
          <Toaster
            theme="dark"
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#111625",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#F8FAFC",
              },
            }}
          />
        </div>
      </LangProvider>
    </ErrorBoundary>
  );
}

export default App;
