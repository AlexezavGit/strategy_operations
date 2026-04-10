import React from 'react';
import { MANAGEMENT_STRUCTURE } from '../../constants';
import { Lang } from '../../types';
import { User, Target, BarChart2 } from 'lucide-react';

interface Props {
  lang: Lang;
}

const ManagementView: React.FC<Props> = ({ lang }) => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700">
         <h2 className="text-xl font-bold text-white mb-2">{lang === 'en' ? 'Program Management Structure' : 'Структура Управління Програмою'}</h2>
         <p className="text-slate-400 text-sm">
            {lang === 'en' 
             ? 'Optimized for lean operations. 4 Key Leads covering all strategic pillars, governed by a Supervisory Board and strict Data Privacy protocols.' 
             : 'Оптимізовано для економних операцій. 4 Ключові Керівники покривають всі стратегічні напрями, під контролем Наглядової Ради та суворих протоколів приватності даних.'}
         </p>
      </div>

      {/* Supervisory Board & Data Governance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-400" />
                  {lang === 'en' ? 'Supervisory Board' : 'Наглядова Рада'}
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                  {lang === 'en' 
                   ? 'Provides strategic oversight, ensures alignment with national interests, and guarantees transparency for institutional donors.' 
                   : 'Забезпечує стратегічний нагляд, гарантує узгодженість з національними інтересами та прозорість для інституційних донорів.'}
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>{lang === 'en' ? 'Institutional Donors (World Bank, USAID)' : 'Інституційні Донори (Світовий Банк, USAID)'}</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>{lang === 'en' ? 'State Representatives (NBU, Ministry of Economy, MoH)' : 'Представники Держави (НБУ, Мінекономіки, МОЗ)'}</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>{lang === 'en' ? 'Independent Auditors' : 'Незалежні Аудитори'}</li>
              </ul>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-400" />
                  {lang === 'en' ? 'Data Governance & Privacy' : 'Управління Даними та Приватність'}
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                  {lang === 'en' 
                   ? 'Strict separation of concerns to protect highly sensitive veteran data while enabling transparent impact verification.' 
                   : 'Суворе розділення повноважень для захисту надчутливих даних ветеранів із забезпеченням прозорої верифікації впливу.'}
              </p>
              <div className="space-y-3">
                  <div className="bg-slate-950 p-3 rounded border border-slate-800">
                      <span className="text-xs font-bold text-emerald-500 uppercase block mb-1">{lang === 'en' ? 'De-personalized Environment' : 'Деперсоніфіковане Середовище'}</span>
                      <span className="text-xs text-slate-300">{lang === 'en' ? 'The Consortium platform processes ONLY hashes and aggregated metrics. No PII is stored.' : 'Платформа Консорціуму обробляє ТІЛЬКИ хеші та агреговані метрики. Персональні дані не зберігаються.'}</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded border border-slate-800">
                      <span className="text-xs font-bold text-blue-500 uppercase block mb-1">{lang === 'en' ? 'NHSU (НСЗУ) Integration' : 'Інтеграція з НСЗУ'}</span>
                      <span className="text-xs text-slate-300">{lang === 'en' ? 'All highly sensitive medical records and PII are securely stored exclusively by the State (NHSU).' : 'Всі надчутливі медичні записи та персональні дані безпечно зберігаються виключно Державою (НСЗУ).'}</span>
                  </div>
              </div>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {MANAGEMENT_STRUCTURE.map((role, idx) => (
             <div key={idx} className="bg-slate-900 rounded-xl border border-slate-800 p-6 flex flex-col relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                 
                 <div className="mb-4">
                     <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-3 border border-slate-700">
                        <User className="w-6 h-6 text-slate-300" />
                     </div>
                     <h3 className="text-lg font-bold text-white leading-tight min-h-[50px]">{role.role[lang]}</h3>
                 </div>

                 <div className="space-y-4 flex-1">
                     <div className="bg-slate-950 p-3 rounded border border-slate-800">
                        <div className="flex items-center gap-2 mb-1 text-xs text-orange-400 font-bold uppercase">
                            <Target className="w-3 h-3" />
                            {lang === 'en' ? 'Focus Area' : 'Фокус'}
                        </div>
                        <p className="text-xs text-slate-300">{role.focus[lang]}</p>
                     </div>

                     <div className="bg-slate-950 p-3 rounded border border-slate-800">
                        <div className="flex items-center gap-2 mb-1 text-xs text-blue-400 font-bold uppercase">
                            <BarChart2 className="w-3 h-3" />
                            KPI
                        </div>
                        <p className="text-xs text-slate-300">{role.kpi[lang]}</p>
                     </div>
                 </div>

                 {role.reports.length > 0 && (
                     <div className="mt-4 pt-4 border-t border-slate-800">
                         <p className="text-[10px] text-slate-500 uppercase mb-2">{lang === 'en' ? 'Direct Reports' : 'Підлеглі'}</p>
                         <div className="flex flex-wrap gap-2">
                             {role.reports.map((r, i) => (
                                 <span key={i} className="px-2 py-1 bg-slate-800 text-slate-400 text-[10px] rounded">
                                     {r}
                                 </span>
                             ))}
                         </div>
                     </div>
                 )}
             </div>
         ))}
      </div>
    </div>
  );
};

export default ManagementView;