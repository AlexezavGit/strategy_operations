import React from 'react';
import { TIMELINE } from '../../constants';
import { Calendar, Flag, CheckCircle, Activity } from 'lucide-react';
import { Lang } from '../../types';

interface Props {
    lang: Lang;
}

const TimelineView: React.FC<Props> = ({ lang }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative border-l-2 border-slate-800 ml-4 space-y-12">
        {TIMELINE.map((phase, idx) => (
          <div key={idx} className="relative pl-8 pb-4">
            {/* Timeline Dot */}
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-slate-900 shadow-[0_0_10px_rgba(0,0,0,0.5)] ${phase.status === 'Current' ? 'bg-orange-500 ring-4 ring-orange-900/30' : 'bg-slate-700'}`}></div>
            
            <div className={`rounded-xl border p-6 transition-all duration-300 ${phase.status === 'Current' ? 'bg-gradient-to-r from-slate-900 to-slate-900 border-orange-500/50 shadow-[0_4px_20px_rgba(249,115,22,0.1)]' : 'bg-slate-900 border-slate-800 opacity-80'}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                        <h3 className={`text-lg font-bold ${phase.status === 'Current' ? 'text-white' : 'text-slate-400'}`}>{phase.phase[lang]}</h3>
                        <div className="flex items-center text-slate-500 text-sm mt-1 font-mono">
                            <Calendar className="w-4 h-4 mr-1.5" />
                            {phase.period[lang]}
                        </div>
                    </div>
                    {phase.status === 'Current' && (
                        <div className="mt-2 md:mt-0 px-3 py-1 bg-orange-500/20 border border-orange-500/50 text-orange-400 text-xs font-bold rounded-full self-start uppercase tracking-wide flex items-center gap-2">
                            <Activity className="w-3 h-3 animate-bounce" />
                            {lang === 'en' ? 'Critical Path Active' : 'Активний Етап'}
                        </div>
                    )}
                </div>

                <div className="mb-6 bg-slate-950 p-4 rounded-lg border border-slate-800/50">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                        <Flag className={`w-4 h-4 ${phase.status === 'Current' ? 'text-orange-500' : 'text-slate-600'}`} />
                        <span className="text-slate-500 uppercase text-xs font-bold mr-1">{lang === 'en' ? 'Trigger:' : 'Тригер:'}</span>
                        {phase.trigger[lang]}
                    </div>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                         {lang === 'en' ? 'Key Deliverables' : 'Ключові Результати'}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {phase.deliverables.map((d, i) => (
                            <li key={i} className="flex items-center text-sm text-slate-400">
                                <CheckCircle className={`w-4 h-4 mr-2.5 shrink-0 ${phase.status === 'Current' ? 'text-emerald-500' : 'text-slate-700'}`} />
                                {d[lang]}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineView;