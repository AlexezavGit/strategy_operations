import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import { FINANCIALS_BY_DIRECTION, COLORS, SCORING_MATRIX } from '../../constants';
import { Lang } from '../../types';
import { ArrowRight, ShieldCheck, Briefcase, Users, Database, TrendingUp, Activity, PieChart, DownArrow, Network, Cpu, Lock, RefreshCw, CheckCircle2, Sliders, PlayCircle } from 'lucide-react';

interface Props {
    lang: Lang;
}

const ENGINE_WORKFLOW = [
  {
    icon: Network,
    title: { en: "1. Coordination Hub", uk: "1. Координаційний Хаб" },
    desc: {
        en: "Middleware integrates Solana, P2P, and banks. Donors see real needs and create targeted programs. Providers see available funds and create matching aid projects.",
        uk: "Middleware інтегрує Solana, P2P та банки. Донори бачать реальні потреби і створюють цільові програми. Надавачі бачать доступні кошти і створюють проєкти допомоги."
    }
  },
  {
    icon: Sliders,
    title: { en: "2. Objective Scoring", uk: "2. Об'єктивний Скоринг" },
    desc: {
        en: "Donors configure their funding rules based on strict, verifiable metrics rather than subjective preferences or intermediary decisions.",
        uk: "Донори налаштовують правила фінансування на основі суворих, верифікованих метрик, а не суб'єктивних преференцій чи рішень посередників."
    }
  },
  {
    icon: PlayCircle,
    title: { en: "3. Auto-Social Investing", uk: "3. Авто-Соціальне Інвестування" },
    desc: {
        en: "Press 'Start' to deploy capital with mathematical precision. Direct connection to beneficiaries ensures no third-party interests interfere.",
        uk: "Натискання 'Старт' для розподілу капіталу з математичною точністю. Прямий зв'язок з бенефіціарами гарантує відсутність впливу третіх сторін."
    }
  },
  {
    icon: ShieldCheck,
    title: { en: "4. Post-Factum Payment", uk: "4. Оплата По Факту" },
    desc: {
        en: "Funds can be released per-session ONLY after verified delivery. This eliminates the 'fear of misallocation' that destroys UN/global budgets.",
        uk: "Кошти можуть виділятися за кожну сесію ТІЛЬКИ після верифікації надання. Це усуває 'страх нецільового використання', що руйнує глобальні бюджети."
    }
  }
];

const SCORING_CRITERIA = [
    { en: "Beneficiary Compliance & Biometrics", uk: "Комплаєнс бенефіціара та біометрія" },
    { en: "Deduplication (Resources from other sources)", uk: "Дедуплікація (Ресурси з інших джерел)" },
    { en: "% of rehabilitation course completed", uk: "% проходження курсу реабілітації" },
    { en: "Personal resource co-investment", uk: "Вкладання особистих ресурсів" },
    { en: "Family status & Geographic location", uk: "Сімейний стан та територія перебування" },
    { en: "Timing of therapy decision/referral", uk: "Момент прийняття рішення про терапію" }
];

