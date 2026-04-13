import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronLeft, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router';

interface MarkdownPageProps {
  content: string;
}

export default function MarkdownPage({ content }: MarkdownPageProps) {
  // Simple heuristic to extract a title from markdown if it starts with #
  const titleMatch = content.match(/^#\s+(.*)/m);
  const title = titleMatch ? titleMatch[1] : 'Documentation';
  const cleanContent = titleMatch ? content.replace(/^#\s+(.*)/m, '') : content;

  return (
    <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Article Header */}
      <div className="px-6 py-10 md:px-12 md:py-16 border-b border-slate-100 bg-slate-50/50">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors mb-6 group">
          <ChevronLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
          {title}
        </h1>
        <div className="flex flex-wrap gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Calendar size={16} /> <span>Abril 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={16} /> <span>Grupo 1</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} /> <span>10 minutos de leitura</span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="px-6 py-12 md:px-12 md:py-16">
        <article className="prose prose-slate prose-lg max-w-none 
          prose-headings:text-slate-900 prose-headings:font-bold
          prose-p:text-slate-600 prose-p:leading-relaxed
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-slate-100
          prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-slate-900 prose-pre:rounded-2xl prose-pre:shadow-xl
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
          prose-strong:text-slate-900 prose-strong:font-bold
          prose-table:border prose-table:border-slate-200 prose-table:rounded-xl prose-table:overflow-hidden
          prose-th:bg-slate-50 prose-th:px-4 prose-th:py-3 prose-th:text-slate-900
          prose-td:px-4 prose-td:py-3 prose-td:border-t prose-td:border-slate-100
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {cleanContent}
          </ReactMarkdown>
        </article>
      </div>

      {/* Article Footer */}
      <div className="px-6 py-12 md:px-12 bg-slate-50 border-t border-slate-100 text-center">
        <p className="text-slate-500 text-sm mb-6">Fim da documentação. Alguma dúvida?</p>
        <Link to="/" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm active:scale-95">
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}
