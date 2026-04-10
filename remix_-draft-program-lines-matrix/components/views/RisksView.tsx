import React from 'react';
import { RISKS, COLORS } from '../../constants';
import { Lang } from '../../types';
import { ShieldAlert, Activity, CheckSquare } from 'lucide-react';

interface Props {
    lang: Lang;
}

const RisksView: React.FC<Props> = ({ lang }) => {
  
  const translateImpact = (impact: string) => {
      if (lang === 'en') return impact;
      switch(impact) {
          case 'Critical': return 'Критичний';
          case 'Severe': return 'Серйозний';
          case 'Moderate': return 'Помірний';
          default: return impact;
      }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-xl border border-slate-800">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-red-500" />
            {lang === 'en' ? 'Risk Management Matrix' : 'Матриця Управління Ризиками'}
        </h3>
        <p className="text-slate-400 text-sm max-w-3xl">
            {lang === 'en' 
             ? 'Comprehensive analysis of operational threats with triple-layer mitigation strategies designed for the "Consortium" scenario.'
             : 'Комплексний аналіз операційних загроз з трирівневими стратегіями пом’якшення, розробленими для сценарію "Консорціум".'}
        </p>
      </div>

      {/* Risk Severity Chart */}
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col relative overflow-hidden">
         <h4 className="text-slate-400 font-bold mb-6 text-xs uppercase tracking-wider pl-2 border-l-2 border-slate-700">
            {lang === 'en' ? 'Risk Severity & Mitigation Funnel' : 'Воронка Серйозності Ризиків та Пом\'якшення'}
         </h4>
         
         <div className="space-y-6">
            {RISKS.map((risk) => {
                // Calculate severity score (1-9)
                const impactScore = risk.impact === 'Critical' ? 3 : risk.impact === 'Severe' ? 2 : 1;
                const probScore = risk.probability === 'High' ? 3 : risk.probability === 'Medium' ? 2 : 1;
                const severity = impactScore * probScore;
                
                // Determine color based on severity
                const colorClass = severity >= 6 ? 'bg-red-500' : severity >= 4 ? 'bg-orange-500' : 'bg-yellow-500';
                const widthPercent = (severity / 9) * 100;

                return (
                    <div key={risk.id} className="relative">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-sm font-bold text-slate-200 w-2/3 truncate pr-4" title={risk.risk[lang]}>
                                {risk.risk[lang]}
                            </span>
                            <div className="flex gap-3 text-[10px] font-mono text-slate-500 uppercase text-right">
                                <span>{lang === 'en' ? 'Impact:' : 'Вплив:'} <span className="text-slate-300">{translateImpact(risk.impact)}</span></span>
                                <span>{lang === 'en' ? 'Prob:' : 'Ймовір:'} <span className="text-slate-300">{risk.probability === 'Low' ? (lang === 'en' ? 'Low' : 'Низька') : risk.probability === 'Medium' ? (lang === 'en' ? 'Medium' : 'Середня') : (lang === 'en' ? 'High' : 'Висока')}</span></span>
                            </div>
                        </div>
                        
                        {/* Severity Bar */}
                        <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                            <div 
                                className={`h-full ${colorClass} transition-all duration-1000`} 
                                style={{ width: `${widthPercent}%` }}
                            ></div>
                        </div>
                    </div>
                );
            })}
         </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {RISKS.map((risk) => (
            <div key={risk.id} className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-colors">
                <div className="p-6 border-b border-slate-800 bg-slate-950 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                         <div className="p-3 bg-red-900/20 rounded-lg text-red-500 border border-red-900/50 shrink-0">
                            <Activity className="w-6 h-6" />
                         </div>
                         <div>
                             <h4 className="text-lg font-bold text-slate-200">{risk.risk[lang]}</h4>
                             <div className="flex gap-4 mt-2">
                                <span className="text-xs font-mono text-slate-500 uppercase flex items-center gap-1">
                                    Impact: <span className="text-red-400 font-bold">{translateImpact(risk.impact)}</span>
                                </span>
                                <span className="text-xs font-mono text-slate-500 uppercase flex items-center gap-1">
                                    Probability: <span className="text-orange-400 font-bold">{risk.probability === 'Low' ? (lang === 'en' ? 'Low' : 'Низька') : risk.probability === 'Medium' ? (lang === 'en' ? 'Medium' : 'Середня') : (lang === 'en' ? 'High' : 'Висока')}</span>
                                </span>
                             </div>
                         </div>
                    </div>
                </div>
                <div className="p-6 bg-slate-900/50">
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                        {lang === 'en' ? 'Mitigation Strategies (Alternative Paths)' : 'Стратегії Пом’якшення (Альтернативні Шляхи)'}
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {risk.mitigations.map((m, i) => (
                            <div key={i} className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex items-start gap-3 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-slate-800 group-hover:bg-blue-500 transition-colors"></div>
                                <CheckSquare className="w-4 h-4 text-slate-600 mt-1 shrink-0 group-hover:text-blue-500 transition-colors" />
                                <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">
                                    {m[lang]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default RisksView;