const MOBILIZATION_FLOW = [
  {
    title: { en: "Current State & Needs", uk: "Поточний Стан та Потреби" },
    subtitle: { en: "The Baseline Abyss", uk: "Базова Безодня" },
    color: "border-red-500/30",
    bg: "bg-red-900/20",
    metrics: [
      { label: { en: "Clinical Need", uk: "Клінічна Потреба" }, value: "3.9M", sub: { en: "People", uk: "Осіб" } },
      { label: { en: "Sessions Required", uk: "Потреба в сесіях" }, value: "62.4M", sub: { en: "Hours", uk: "Годин" } },
      { label: { en: "Inpatient Spending", uk: "Витрати на стаціонар" }, value: "89%", sub: { en: "Of State Budget", uk: "Держбюджету" } }
    ]
  },
  {
    title: { en: "Program Action (If we do X...)", uk: "Дія Програми (Якщо зробити так...)" },
    subtitle: { en: "The Digital Engine", uk: "Цифровий Двигун" },
    color: "border-blue-500/30",
    bg: "bg-blue-900/20",
    metrics: [
      { label: { en: "Digital Core Build", uk: "Розробка Цифрового Ядра" }, value: "$500K", sub: { en: "Initial Investment", uk: "Початкові інвестиції" } },
      { label: { en: "P2P & CSR Activation", uk: "Активація P2P та КСВ" }, value: "100%", sub: { en: "Transparency", uk: "Прозорість" } },
      { label: { en: "SaaS Transaction Fee", uk: "SaaS Комісія" }, value: "3.5%", sub: { en: "On all flows", uk: "З усіх потоків" } }
    ]
  },
  {
    title: { en: "Conservative Outcomes", uk: "Консервативний Прогноз" },
    subtitle: { en: "Resource Flows (Then we get Y)", uk: "Потоки Ресурсів (Отримаємо результат)" },
    color: "border-emerald-500/30",
    bg: "bg-emerald-900/20",
    metrics: [
      { label: { en: "Unit Economics", uk: "Юніт-економіка" }, value: "€600-800", sub: { en: "Per Beneficiary", uk: "На бенефіціара" } },
      { label: { en: "Outpatient Shift", uk: "Зсув в амбулаторію" }, value: "40%", sub: { en: "Of Funding", uk: "Фінансування" } },
      { label: { en: "Self-Sustaining", uk: "Самоокупність" }, value: "Year 2", sub: { en: "Via 3.5% fee", uk: "Через 3.5% комісію" } }
    ]
  }
];

const RESOURCE_STREAMS = [
    {
        title: { en: "Institutional & Grants", uk: "Інституційні та Гранти" },
        description: { en: "Initial capital for infrastructure build (World Bank HEAL, USAID). High volume, slow deployment.", uk: "Початковий капітал для розбудови інфраструктури (World Bank HEAL, USAID). Великий обсяг, повільне розгортання." },
        icon: ShieldCheck,
        color: "text-blue-400",
        bg: "bg-blue-900/20"
    },
    {
        title: { en: "Corporate CSR", uk: "Корпоративна КСВ" },
        description: { en: "Sponsorship of specific veteran cohorts or regional hubs. Medium volume, targeted deployment.", uk: "Спонсорство конкретних когорт ветеранів або регіональних хабів. Середній обсяг, цільове розгортання." },
        icon: Briefcase,
        color: "text-orange-400",
        bg: "bg-orange-900/20"
    },
    {
        title: { en: "Retail P2P & Crypto", uk: "Роздрібний P2P та Крипто" },
        description: { en: "Direct-to-beneficiary micro-donations via Solana blockchain. High velocity, transparent.", uk: "Прямі мікро-донати бенефіціарам через блокчейн Solana. Висока швидкість, прозорість." },
        icon: Users,
        color: "text-purple-400",
        bg: "bg-purple-900/20"
    },
    {
        title: { en: "State Procurement (SaaS)", uk: "Державні Закупівлі (SaaS)" },
        description: { en: "Long-term sustainability via 3.5% transaction fee on state funds routed through the platform.", uk: "Довгострокова сталість через 3.5% комісію з державних коштів, що проходять через платформу." },
        icon: Database,
        color: "text-emerald-400",
        bg: "bg-emerald-900/20"
    }
];

