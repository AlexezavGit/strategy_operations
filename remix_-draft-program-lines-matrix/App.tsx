import React, { useState } from 'react';
import { LayoutDashboard, Compass, Briefcase, Users, Clock, PieChart, Menu, X, Languages, ShieldAlert, GitMerge, Target, Database, Layers } from 'lucide-react';
import Dashboard from './components/views/Dashboard';
import DirectionsView from './components/views/DirectionsView';
import PortfolioView from './components/views/PortfolioView';
import PartnershipsView from './components/views/PartnershipsView';
import TimelineView from './components/views/TimelineView';
import FinancialsView from './components/views/FinancialsView';
import RisksView from './components/views/RisksView';
import ManagementView from './components/views/ManagementView';
import StrategyView from './components/views/StrategyView';
import ArchitectureView from './components/views/ArchitectureView';
import { Lang } from './types';
import logoDark from './FEEL_logo_dark.svg';

type View = 'dashboard' | 'directions' | 'portfolio' | 'partnerships' | 'timeline' | 'financials' | 'risks' | 'management' | 'strategy' | 'pipeline';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Lang>('en');

  const navItems = [
    { id: 'dashboard', label: { en: 'Strategic and Operational War Room', uk: 'Стратегічна та Операційна War Room' }, icon: LayoutDashboard },
    { id: 'strategy', label: { en: 'Execution Strategy', uk: 'Стратегія Виконання' }, icon: Compass },
    { id: 'management', label: { en: 'Management Structure', uk: 'Структура Управління' }, icon: GitMerge },
    { id: 'pipeline', label: { en: 'Architecture & Consortium', uk: 'Архітектура та Консорціум' }, icon: Layers },
    { id: 'directions', label: { en: 'Theory of Change', uk: 'Теорія Змін' }, icon: Target },
    { id: 'portfolio', label: { en: 'Intervention Portfolio', uk: 'Портфель Втручань' }, icon: Briefcase },
    { id: 'partnerships', label: { en: 'Ecosystem & Stakeholders', uk: 'Екосистема та Стейкхолдери' }, icon: Users },
    { id: 'timeline', label: { en: 'Roadmap', uk: 'Дорожня Карта' }, icon: Clock },
    { id: 'risks', label: { en: 'Risk Management', uk: 'Управління Ризиками' }, icon: ShieldAlert },
    { id: 'financials', label: { en: 'Resource Mobilization', uk: 'Мобілізація Ресурсів' }, icon: PieChart },
  ] as const;

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard lang={lang} />;
      case 'strategy': return <StrategyView lang={lang} />;
      case 'management': return <ManagementView lang={lang} />;
      case 'pipeline': return <ArchitectureView lang={lang} />;
      case 'directions': return <DirectionsView lang={lang} />;
      case 'portfolio': return <PortfolioView lang={lang} />;
      case 'partnerships': return <PartnershipsView lang={lang} />;
      case 'timeline': return <TimelineView lang={lang} />;
      case 'risks': return <RisksView lang={lang} />;
      case 'financials': return <FinancialsView lang={lang} />;
      default: return <Dashboard lang={lang} />;
    }
  };

  const toggleLang = () => setLang(prev => prev === 'en' ? 'uk' : 'en');

  return (
    <div className="min-h-screen bg-[#050A15] flex font-sans">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-slate-800 rounded-md shadow-md text-slate-200 border border-slate-700"
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 w-72 bg-[#050A15] text-slate-300 transform transition-transform duration-200 ease-in-out flex flex-col border-r border-slate-800
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-4 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-[#050A15] flex flex-col justify-center min-h-[100px]">
          <div className="flex justify-between items-start w-full">
            <div className="w-48">
                <img src={logoDark} alt="FEEL AGAIN" className="w-full h-auto object-contain" />
            </div>
            <button onClick={toggleLang} className="flex items-center gap-1 text-xs bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded transition-colors text-slate-200 border border-slate-700 mt-1">
              <Languages size={12} />
              {lang.toUpperCase()}
            </button>
          </div>
        </div>
        <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id as View);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg shadow-orange-900/30' 
                    : 'hover:bg-slate-900 hover:text-white text-slate-400'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium text-sm">{item.label[lang]}</span>
              </button>
            );
          })}
        </nav>
        
        <div className="p-6 border-t border-slate-800">
           <div className="flex items-center gap-2 text-xs text-slate-500">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             {lang === 'en' ? 'Status: Consortium Active' : 'Статус: Консорціум Активний'}
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-y-auto h-screen bg-[#050A15] relative">
        
        {/* Dynamic Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            {/* Animated Blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="p-8 max-w-7xl mx-auto relative z-10">
          <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                {navItems.find(n => n.id === currentView)?.label[lang]}
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                 Feel Again Program / 2026
              </p>
            </div>
            <div className="text-xs font-mono text-slate-500 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded border border-slate-800 shadow-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                LIVE: FA-2026-UA
            </div>
          </header>
          
          <div className="animate-fade-in pb-12">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;