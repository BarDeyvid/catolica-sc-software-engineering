import { Link } from 'react-router'
import { BookOpen, Search, Terminal, Info, ChevronRight, Zap, Shield, Cpu } from 'lucide-react'
import heroImage from './assets/hero.png'

function App() {
  const cards = [
    {
      to: "/tutorial",
      title: "Tutorial de Instalação",
      desc: "Guia completo passo a passo para instalar o Zorin OS 18 Core.",
      icon: BookOpen,
      color: "bg-blue-500",
      lightColor: "bg-blue-50"
    },
    {
      to: "/pesquisa2",
      title: "Pesquisa Acadêmica",
      desc: "Análise comparativa entre Windows, macOS e Linux no mercado.",
      icon: Search,
      color: "bg-purple-500",
      lightColor: "bg-purple-50"
    },
    {
      to: "/comandos",
      title: "Guia de Comandos",
      desc: "Referência rápida dos principais comandos do terminal Linux.",
      icon: Terminal,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50"
    },
    {
      to: "/readme",
      title: "Sobre o Projeto",
      desc: "Informações sobre os objetivos deste PAC de Engenharia de Software.",
      icon: Info,
      color: "bg-amber-500",
      lightColor: "bg-amber-50"
    }
  ]

  return (
    <div className="flex flex-col animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-800 text-white overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase bg-white/20 backdrop-blur-md rounded-full">
            Project PAC 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Descubra o Poder do <span className="text-blue-200">Zorin OS</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Uma plataforma moderna, segura e incrivelmente rápida para estudantes de Engenharia de Software. Explore nossa documentação acadêmica completa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link to="/tutorial" className="px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-white/10 active:scale-95 flex items-center gap-2">
               Começar Agora <ChevronRight size={20} />
             </Link>
          </div>
        </div>

        {/* Abstract shapes for "prettier" look */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Highlights */}
      <section className="px-6 py-12 bg-slate-50 flex justify-center border-b border-slate-100">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, label: "Performance", desc: "Leve e otimizado para hardware antigo." },
            { icon: Shield, label: "Segurança", desc: "Baseado em Linux com permissões rigorosas." },
            { icon: Cpu, label: "Moderno", desc: "Interface intuitiva e compatível com apps Windows." }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">{item.label}</h3>
                <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid Links */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Explore os Conteúdos</h2>
            <p className="text-slate-500">Selecione uma das seções abaixo para começar sua leitura.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <Link 
                key={index} 
                to={card.to}
                className="group flex flex-col p-6 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${card.lightColor} rounded-2xl flex items-center justify-center ${card.color.replace('bg-', 'text-')} mb-6 group-hover:scale-110 transition-transform`}>
                  <card.icon size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {card.desc}
                </p>
                <div className="flex items-center text-blue-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Ler mais <ChevronRight size={16} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section (Optional, if hero exists) */}
      <section className="px-6 pb-24">
         <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
           <img src={heroImage} alt="Zorin OS Desktop" className="w-full h-auto" />
         </div>
      </section>
    </div>
  )
}

export default App