const FinancialsView: React.FC<Props> = ({ lang }) => {
  return (
    <div className="space-y-8">
      
      {/* Killer Quote */}
      <div className="bg-slate-900 border-l-4 border-emerald-500 p-6 rounded-r-xl shadow-lg">
          <p className="text-xl md:text-2xl font-serif italic text-slate-300 leading-relaxed">
              "{lang === 'en' ? 'We are building the Visa/Mastercard for MHPSS Services. From humanitarian tourism to heavy industry.' : 'Ми будуємо Visa/Mastercard для послуг з психічного здоров\'я. Перехід від гуманітарного туризму до важкої промисловості.'}"
          </p>
          <p className="text-sm text-emerald-400 font-bold mt-2 uppercase tracking-widest">
              — {lang === 'en' ? 'The Financial Infrastructure' : 'Фінансова Інфраструктура'}
          </p>
      </div>

      {/* Header Description */}
      <div className="bg-slate-900/80 backdrop-blur p-6 rounded-xl border border-slate-800">
         <h3 className="text-xl text-white font-bold mb-2 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-orange-500" />
            {lang === 'en' ? 'Resource Mobilization Logic' : 'Логіка Мобілізації Ресурсів'}
         </h3>
         <p className="text-sm text-slate-400 max-w-4xl">
            {lang === 'en' 
             ? 'This section demonstrates how the program mobilizes resources compared to the current state. By comparing the massive scale of disorders and needs against our digital interventions, we provide a conservative estimate of the resource flows and outcomes we can expect if the program is executed as planned.' 
             : 'Цей розділ демонструє, як програма мобілізує ресурси у порівнянні з поточним станом. Порівнюючи величезний масштаб розладів та потреб із нашими цифровими втручаннями, ми надаємо консервативну оцінку потоків ресурсів та результатів, на які можна розраховувати при виконанні програми.'}
         </p>
      </div>

      {/* Smart Contract Scoring Matrix */}
      <div className="bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-800">
        <h3 className="text-lg font-bold text-slate-200 mb-2 border-l-4 border-blue-500 pl-3">
            {lang === 'en' ? 'Smart Contract Scoring Matrix (MHPSS-Grant)' : 'Матриця Скорингу Смарт-Контракту (MHPSS-Grant)'}
        </h3>
        <p className="text-sm text-slate-400 mb-6 ml-4">
            {lang === 'en' 
             ? 'Operationalizing "Payment for Outcome" using a Weighted Scoring (WSC) matrix, moving away from binary pass/fail logic.' 
             : 'Операціоналізація "Оплати за результат" через вагову матрицю (WSC), відхід від бінарної логіки pass/fail.'}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
            {SCORING_MATRIX.map((item) => (
                <div key={item.id} className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                        <h4 className="text-slate-200 font-bold text-sm">{item.title[lang]}</h4>
                        <span className="text-blue-400 font-black text-lg">{item.weight}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 mb-3">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${item.weight}%` }}></div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mt-auto">{item.desc[lang]}</p>
                </div>
            ))}
        </div>

        <div className="bg-blue-950/30 border border-blue-900/50 p-4 rounded-lg flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <div>
                <h4 className="text-blue-400 font-bold text-sm mb-1">
                    {lang === 'en' ? 'Smart Contract Logic (Escrow)' : 'Логіка Смарт-Контракту (Escrow)'}
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                    {lang === 'en' 
                     ? 'If FinalScore >= Threshold, the smart contract blocks (Escrows) the full amount for the recovery course, but only releases funds to the provider after each digitally signed and verified session.' 
                     : 'Якщо FinalScore >= Threshold, смарт-контракт блокує (Escrow) повну суму на курс відновлення, але списує кошти автору контенту та психологу лише після кожного підписаного сеансу.'}
                </p>
            </div>
        </div>
      </div>

      {/* The Mobilization Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {/* Arrows for Desktop */}
          <div className="hidden lg:flex absolute top-1/2 left-[33.33%] -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-slate-800 rounded-full p-2 border border-slate-700 shadow-xl"><ArrowRight className="w-6 h-6 text-slate-400" /></div>
          </div>
          <div className="hidden lg:flex absolute top-1/2 left-[66.66%] -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-slate-800 rounded-full p-2 border border-slate-700 shadow-xl"><ArrowRight className="w-6 h-6 text-slate-400" /></div>
          </div>
          
          {MOBILIZATION_FLOW.map((step, idx) => (
              <div key={idx} className={`bg-slate-900 rounded-xl border ${step.color} p-6 relative overflow-hidden shadow-lg`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-30 ${step.bg}`}></div>
                  <div className="relative z-10">
                      <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{step.subtitle[lang]}</h4>
                      <h3 className="text-white font-bold text-lg mb-6">{step.title[lang]}</h3>
                      
                      <div className="space-y-4">
                          {step.metrics.map((metric, mIdx) => (
                              <div key={mIdx} className="flex justify-between items-end border-b border-slate-800/50 pb-2">
                                  <div>
                                      <p className="text-slate-300 text-sm font-medium">{metric.label[lang]}</p>
                                      <p className="text-slate-500 text-xs">{metric.sub[lang]}</p>
                                  </div>
                                  <div className="text-xl font-bold text-white">{metric.value}</div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Resource Streams */}
        <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-slate-200 mb-4 border-l-4 border-blue-500 pl-3">
                {lang === 'en' ? 'Targeted Resource Streams' : 'Цільові Потоки Ресурсів'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {RESOURCE_STREAMS.map((stream, idx) => {
                    const Icon = stream.icon;
                    return (
                        <div key={idx} className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`p-2 rounded-lg ${stream.bg} ${stream.color}`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h4 className="text-white font-bold text-sm">{stream.title[lang]}</h4>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed flex-1">
                                {stream.description[lang]}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Budget by Strategic Direction */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-800 flex flex-col">
          <h3 className="text-lg font-bold text-slate-200 mb-6 border-l-4 border-orange-500 pl-3">
            {lang === 'en' ? 'Initial Investment (The Engine)' : 'Початкові Інвестиції (Двигун)'}
          </h3>
          <div className="flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={FINANCIALS_BY_DIRECTION}
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#334155" />
                <XAxis type="number" hide />
                <YAxis dataKey={`name.${lang}`} type="category" width={100} tick={{fontSize: 11, fill: '#94a3b8'}} />
                <Tooltip 
                    formatter={(value: number) => `$${value.toLocaleString()}`}
                    contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', border: '1px solid #334155', color: '#f1f5f9' }}
                    itemStyle={{ color: '#cbd5e1' }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
                    {FINANCIALS_BY_DIRECTION.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Unit Economics & Sustainability */}
      <div className="bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-800">
        <h3 className="text-lg font-bold text-slate-200 mb-2 border-l-4 border-emerald-500 pl-3">
            {lang === 'en' ? 'Unit Economics: Train for Care ROI' : 'Юніт-економіка: ROI Train for Care'}
        </h3>
        <p className="text-sm text-slate-400 mb-8 ml-4">
            {lang === 'en' 
             ? 'Calculation based on a 20-person cohort. Investment in training is exchanged for pro-bono clinical hours, generating immediate value for beneficiaries.' 
             : 'Розрахунок на основі когорти з 20 осіб. Інвестиція в навчання обмінюється на pro-bono клінічні години, генеруючи негайну цінність для бенефіціарів.'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 flex flex-col items-center text-center">
                <p className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                    {lang === 'en' ? 'Cohort Investment' : 'Інвестиція в когорту'}
                </p>
                <p className="text-2xl font-bold text-red-400">€75,605</p>
                <p className="text-slate-500 text-[10px] mt-1">{lang === 'en' ? 'For 20 professionals' : 'За 20 фахівців'}</p>
            </div>
            
            <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 flex flex-col items-center text-center">
                <p className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                    {lang === 'en' ? 'Pro-Bono Commitment' : 'Pro-Bono Зобов\'язання'}
                </p>
                <p className="text-2xl font-bold text-blue-400">2,400</p>
                <p className="text-slate-500 text-[10px] mt-1">{lang === 'en' ? 'Clinical hours (120/person)' : 'Клінічних годин (120/особу)'}</p>
            </div>
            
            <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 flex flex-col items-center text-center">
                <p className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                    {lang === 'en' ? 'Generated Value' : 'Згенерована Цінність'}
                </p>
                <p className="text-2xl font-bold text-emerald-400">€168,000</p>
                <p className="text-slate-500 text-[10px] mt-1">{lang === 'en' ? 'At €70/hour market rate' : 'За ринковою ставкою €70/год'}</p>
            </div>

            <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/10"></div>
                <p className="text-emerald-400 text-[10px] uppercase tracking-wider mb-1 relative z-10">
                    {lang === 'en' ? 'Return on Investment' : 'Повернення Інвестицій'}
                </p>
                <p className="text-3xl font-bold text-emerald-400 relative z-10">2.22x</p>
                <p className="text-emerald-500/70 text-[10px] mt-1 relative z-10">{lang === 'en' ? '€2.22 return per €1 invested' : '€2.22 повернення на кожен €1'}</p>
            </div>
        </div>

        {/* Stepped Care Multiplier */}
        <div className="mb-8 bg-slate-950/50 rounded-lg border border-slate-800 p-6">
            <h4 className="text-blue-400 font-bold text-sm mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                {lang === 'en' ? 'The Stepped Care Multiplier (Solving the Bottleneck)' : 'Мультиплікатор Ступінчастої Допомоги (Вирішення Ботлнеку)'}
            </h4>
            <p className="text-slate-300 text-xs mb-6">
                {lang === 'en' 
                 ? 'Traditional therapy allows 1 therapist to serve ~25 patients/week. 4,000 therapists can only serve ~100,000 people/year (1% of need). FEEL Again changes the ratio using VR-powered stepped care.' 
                 : 'Традиційна терапія дозволяє 1 терапевту обслуговувати ~25 пацієнтів/тиждень. 4,000 терапевтів можуть обслужити лише ~100,000 людей/рік (1% від потреби). FEEL Again змінює співвідношення за допомогою VR-ступінчастої допомоги.'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-slate-900 p-4 rounded border border-slate-700">
                    <p className="text-slate-400 text-[10px] uppercase font-bold mb-1">Tier 1: Mild (55%)</p>
                    <p className="text-xl font-bold text-slate-200">1:200+</p>
                    <p className="text-slate-500 text-[10px] mt-1">{lang === 'en' ? 'Self-guided VR modules' : 'Самостійні VR-модулі'}</p>
                </div>
                <div className="bg-slate-900 p-4 rounded border border-slate-700">
                    <p className="text-slate-400 text-[10px] uppercase font-bold mb-1">Tier 2: Moderate (25%)</p>
                    <p className="text-xl font-bold text-blue-400">1:50-80</p>
                    <p className="text-slate-500 text-[10px] mt-1">{lang === 'en' ? 'VR + remote supervision' : 'VR + віддалена супервізія'}</p>
                </div>
                <div className="bg-slate-900 p-4 rounded border border-slate-700">
                    <p className="text-slate-400 text-[10px] uppercase font-bold mb-1">Tier 3: Severe (15%)</p>
                    <p className="text-xl font-bold text-orange-400">1:1</p>
                    <p className="text-slate-500 text-[10px] mt-1">{lang === 'en' ? 'VR + in-session clinician' : 'VR + клініцист на сесії'}</p>
                </div>
                <div className="bg-slate-900 p-4 rounded border border-slate-700">
                    <p className="text-slate-400 text-[10px] uppercase font-bold mb-1">Tier 4: Complex (5%)</p>
                    <p className="text-xl font-bold text-red-400">1:1+</p>
                    <p className="text-slate-500 text-[10px] mt-1">{lang === 'en' ? 'Psychiatric care + VR' : 'Психіатрія + VR'}</p>
                </div>
            </div>
            
            <div className="mt-4 p-3 bg-emerald-900/20 border border-emerald-500/30 rounded text-center">
                <p className="text-emerald-400 text-sm font-bold">
                    {lang === 'en' ? 'Result: 4,000 professionals = 300,000-500,000 people served/year (3-5x improvement)' : 'Результат: 4,000 фахівців = 300,000-500,000 обслугованих людей/рік (покращення в 3-5 разів)'}
                </p>
            </div>
        </div>

        <div className="bg-blue-950/30 border border-blue-900/50 p-4 rounded-lg flex items-start gap-4 mb-8">
            <Activity className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <div>
                <h4 className="text-blue-400 font-bold text-sm mb-1">
                    {lang === 'en' ? 'Macroeconomic Impact (GDP Reintegration)' : 'Макроекономічний Вплив (Реінтеграція у ВВП)'}
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                    {lang === 'en' 
                     ? 'Every filled MHPSS job prevents ~€2,000 in lost productivity and social support costs at the micro-economic level. 150 verified practitioners generating €2,000 each results in a €300,000 micro-economic contribution to GDP.' 
                     : 'Кожне заповнене робоче місце MHPSS запобігає втратам ~€2,000 на зниження продуктивності та соціальну підтримку на мікроекономічному рівні. 150 верифікованих фахівців, що генерують по €2,000, створюють €300,000 мікроекономічного внеску у ВВП.'}
                </p>
            </div>
        </div>
      </div>

      {/* Blended Finance & Transparency Engine */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900 border border-slate-800 p-8 rounded-xl relative overflow-hidden mt-8">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

        <h3 className="text-xl font-bold text-orange-400 mb-2 flex items-center gap-2 relative z-10">
            <span className="p-2 bg-slate-800 rounded-lg border border-slate-700">⚖️</span>
            {lang === 'en' ? 'Blended Finance & Transparency Engine' : 'Двигун Змішаного Фінансування та Прозорості'}
        </h3>
        <p className="text-sm text-slate-400 max-w-3xl mb-8 relative z-10">
            {lang === 'en' 
             ? 'By providing absolute transparency and objective scoring, the platform eliminates the fear of misallocation and unlocks previously inaccessible capital pools for the humanitarian challenge.' 
             : 'Забезпечуючи абсолютну прозорість та об\'єктивний скоринг, платформа усуває страх нецільового використання та відкриває доступ до раніше недоступних пулів капіталу для вирішення гуманітарного виклику.'}
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {/* Left Side: The Workflow */}
            <div className="lg:col-span-2 space-y-4">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                    {lang === 'en' ? 'The Investment Workflow' : 'Робочий Процес Інвестування'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ENGINE_WORKFLOW.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div key={idx} className="bg-slate-950/50 p-5 rounded-lg border border-slate-800/60 hover:border-orange-500/30 transition-colors flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-orange-400">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <h4 className="text-white font-bold text-sm">{step.title[lang]}</h4>
                                </div>
                                <p className="text-slate-400 text-xs leading-relaxed flex-1">
                                    {step.desc[lang]}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right Side: Scoring & Operations */}
            <div className="space-y-6">
                <div className="bg-slate-950/80 p-5 rounded-lg border border-slate-800">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-blue-400" />
                        {lang === 'en' ? 'Objective Scoring Metrics' : 'Метрики Об\'єктивного Скорингу'}
                    </h4>
                    <ul className="space-y-3">
                        {SCORING_CRITERIA.map((criteria, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{criteria[lang]}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-slate-950/80 p-5 rounded-lg border border-slate-800">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-emerald-400" />
                        {lang === 'en' ? 'Sustainable Operations' : 'Стала Операційна Модель'}
                    </h4>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                            <span className="text-xs text-slate-400">{lang === 'en' ? 'Program Management & Campaigns' : 'Управління Програмою та Кампанії'}</span>
                            <span className="text-sm font-bold text-white">25%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-slate-400">{lang === 'en' ? 'Digital Infrastructure (SaaS)' : 'Цифрова Інфраструктура (SaaS)'}</span>
                            <span className="text-sm font-bold text-white">3.5%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default FinancialsView;