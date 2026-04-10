import React from 'react';
import { DIRECTIONS } from '../../constants';
import { Lang } from '../../types';
import { AlertOctagon, ArrowRight, CheckCircle2, TrendingUp, Activity, Database, Users } from 'lucide-react';

interface Props {
  lang: Lang;
}

const IMPACT_METRICS = [
    {
        icon: Users,
        baseline: { en: "4,000 professionals for 3.9M people (10.4 yr backlog). 1 therapist × 25 patients/wk = 1% of need.", uk: "4 000 фахівців на 3.9 млн осіб (беклог 10.4 років). 1 терапевт × 25 пацієнтів/тиж = 1% потреби." },
        program: { en: "Tech-multipliers (VR) & Diaspora Supervision scale capacity from 1:25 to 1:200+", uk: "Техно-мультиплікатори (VR) та Діаспорна Супервізія масштабують спроможність з 1:25 до 1:200+" },
        metric: { en: "200,000+ sessions verified by M24", uk: "200 000+ верифікованих сесій до M24" }
    },
    {
        icon: TrendingUp,
        baseline: { en: "89% of state budget locked in inpatient psychiatric care", uk: "89% держбюджету заблоковано в стаціонарній психіатрії" },
        program: { en: "Blended finance (P2P/CSR) directly funds outpatient care", uk: "Змішане фінансування (P2P/КСО) напряму оплачує амбулаторію" },
        metric: { en: "40% shift of funding to outpatient models", uk: "Зсув 40% фінансування в амбулаторні моделі" }
    },
    {
        icon: Activity,
        baseline: { en: "Shadow sector hides due to 65% formalization tax penalty", uk: "Тіньовий сектор ховається через 65% податковий штраф" },
        program: { en: "Platform client flow & post-factum payment offsets penalty", uk: "Потік клієнтів та оплата по факту компенсують штраф" },
        metric: { en: "1,150+ providers formalized & registered", uk: "1 150+ надавачів формалізовано та зареєстровано" }
    },
    {
        icon: Database,
        baseline: { en: "Donor services (HEAL) are invisible to State (ESOZ)", uk: "Донорські послуги (HEAL) невидимі для Держави (ЕСОЗ)" },
        program: { en: "HL7 FHIR R4 integration syncs all data to national registry", uk: "Інтеграція HL7 FHIR R4 синхронізує всі дані з нацреєстром" },
        metric: { en: "100% of funded sessions visible in ESOZ", uk: "100% профінансованих сесій видимі в ЕСОЗ" }
    }
];

const DirectionsView: React.FC<Props> = ({ lang }) => {
  return (
    <div className="space-y-8">
        {/* Killer Quote */}
        <div className="bg-slate-900 border-l-4 border-orange-500 p-6 rounded-r-xl shadow-lg">
            <p className="text-xl md:text-2xl font-serif italic text-slate-300 leading-relaxed">
                "{lang === 'en' ? 'We are funding walls while patients are left outside.' : 'Ми фінансуємо стіни, тоді як пацієнти залишаються на вулиці.'}"
            </p>
            <p className="text-sm text-orange-400 font-bold mt-2 uppercase tracking-widest">
                — {lang === 'en' ? 'The Core Routing Problem' : 'Головна Проблема Маршрутизації'}
            </p>
        </div>

        <div className="bg-slate-900/80 backdrop-blur p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl text-white font-bold mb-2 flex items-center gap-2">
                <Activity className="w-6 h-6 text-orange-500" />
                {lang === 'en' ? 'Theory of Change: Baseline vs. Impact' : 'Теорія Змін: Базовий Стан проти Впливу'}
            </h3>
            <p className="text-sm text-slate-400 max-w-4xl">
                {lang === 'en' 
                 ? 'This view demonstrates exactly how the program intervenes in the current failing system. We map the existing baseline reality against the specific program actions and the measurable impact indicators we will achieve.' 
                 : 'Цей розділ демонструє, як саме програма втручається в поточну непрацюючу систему. Ми зіставляємо існуючу базову реальність з конкретними діями програми та вимірюваними показниками впливу, яких ми досягнемо.'}
            </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
            {IMPACT_METRICS.map((item, idx) => {
                const Icon = item.icon;
                return (
                    <div key={idx} className="bg-slate-900 rounded-xl border border-slate-800 p-0 overflow-hidden flex flex-col lg:flex-row">
                        
                        {/* Baseline (Left) */}
                        <div className="flex-1 p-6 bg-red-950/20 border-b lg:border-b-0 lg:border-r border-slate-800 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50"></div>
                            <div className="flex items-center gap-2 mb-3">
                                <AlertOctagon className="w-5 h-5 text-red-400" />
                                <h4 className="text-red-400 font-bold text-sm uppercase tracking-wider">
                                    {lang === 'en' ? 'Current Baseline' : 'Поточна Ситуація'}
                                </h4>
                            </div>
                            <p className="text-slate-300 text-lg font-medium leading-snug">
                                {item.baseline[lang]}
                            </p>
                        </div>

                        {/* Program Intervention (Middle) */}
                        <div className="flex-1 p-6 bg-slate-900 relative flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-800">
                            <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-800 rotate-45 border-l border-b border-slate-800 z-10"></div>
                            <div className="flex items-center gap-2 mb-3">
                                <Icon className="w-5 h-5 text-blue-400" />
                                <h4 className="text-blue-400 font-bold text-sm uppercase tracking-wider">
                                    {lang === 'en' ? 'Program Intervention' : 'Втручання Програми'}
                                </h4>
                            </div>
                            <p className="text-white text-lg font-medium leading-snug">
                                {item.program[lang]}
                            </p>
                        </div>

                        {/* Impact Metric (Right) */}
                        <div className="flex-1 p-6 bg-emerald-950/20 relative flex flex-col justify-center">
                            <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-900 rotate-45 border-l border-b border-slate-800 z-10"></div>
                            <div className="absolute top-0 right-0 w-1 h-full bg-emerald-500/50"></div>
                            <div className="flex items-center gap-2 mb-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wider">
                                    {lang === 'en' ? 'Impact Indicator' : 'Показник Впливу'}
                                </h4>
                            </div>
                            <p className="text-emerald-300 text-xl font-bold leading-snug">
                                {item.metric[lang]}
                            </p>
                        </div>

                    </div>
                );
            })}
        </div>
    </div>
  );
};

export default DirectionsView;