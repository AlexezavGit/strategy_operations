import React from 'react';
import { Lang } from '../../types';
import { Database, ShieldCheck, Activity, Link as LinkIcon, FileCode2, ArrowRight, ArrowDown, CheckCircle } from 'lucide-react';

interface Props {
  lang: Lang;
}

const PIPELINE_STEPS = [
  {
    id: 'source',
    icon: Activity,
    title: { en: '1. Point of Care (Data Generation)', uk: '1. Точка Надання (Генерація Даних)' },
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    details: [
      { en: 'VR Hubs & Clinical Providers', uk: 'VR-хаби та Клінічні Надавачі' },
      { en: 'Session duration & biometric markers', uk: 'Тривалість сесії та біометричні маркери' },
      { en: 'Cryptographic session hashing', uk: 'Криптографічне хешування сесії' }
    ]
  },
  {
    id: 'middleware',
    icon: ShieldCheck,
    title: { en: '2. Consortium Middleware (De-personalization)', uk: '2. Middleware Консорціуму (Деперсоніфікація)' },
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    details: [
      { en: 'Zero-Knowledge Proofs (ZKP)', uk: 'Докази з нульовим розголошенням (ZKP)' },
      { en: 'De-duplication & fraud prevention', uk: 'Дедуплікація та запобігання шахрайству' },
      { en: 'Aggregated impact metrics calculation', uk: 'Розрахунок агрегованих метрик впливу' }
    ]
  },
  {
    id: 'state',
    icon: Database,
    title: { en: '3. State Integration (NHSU / ESOZ)', uk: '3. Державна Інтеграція (НСЗУ / ЕСОЗ)' },
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    details: [
      { en: 'HL7 FHIR R4 Interoperability', uk: 'Інтероперабельність HL7 FHIR R4' },
      { en: 'Secure PII storage (State only)', uk: 'Безпечне зберігання ПД (тільки Держава)' },
      { en: 'Clinical validation of interventions', uk: 'Клінічна валідація втручань' }
    ]
  },
  {
    id: 'donor',
    icon: FileCode2,
    title: { en: '4. Donor Verification & Payment (DLI)', uk: '4. Верифікація Донором та Оплата (DLI)' },
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    details: [
      { en: 'Smart-contract execution', uk: 'Виконання смарт-контрактів' },
      { en: 'IATI 2.03 compliant reporting', uk: 'Звітність за стандартом IATI 2.03' },
      { en: 'Automated Blended Finance disbursement', uk: 'Автоматизована виплата змішаного фінансування' }
    ]
  }
];

const DataPipelineView: React.FC<Props> = ({ lang }) => {
  return (
    <div className="space-y-8">
      {/* Killer Quote */}
      <div className="bg-slate-900 border-l-4 border-purple-500 p-6 rounded-r-xl shadow-lg">
          <p className="text-xl md:text-2xl font-serif italic text-slate-300 leading-relaxed">
              "{lang === 'en' ? 'Inputs are funded. Outputs are reported. Outcomes are invisible. Stop Counting Certificates. Start Measuring Recovery.' : 'Вкладення фінансуються. Процеси звітуються. Результати залишаються невидимими. Досить рахувати сертифікати. Почніть вимірювати одужання.'}"
          </p>
          <p className="text-sm text-purple-400 font-bold mt-2 uppercase tracking-widest">
              — {lang === 'en' ? 'The Verification Gap' : 'Проблема Верифікації'}
          </p>
      </div>

      <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700">
         <h2 className="text-xl font-bold text-white mb-2">
            {lang === 'en' ? 'Data & Verification Pipeline (MEL / DLI Framework)' : 'Архітектура Верифікації Даних (MEL / DLI Фреймворк)'}
         </h2>
         <p className="text-slate-400 text-sm max-w-4xl">
            {lang === 'en' 
             ? 'The technical backbone ensuring absolute transparency for institutional donors. This pipeline guarantees that every funded session is clinically validated, de-duplicated, and securely synced with the State eHealth system (ESOZ) without exposing PII.' 
             : 'Технічний хребет, що забезпечує абсолютну прозорість для інституційних донорів. Цей пайплайн гарантує, що кожна профінансована сесія клінічно валідована, дедуплікована та безпечно синхронізована з державною системою ЕСОЗ без розкриття персональних даних.'}
         </p>
      </div>

      <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 relative">
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-slate-800 -translate-y-1/2 z-0"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
          {PIPELINE_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex flex-col items-center relative">
                {/* Mobile Arrow */}
                {index > 0 && (
                  <div className="lg:hidden flex justify-center w-full py-4">
                    <ArrowDown className="w-6 h-6 text-slate-700" />
                  </div>
                )}
                
                <div className={`w-20 h-20 rounded-2xl ${step.bgColor} ${step.borderColor} border-2 flex items-center justify-center mb-6 shadow-lg relative bg-slate-950`}>
                  <Icon className={`w-10 h-10 ${step.color}`} />
                  
                  {/* Desktop Arrow */}
                  {index < PIPELINE_STEPS.length - 1 && (
                    <div className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 w-8 justify-center">
                      <ArrowRight className="w-6 h-6 text-slate-600" />
                    </div>
                  )}
                </div>

                <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl w-full h-full text-center hover:border-slate-600 transition-colors">
                  <h3 className="text-sm font-bold text-white mb-4 h-10 flex items-center justify-center">
                    {step.title[lang]}
                  </h3>
                  <div className="space-y-3 text-left">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${step.color}`} />
                        <span className="text-xs text-slate-400 leading-tight">{detail[lang]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h4 className="text-white font-bold mb-3 flex items-center gap-2">
            <LinkIcon className="w-5 h-5 text-blue-500" />
            {lang === 'en' ? 'Smart Contract Rules (DLI)' : 'Правила Смарт-Контрактів (DLI)'}
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>{lang === 'en' ? 'Payment released ONLY upon ESOZ sync confirmation.' : 'Оплата здійснюється ТІЛЬКИ після підтвердження синхронізації з ЕСОЗ.'}</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>{lang === 'en' ? 'Automated flagging of statistical anomalies.' : 'Автоматичне маркування статистичних аномалій.'}</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>{lang === 'en' ? 'Immutable audit trail for World Bank/USAID.' : 'Незмінний аудиторський слід для Світового банку/USAID.'}</li>
          </ul>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h4 className="text-white font-bold mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            {lang === 'en' ? 'Zero-Knowledge Architecture' : 'Архітектура Zero-Knowledge'}
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>{lang === 'en' ? 'Consortium servers NEVER touch raw patient names.' : 'Сервери Консорціуму НІКОЛИ не обробляють імена пацієнтів.'}</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>{lang === 'en' ? 'Verification relies on cryptographic session tokens.' : 'Верифікація базується на криптографічних токенах сесій.'}</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>{lang === 'en' ? 'Full compliance with Ukrainian KSZI and EU GDPR.' : 'Повна відповідність українській КСЗІ та європейському GDPR.'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataPipelineView;
