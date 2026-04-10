import React, { useState } from 'react';
import { Lang } from '../../types';
import { Rocket, Cpu, Settings, Megaphone, RefreshCw, Globe, CheckCircle2, ChevronDown, BookOpen } from 'lucide-react';
import { NARRATIVE_ASSETS } from '../../constants';

interface Props {
  lang: Lang;
}

const ExpandableCard = ({ item, lang }: { item: any, lang: Lang }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div 
            className={`bg-slate-900 border ${isOpen ? 'border-blue-500/50' : 'border-slate-800'} rounded-xl overflow-hidden cursor-pointer hover:border-blue-500/30 transition-all duration-300`} 
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="p-4 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-400 font-bold text-xs shrink-0 border border-blue-800/30">
                        {item.id}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-200 mb-1">{item.title[lang]}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{item.summary[lang]}</p>
                    </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : ''}`} />
            </div>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 pt-0 border-t border-slate-800/50 bg-slate-900/50 mt-2">
                    <p className="text-sm text-slate-300 leading-relaxed pt-3">
                        {item.details[lang]}
                    </p>
                </div>
            </div>
        </div>
    );
};

const STRATEGY_PHASES = [
  {
    id: 'launch',
    icon: Rocket,
    title: { en: 'Launch Strategy', uk: 'Стратегія Запуску' },
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    points: [
      { en: 'Consortium formation and legal structuring.', uk: 'Формування консорціуму та юридичне структурування.' },
      { en: 'Initial seed funding mobilization (P2P & CSR).', uk: 'Мобілізація початкового фінансування (P2P та КСО).' },
      { en: 'Onboarding of first 50 clinical providers.', uk: 'Онбординг перших 50 клінічних надавачів послуг.' }
    ]
  },
  {
    id: 'digital',
    icon: Cpu,
    title: { en: 'Digital Strategy', uk: 'Цифрова Стратегія' },
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    points: [
      { en: 'Deployment of de-personalized Middleware.', uk: 'Розгортання деперсоніфікованого Middleware.' },
      { en: 'HL7 FHIR R4 integration with NHSU (ЕСОЗ).', uk: 'Інтеграція HL7 FHIR R4 з НСЗУ (ЕСОЗ).' },
      { en: 'Smart-contract architecture for Blended Finance.', uk: 'Архітектура смарт-контрактів для змішаного фінансування.' }
    ]
  },
  {
    id: 'operational',
    icon: Settings,
    title: { en: 'Operational Strategy', uk: 'Операційна Стратегія' },
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    points: [
      { en: 'Scaling VR Hubs as tech-multipliers.', uk: 'Масштабування VR-хабів як техно-мультиплікаторів.' },
      { en: 'Diaspora Supervision Network activation.', uk: 'Активація мережі діаспорної супервізії.' },
      { en: 'Continuous provider formalization flow.', uk: 'Безперервний потік формалізації надавачів.' }
    ]
  },
  {
    id: 'communication',
    icon: Megaphone,
    title: { en: 'Communication Strategy', uk: 'Комунікаційна Стратегія' },
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    points: [
      { en: 'Radical destigmatization campaigns.', uk: 'Радикальні кампанії з дестигматизації.' },
      { en: 'Targeted outreach to veterans and families.', uk: 'Цільовий аутріч для ветеранів та їхніх родин.' },
      { en: 'B2B engagement for corporate CSR alignment.', uk: 'Залучення B2B для узгодження корпоративної КСВ.' }
    ]
  },
  {
    id: 'sustainability',
    icon: RefreshCw,
    title: { en: 'Sustainability & State Integration', uk: 'Сталий Розвиток та Інтеграція з Державою' },
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    points: [
      { en: 'Transition to B2B/B2G SaaS payment models.', uk: 'Перехід до моделей оплати B2B/B2G SaaS.' },
      { en: 'State subscribes to the platform (No CAPEX).', uk: 'Держава підписується на платформу (Без CAPEX).' },
      { en: 'Consortium pivots to independent audit & R&D.', uk: 'Консорціум переходить до незалежного аудиту та R&D.' }
    ]
  },
  {
    id: 'global',
    icon: Globe,
    title: { en: 'Global Multiplication', uk: 'Глобальна Мультиплікація' },
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    points: [
      { en: 'Exporting the validated model to other countries.', uk: 'Експорт валідованої моделі в інші країни.' },
      { en: 'Joint deployment with WHO and World Bank.', uk: 'Спільне розгортання з ВООЗ та Світовим банком.' },
      { en: 'Establishing Ukraine as the global mental health tech hub.', uk: 'Становлення України як глобального хабу tech-рішень для ментального здоров\'я.' }
    ]
  }
];

const StrategyView: React.FC<Props> = ({ lang }) => {
  return (
    <div className="space-y-8">
      
      {/* Metaframe & Narrative Assets */}
      <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800">
         <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-slate-200">
                {lang === 'en' ? 'Strategic Narrative & Metaframe' : 'Стратегічний Наратив та Метафрейм'}
            </h3>
         </div>
         
         <div className="bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
            <p className="text-sm text-blue-300 italic font-serif">
                {lang === 'en' 
                 ? '"Turning a Humanitarian Challenge Into an Opportunity for Target Labor Market Sector Development."' 
                 : '"Перетворення гуманітарного виклику на можливість для розвитку цільового сектору ринку праці."'}
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {NARRATIVE_ASSETS.map((asset) => (
                <ExpandableCard key={asset.id} item={asset} lang={lang} />
            ))}
         </div>
      </div>

      <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700">
         <h2 className="text-xl font-bold text-white mb-2">{lang === 'en' ? 'Comprehensive Execution Strategy' : 'Комплексна Стратегія Виконання'}</h2>
         <p className="text-slate-400 text-sm max-w-4xl">
            {lang === 'en' 
             ? 'A structured, multi-phase approach ensuring seamless transition from initial launch to global multiplication. This strategy guarantees operational resilience, state integration, and long-term sustainability.' 
             : 'Структурований, багатоетапний підхід, що забезпечує плавний перехід від початкового запуску до глобальної мультиплікації. Ця стратегія гарантує операційну стійкість, інтеграцію з державою та довгостроковий сталий розвиток.'}
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STRATEGY_PHASES.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <div key={phase.id} className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col relative group hover:border-slate-600 transition-colors">
              <div className={`absolute top-0 left-0 w-full h-1 ${phase.bgColor} group-hover:opacity-100 transition-opacity`}>
                  <div className={`h-full w-full ${phase.bgColor.replace('/10', '')}`}></div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg ${phase.bgColor} ${phase.borderColor} border flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${phase.color}`} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                        {lang === 'en' ? `Phase 0${index + 1}` : `Етап 0${index + 1}`}
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">{phase.title[lang]}</h3>
                  </div>
                </div>

                <div className="space-y-3 mt-auto">
                  {phase.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${phase.color}`} />
                      <p className="text-sm text-slate-300 leading-snug">{point[lang]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StrategyView;
