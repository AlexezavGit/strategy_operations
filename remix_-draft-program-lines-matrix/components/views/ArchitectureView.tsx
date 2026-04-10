import React from 'react';
import { ARCHITECTURE_LAYERS, PARTNERSHIPS } from '../../constants';
import { Lang } from '../../types';
import { Layers, Network, ShieldCheck, Cpu, Database, Activity, ArrowDown } from 'lucide-react';

interface Props {
    lang: Lang;
}

const ArchitectureView: React.FC<Props> = ({ lang }) => {
  const getIconForLayer = (id: number) => {
      switch(id) {
          case 1: return <Activity className="w-5 h-5 text-purple-400" />;
          case 2: return <Cpu className="w-5 h-5 text-blue-400" />;
          case 3: return <Database className="w-5 h-5 text-emerald-400" />;
          case 4: return <Network className="w-5 h-5 text-orange-400" />;
          case 5: return <ShieldCheck className="w-5 h-5 text-slate-400" />;
          default: return <Layers className="w-5 h-5 text-slate-400" />;
      }
  };

  const getPartnersForLayer = (layerName: string) => {
      return PARTNERSHIPS.filter(p => p.layer === layerName);
  };

  return (
    <div className="space-y-8">
      
      <div className="bg-slate-900/80 backdrop-blur p-6 rounded-xl border border-slate-800">
         <h3 className="text-xl text-white font-bold mb-2 flex items-center gap-2">
            <Layers className="w-6 h-6 text-blue-500" />
            {lang === 'en' ? 'System Architecture & Consortium' : 'Архітектура Системи та Консорціум'}
         </h3>
         <p className="text-sm text-slate-400 max-w-4xl">
            {lang === 'en' 
             ? 'The FEEL Again infrastructure is built on 5 distinct layers, connected by an Integration Gateway. Each layer is supported by specific consortium partners, ensuring best-in-class execution and removing single points of failure.' 
             : 'Інфраструктура FEEL Again побудована на 5 окремих шарах, з\'єднаних Інтеграційним Шлюзом. Кожен шар підтримується специфічними партнерами консорціуму, що забезпечує найкраще виконання та усуває єдині точки відмови.'}
         </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Architecture Stack */}
          <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-200 mb-6 border-l-4 border-blue-500 pl-3">
                  {lang === 'en' ? 'The 5-Layer Stack + Gateway' : 'Стек з 5 шарів + Шлюз'}
              </h4>
              
              <div className="flex flex-col gap-2">
                  {ARCHITECTURE_LAYERS.map((layer, idx) => (
                      <React.Fragment key={layer.id || idx}>
                          <div className={`p-4 rounded-lg border ${layer.isGateway ? 'bg-orange-950/30 border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.1)]' : 'bg-slate-900 border-slate-800'} flex items-start gap-4`}>
                              <div className={`p-2 rounded-lg ${layer.isGateway ? 'bg-orange-900/50' : 'bg-slate-800'}`}>
                                  {layer.isGateway ? <Network className="w-5 h-5 text-orange-400" /> : getIconForLayer(layer.id)}
                              </div>
                              <div>
                                  <h5 className={`font-bold text-sm mb-1 ${layer.isGateway ? 'text-orange-400' : 'text-slate-200'}`}>
                                      {layer.name[lang]}
                                  </h5>
                                  <p className="text-xs text-slate-400 leading-relaxed">
                                      {layer.desc[lang]}
                                  </p>
                              </div>
                          </div>
                          {idx < ARCHITECTURE_LAYERS.length - 1 && !layer.isGateway && (
                              <div className="flex justify-center">
                                  <ArrowDown className="w-4 h-4 text-slate-700" />
                              </div>
                          )}
                      </React.Fragment>
                  ))}
              </div>
          </div>

          {/* Consortium Partners */}
          <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-200 mb-6 border-l-4 border-emerald-500 pl-3">
                  {lang === 'en' ? 'Consortium Partners by Function' : 'Партнери Консорціуму за Функцією'}
              </h4>
              
              <div className="grid grid-cols-1 gap-4">
                  {/* Quality / Clinical */}
                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                      <h5 className="text-purple-400 font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Activity className="w-4 h-4" />
                          {lang === 'en' ? 'Clinical Excellence' : 'Клінічна Досконалість'}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                          {getPartnersForLayer('Quality').flatMap(p => p.partners).map((partner, i) => (
                              <span key={i} className="px-3 py-1 bg-purple-900/20 border border-purple-500/30 rounded-full text-xs text-purple-200">
                                  {partner}
                              </span>
                          ))}
                      </div>
                  </div>

                  {/* Execution / Digital */}
                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                      <h5 className="text-green-400 font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Cpu className="w-4 h-4" />
                          {lang === 'en' ? 'Digital Infrastructure' : 'Цифрова Інфраструктура'}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                          {getPartnersForLayer('Execution').flatMap(p => p.partners).map((partner, i) => (
                              <span key={i} className="px-3 py-1 bg-green-900/20 border border-green-500/30 rounded-full text-xs text-green-200">
                                  {partner}
                              </span>
                          ))}
                      </div>
                  </div>

                  {/* Funding / Financial */}
                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                      <h5 className="text-yellow-400 font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Database className="w-4 h-4" />
                          {lang === 'en' ? 'Financial Integration' : 'Фінансова Інтеграція'}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                          {getPartnersForLayer('Funding').flatMap(p => p.partners).map((partner, i) => (
                              <span key={i} className="px-3 py-1 bg-yellow-900/20 border border-yellow-500/30 rounded-full text-xs text-yellow-200">
                                  {partner}
                              </span>
                          ))}
                      </div>
                  </div>

                  {/* Governance / State */}
                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                      <h5 className="text-red-400 font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4" />
                          {lang === 'en' ? 'Strategic Alignment' : 'Стратегічне Вирівнювання'}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                          {getPartnersForLayer('Governance').flatMap(p => p.partners).map((partner, i) => (
                              <span key={i} className="px-3 py-1 bg-red-900/20 border border-red-500/30 rounded-full text-xs text-red-200">
                                  {partner}
                              </span>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Accountability Cycle */}
      <div className="bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-800 mt-8">
        <h3 className="text-lg font-bold text-slate-200 mb-6 border-l-4 border-orange-500 pl-3">
            {lang === 'en' ? 'The Accountability Cycle' : 'Цикл Підзвітності'}
        </h3>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
                { step: 1, title: { en: "DONOR", uk: "ДОНОР" }, desc: { en: "Funds enter. Tagged to program.", uk: "Кошти надходять. Теговані до програми." } },
                { step: 2, title: { en: "BENEFICIARY", uk: "БЕНЕФІЦІАР" }, desc: { en: "Resources follow person. Tier assigned.", uk: "Ресурси йдуть за людиною. Призначено рівень." } },
                { step: 3, title: { en: "PROVIDER", uk: "НАДАВАЧ" }, desc: { en: "Sessions metered, protocol tracked.", uk: "Сесії виміряні, протокол відстежено." } },
                { step: 4, title: { en: "OUTCOME", uk: "РЕЗУЛЬТАТ" }, desc: { en: "Payment on result: symptom reduction.", uk: "Оплата за результат: зниження симптомів." } },
                { step: 5, title: { en: "STATE & GDP", uk: "ДЕРЖАВА ТА ВВП" }, desc: { en: "Aggregated to MOH & MinEcon.", uk: "Агреговано до МОЗ та МінЕкономіки." } }
            ].map((item, idx, arr) => (
                <React.Fragment key={item.step}>
                    <div className="flex flex-col items-center text-center w-full md:w-1/5">
                        <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-orange-400 font-bold text-lg mb-3 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                            {item.step}
                        </div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-1">{item.title[lang]}</h4>
                        <p className="text-slate-400 text-[10px] leading-tight">{item.desc[lang]}</p>
                    </div>
                    {idx < arr.length - 1 && (
                        <div className="hidden md:block text-slate-700">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </div>
                    )}
                    {idx < arr.length - 1 && (
                        <div className="md:hidden text-slate-700 my-2">
                            <ArrowDown className="w-4 h-4" />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ArchitectureView;
