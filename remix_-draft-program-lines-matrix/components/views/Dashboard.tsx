import React, { useState, useEffect } from 'react';
import { DIRECTIONS, PROJECTS, PARTNERSHIPS, CANONICAL_STATS, FAILURES, NBU_STRATEGY, KILLER_QUOTES, MACRO_ECONOMIC_STATS, DO_DONT_RULES } from '../../constants';
import { Layers, Activity, DollarSign, Users, Info, AlertTriangle, Target, Zap, Unplug, Landmark, AlertOctagon, Cpu, Quote, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { Lang } from '../../types';

interface Props {
  lang: Lang;
  setCurrentView?: (view: string) => void;
}

const Dashboard: React.FC<Props> = ({ lang, setCurrentView }) => {
  const totalProjects = Object.values(PROJECTS).flat().length;
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % KILLER_QUOTES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 font-sans">
      
      {/* Clarification Banner */}
      <div className="bg-blue-900/20 border border-blue-800 p-4 rounded-lg flex items-start gap-3">
         <Info className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
         <div className="text-sm text-slate-300 w-full">
            <span className="font-bold text-blue-400 block mb-1">
               {lang === 'en' ? 'What this IS and what this IS NOT' : 'Що це Є і чим це НЕ Є'}
            </span>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
               {lang === 'en' 
                   ? 'IS: Digital financial rails and data infrastructure. A measurement and payment system that complements existing programs. IS NOT: A mental health service provider. Not an app or startup. We do not provide therapy; we make it findable, fundable, and accountable.' 
                   : 'Є: Цифрові фінансові рейки та дата-інфраструктура. Система вимірювання та платежів, що доповнює існуючі програми. НЕ Є: Надавачем послуг психічного здоров\'я. Не додаток і не стартап. Ми не надаємо терапію; ми робимо її знаходжуваною, фінансованою та підзвітною.'}
            </p>
         </div>
      </div>

      {/* Macroeconomic & State Block (Top) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#050A15] p-6 rounded-xl border border-slate-800 relative overflow-hidden group hover:border-[#00F5FF]/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00F5FF]/10 to-transparent rounded-bl-full -mr-4 -mt-4"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-slate-900 rounded-lg text-[#00F5FF] border border-slate-800">
                        <Landmark className="w-5 h-5" />
                    </div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{lang === 'en' ? "Cost to State" : "Вартість для Держави"}</p>
                </div>
                <h3 className="text-3xl font-bold mt-2 text-[#00F5FF]">{MACRO_ECONOMIC_STATS.costToState[lang]}</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">{MACRO_ECONOMIC_STATS.costToStateSub[lang]}</p>
            </div>
        </div>
        <div className="bg-[#050A15] p-6 rounded-xl border border-slate-800 relative overflow-hidden group hover:border-[#F59E0B]/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F59E0B]/10 to-transparent rounded-bl-full -mr-4 -mt-4"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-slate-900 rounded-lg text-[#F59E0B] border border-slate-800">
                        <Activity className="w-5 h-5" />
                    </div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{lang === 'en' ? "Macroeconomic Effect" : "Макроекономічний Ефект"}</p>
                </div>
                <h3 className="text-3xl font-bold mt-2 text-[#F59E0B]">{MACRO_ECONOMIC_STATS.gdpImpact[lang]}</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">{MACRO_ECONOMIC_STATS.gdpImpactSub[lang]}</p>
            </div>
        </div>
      </div>

      {/* Thin Navigation Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <button onClick={() => setCurrentView && setCurrentView('directions')} className="flex items-center justify-between bg-[#050A15] hover:bg-slate-900 border border-slate-800 hover:border-slate-600 p-3 rounded-lg transition-all text-left group">
            <div className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white">{lang === 'en' ? "Strategic Pillars" : "Стратегічні Напрями"}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors" />
        </button>
        <button onClick={() => setCurrentView && setCurrentView('portfolio')} className="flex items-center justify-between bg-[#050A15] hover:bg-slate-900 border border-slate-800 hover:border-slate-600 p-3 rounded-lg transition-all text-left group">
            <div className="flex items-center gap-3">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white">{lang === 'en' ? "Active Interventions" : "Активні Втручання"}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
        </button>
        <button onClick={() => setCurrentView && setCurrentView('partnerships')} className="flex items-center justify-between bg-[#050A15] hover:bg-slate-900 border border-slate-800 hover:border-slate-600 p-3 rounded-lg transition-all text-left group">
            <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white">{lang === 'en' ? "Partner Ecosystem" : "Екосистема Партнерів"}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
        </button>
      </div>

      {/* Do / Don't Columns (Language Discipline) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {DO_DONT_RULES.map((rule, idx) => (
            <div key={idx} className={`p-5 rounded-xl border ${rule.type === 'do' ? 'bg-[#ECFDF5]/5 border-[#16A34A]/30' : 'bg-[#FEF2F2]/5 border-[#C0392B]/30'}`}>
                <h4 className={`text-sm font-bold mb-4 flex items-center gap-2 ${rule.type === 'do' ? 'text-[#16A34A]' : 'text-[#C0392B]'}`}>
                    {rule.type === 'do' ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    {rule.title[lang]}
                </h4>
                <ul className="space-y-3">
                    {rule.items.map((item, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                            <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${rule.type === 'do' ? 'bg-[#16A34A]' : 'bg-[#C0392B]'}`}></span>
                            <span className="leading-relaxed">{item[lang]}</span>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
      </div>

      {/* Rotating Killer Quote */}
      <div className="bg-[#050A15] border border-slate-800 p-4 rounded-xl flex gap-4 items-center">
        <Quote className="w-6 h-6 text-[#F59E0B] shrink-0 opacity-50" />
        <p className="text-slate-300 italic text-sm font-serif leading-relaxed">"{KILLER_QUOTES[quoteIndex][lang]}"</p>
      </div>

      {/* Reality Check Grid (Paired Stats) */}
      <div className="bg-[#050A15] rounded-xl border border-slate-800 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h3 className="text-white font-bold flex items-center gap-2 text-lg">
                <Target className="w-5 h-5 text-[#00F5FF]" />
                {lang === 'en' ? "Needs & Human Resources Reality Check" : "Потреби та Людські Ресурси: Перевірка Реальністю"}
            </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Pair 1: People at risk vs Services provided */}
            <div className="flex flex-col border border-slate-700 rounded-lg overflow-hidden">
                <div className="p-4 bg-slate-900/50 border-b border-slate-700/50 flex-1">
                    <div className="text-2xl font-black text-white font-mono mb-1">9.6M</div>
                    <div className="text-xs text-slate-400">{lang === 'en' ? "People at risk (WHO, 2025)" : "Людей у зоні ризику (ВООЗ, 2025)"}</div>
                </div>
                <div className="p-4 bg-[#050A15] flex-1">
                    <div className="text-xl font-bold text-slate-300 font-mono mb-1">624K</div>
                    <div className="text-xs text-slate-500">{lang === 'en' ? "Services provided in 2025 (HEAL ISR #6)" : "Надано послуг за 2025 рік (HEAL ISR #6)"}</div>
                </div>
            </div>

            {/* Pair 2: Clinical Need vs Hours/Specialists */}
            <div className="flex flex-col border border-slate-700 rounded-lg overflow-hidden relative">
                <div className="p-4 bg-slate-900/50 border-b border-slate-700/50 flex-1">
                    <div className="text-2xl font-black text-[#F59E0B] font-mono mb-1">3.9M</div>
                    <div className="text-xs text-slate-400">{lang === 'en' ? "Forecasted moderate/severe disorders" : "Прогнозна кількість розладів середньої/важкої тяжкості"}</div>
                </div>
                <div className="p-4 bg-[#050A15] flex-1 relative">
                    <div className="text-xl font-bold text-slate-300 font-mono mb-1">62.4M</div>
                    <div className="text-xs text-slate-500">{lang === 'en' ? "Hours of low-intensity therapy needed (16h/patient)" : "Годин низько-інтенсивної терапії потрібно (16г/пацієнт)"}</div>
                    <div className="absolute bottom-2 right-2 text-[10px] text-slate-600 font-mono text-right">
                        {lang === 'en' ? "Requires:" : "Потребує:"}<br/>
                        <span className="text-[#00F5FF]">62,400</span><br/>
                        {lang === 'en' ? "specialists (1000h/yr)" : "фахівців (1000г/рік)"}
                    </div>
                </div>
            </div>

            {/* Pair 3: Certificates vs Practicing */}
            <div className="flex flex-col border border-slate-700 rounded-lg overflow-hidden">
                <div className="p-4 bg-slate-900/50 border-b border-slate-700/50 flex-1">
                    <div className="text-2xl font-black text-white font-mono mb-1">117,652</div>
                    <div className="text-xs text-slate-400">{lang === 'en' ? "mhGAP Certificates Issued" : "Видано сертифікатів mhGAP"}</div>
                </div>
                <div className="p-4 bg-[#050A15] flex-1">
                    <div className="text-xl font-bold text-[#C0392B] font-mono mb-1">42</div>
                    <div className="text-xs text-slate-500">{lang === 'en' ? "Practicing under formal supervision" : "Практикують під формальною супервізією"}</div>
                </div>
            </div>

            {/* Pair 4: Budget vs Sync */}
            <div className="flex flex-col border border-slate-700 rounded-lg overflow-hidden">
                <div className="p-4 bg-slate-900/50 border-b border-slate-700/50 flex-1">
                    <div className="text-2xl font-black text-white font-mono mb-1">89%</div>
                    <div className="text-xs text-slate-400">{lang === 'en' ? "State MH Budget to Inpatient" : "Держбюджет MH на стаціонар"}</div>
                </div>
                <div className="p-4 bg-[#050A15] flex-1">
                    <div className="text-xl font-bold text-[#A855F7] font-mono mb-1">~0%</div>
                    <div className="text-xs text-slate-500">{lang === 'en' ? "ESOZ Synchronization (Shadow sector)" : "Синхронізація з ЕСОЗ (Тіньовий сектор)"}</div>
                </div>
            </div>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;
