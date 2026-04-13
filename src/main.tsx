import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.tsx'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router'
import Pesquisa2 from './pages/Pesquisa2.tsx'
import Tutorial from './pages/Tutorial.tsx'
import Comandos from './pages/Comandos.tsx'
import Readme from './pages/Readme.tsx'
import { Home, BookOpen, Search, Terminal, Info, ArrowUpRight } from 'lucide-react'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#f8faff] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:rotate-6 transition-transform">Z</div>
            <span className="text-xl font-bold tracking-tight text-slate-800 hidden sm:block">Zorin OS <span className="text-blue-600">Edu</span></span>
          </Link>
          
          <nav className="flex items-center gap-1 sm:gap-4 overflow-x-auto no-scrollbar py-2">
            {[
              { path: '/', label: 'Home', icon: Home },
              { path: '/tutorial', label: 'Tutorial', icon: BookOpen },
              { path: '/pesquisa2', label: 'Pesquisa', icon: Search },
              { path: '/comandos', label: 'Comandos', icon: Terminal },
              { path: '/readme', label: 'Sobre', icon: Info },
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(item.path) 
                    ? 'bg-blue-100 text-blue-700 shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <item.icon size={16} strokeWidth={2.5} />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
             <a href="https://github.com/BarDeyvid/catolica-sc-software-engineering/tree/PAC" target="_blank" className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
               <ArrowUpRight size={20} />
             </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 min-h-[60vh] overflow-hidden">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 py-12 border-t border-slate-200 mt-12 text-center sm:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Zorin OS Project</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Projeto Academico focado na documentacao da instalacao, utilizacao e beneficios do Zorin OS no contexto de Engenharia de Software.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Links</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-500">
              <Link to="/tutorial" className="hover:text-blue-600 transition-colors">Guia de Instalação</Link>
              <Link to="/pesquisa2" className="hover:text-blue-600 transition-colors">Pesquisa de Mercado</Link>
              <Link to="/comandos" className="hover:text-blue-600 transition-colors">Referência do Terminal</Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Recursos</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-500">
              <a href="https://zorin.com" target="_blank" className="hover:text-blue-600 transition-colors">Zorin OS Official</a>
              <a href="https://ubuntu.com" target="_blank" className="hover:text-blue-600 transition-colors">Ubuntu Linux</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>© 2026 Católica SC Software Engineering Branch. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Construído com React & Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/pesquisa2" element={<Pesquisa2 />} />
          <Route path="/comandos" element={<Comandos />} />
          <Route path="/readme" element={<Readme />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
