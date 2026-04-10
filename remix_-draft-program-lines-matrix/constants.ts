import { Project, CanonicalStat, Failure, NBUStrategyStep, Audience } from './types';

export const PROJECTS: Project[] = [
  // Cluster A
  { code: "A1", cluster: "Cluster A: Infrastructure", name: { en: "Provider Registry & Certification Engine", uk: "Реєстр надавачів та сертифікаційний двигун" }, budget: 0, timeline: { en: "TBD", uk: "TBD" }, beneficiaries: { en: "TBD", uk: "TBD" }, status: "Phase 1", description: { en: "Unified digital registry for all mental health providers.", uk: "Єдиний цифровий реєстр для всіх надавачів послуг психічного здоров'я." } },
  { code: "A2", cluster: "Cluster A: Infrastructure", name: { en: "Session Metering & Outcome Engine", uk: "Метрування сесій та двигун результатів" }, budget: 0, timeline: { en: "TBD", uk: "TBD" }, beneficiaries: { en: "TBD", uk: "TBD" }, status: "Phase 1", description: { en: "Every therapeutic session logged against validated clinical instruments.", uk: "Кожна терапевтична сесія фіксується за валідованими клінічними інструментами." } },
  { code: "A3", cluster: "Cluster A: Infrastructure", name: { en: "ESOZ Interoperability Layer (Open API)", uk: "Рівень інтероперабельності ЕСОЗ (Open API)" }, budget: 0, timeline: { en: "TBD", uk: "TBD" }, beneficiaries: { en: "ESOZ Integration", uk: "Інтеграція ЕСОЗ" }, status: "Phase 2", description: { en: "Connects FEEL Again session data to ESOZ via HL7 FHIR R4.", uk: "З'єднує дані сесій FEEL Again з ЕСОЗ через HL7 FHIR R4." } },
  { code: "A4", cluster: "Cluster A: Infrastructure", name: { en: "Open Data & Donor Coordination Layer", uk: "Відкриті дані та шар координації донорів" }, budget: 0, timeline: { en: "Live now", uk: "Працює зараз" }, beneficiaries: { en: "TBD", uk: "TBD" }, status: "Phase 1", description: { en: "Public dashboard + IATI 2.03 compliant quarterly publications.", uk: "Публічний дашборд + квартальні публікації у форматі IATI 2.03." } },
  { code: "A5", cluster: "Cluster A: Infrastructure", name: { en: "Payment Processing & Smart Clearing", uk: "Обробка платежів та смарт-кліринг" }, budget: 0, timeline: { en: "TBD", uk: "TBD" }, beneficiaries: { en: "Outcome-based payments", uk: "Оплата за результат" }, status: "Phase 2", description: { en: "Outcome-based payment engine with escrow and smart clearing.", uk: "Двигун оплати за результат з ескроу та смарт-клірингом." } },
  // Cluster B
  { code: "B1", cluster: "Cluster B: Capacity", name: { en: "Shadow Sector Formalization Pilot", uk: "Пілот формалізації тіньового сектору" }, budget: 0, timeline: { en: "TBD", uk: "TBD" }, beneficiaries: { en: "TBD", uk: "TBD" }, status: "Phase 1", description: { en: "Registration pathway and platform-sourced client referrals.", uk: "Шлях реєстрації та направлення клієнтів з платформи." } },
  { code: "B2", cluster: "Cluster B: Capacity", name: { en: "VR Hub Network (BRAVEMIND)", uk: "Мережа VR-хабів (BRAVEMIND)" }, budget: 0, timeline: { en: "TBD", uk: "TBD" }, beneficiaries: { en: "TBD", uk: "TBD" }, status: "Phase 1", description: { en: "Deploy VR therapy infrastructure with BRAVEMIND protocol.", uk: "Розгортання VR-терапевтичної інфраструктури з протоколом BRAVEMIND." } },
  { code: "B3", cluster: "Cluster B: Capacity", name: { en: "Train for Care (GEHA + USC ICT)", uk: "Train for Care (GEHA + USC ICT)" }, budget: 0, timeline: { en: "TBD", uk: "TBD" }, beneficiaries: { en: "TBD", uk: "TBD" }, status: "Phase 1", description: { en: "Clinical training programme: EMDR + VR Bravemind.", uk: "Програма клінічного навчання: EMDR + VR Bravemind." } },
  { code: "B4", cluster: "Cluster B: Capacity", name: { en: "Diaspora Supervision Network", uk: "Мережа діаспорної супервізії" }, budget: 0, timeline: { en: "TBD", uk: "TBD" }, beneficiaries: { en: "TBD", uk: "TBD" }, status: "Phase 2", description: { en: "Remote supervision by Ukrainian psychologists abroad.", uk: "Дистанційна супервізія українськими психологами за кордоном." } },
  // Cluster C
  { code: "C1", cluster: "Cluster C: Sustainability", name: { en: "State SaaS Subscription", uk: "Державна SaaS-Підписка" }, budget: 0, timeline: { en: "TBD", uk: "TBD" }, beneficiaries: { en: "TBD", uk: "TBD" }, status: "Phase 2", description: { en: "State buys service, not infrastructure. No CAPEX, no IT ownership burden.", uk: "Держава купує послугу, а не інфраструктуру. Без CAPEX та тягаря володіння ІТ." } },
  { code: "C2", cluster: "Cluster C: Sustainability", name: { en: "CSR Programme: Corporate Veterans", uk: "КСВ-програма: корпоративні ветерани" }, budget: 0, timeline: { en: "TBD", uk: "TBD" }, beneficiaries: { en: "TBD", uk: "TBD" }, status: "Phase 2", description: { en: "Corporations sponsor VR therapy sessions for veterans.", uk: "Корпорації спонсорують VR-терапевтичні сесії для ветеранів." } },
  { code: "C3", cluster: "Cluster C: Sustainability", name: { en: "Global Replication Framework", uk: "Рамка глобальної реплікації" }, budget: 0, timeline: { en: "TBD", uk: "TBD" }, beneficiaries: { en: "Post-conflict countries", uk: "Постконфліктні країни" }, status: "Phase 3", description: { en: "Package the Ukrainian model for international scaling.", uk: "Пакетування української моделі для міжнародного масштабування." } }
];

export const CANONICAL_STATS: CanonicalStat[] = [
  { value: "9.6M", label: { en: "People at risk", uk: "Людей у зоні ризику" }, source: "WHO, 2025", status: "CANONICAL" },
  { value: "3.9M", label: { en: "Clinical MHPSS Need", uk: "Клінічна потреба MHPSS" }, source: "Lancet 2023", status: "CANONICAL" },
  { value: "74%", label: { en: "Treatment Gap (IDPs)", uk: "Treatment Gap (ВПО)" }, source: "IOM/UNHCR 2023", status: "CANONICAL" },
  { value: "117,652", label: { en: "mhGAP Certificates", uk: "Сертифікатів mhGAP" }, source: "WHO mhGAP Dashboard", status: "CANONICAL" },
  { value: "42", label: { en: "Practicing under supervision", uk: "Практикують під супервізією" }, source: "PMC 2020", status: "CANONICAL" },
  { value: "62.4M", label: { en: "Sessions Needed (Hours)", uk: "Необхідний обсяг сесій (Годин)" }, source: "Calculated (3.9M x 16)", status: "CALCULATED" },
  { value: "~0%", label: { en: "ESOZ Synchronization", uk: "Синхронізація з ЕСОЗ" }, source: "eHealth Ukraine data", status: "CANONICAL" },
  { value: "89%", label: { en: "State MH Budget to Inpatient", uk: "Держбюджет MH на стаціонар" }, source: "MOH Budget Data", status: "CANONICAL" }
];

export const FAILURES: Failure[] = [
  { id: "1", title: { en: "Fragmented Funding", uk: "Фрагментоване фінансування" }, description: { en: "Resources are scattered across multiple actors without a unified strategy.", uk: "Ресурси розпорошені між багатьма акторами без єдиної стратегії." } },
  { id: "2", title: { en: "Physical Coordination", uk: "Фізична координація" }, description: { en: "Coordination relies on manual, physical processes instead of digital systems.", uk: "Координація покладається на ручні, фізичні процеси замість цифрових систем." } },
  { id: "3", title: { en: "No Outcome Verification", uk: "Відсутність верифікації результатів" }, description: { en: "Symptom reduction is not tracked or is silenced. State monitoring is fragmented (2.5% synced with eHealth).", uk: "Зниження симптомів не відстежується або замовчується. Державний моніторинг фрагментований (2,5% синхронізовано з eHealth)." } },
  { id: "4", title: { en: "Fragmented Service Delivery", uk: "Фрагментоване надання послуг" }, description: { en: "Missing middle layer (private practice) to catch beneficiaries and address them as patients when needed.", uk: "Відсутня середня ланка (приватна практика), яка б підхоплювала бенефіціарів і адресувала їх як пацієнтів за потреби." } },
  { id: "5", title: { en: "Duplicated Monitoring", uk: "Дублювання моніторингу" }, description: { en: "8 different systems, duplicating Activity Info and e-Health.", uk: "8 різних систем, дублювання Activity Info та e-Health." } },
  { id: "6", title: { en: "Informal Practice", uk: "Неформалізована практика" }, description: { en: "The largest segment of professionals operates in the shadow sector; results are not measured.", uk: "Найбільший прошарок фахівців працює в тіні; результати не вимірюються." } },
  { id: "7", title: { en: "Incomplete Psychiatric Reform", uk: "Незавершена психіатрична реформа" }, description: { en: "Psychiatric dispensaries have been reformed significantly, but 30% of the reform remains incomplete.", uk: "Психдиспансери реформовано істотно, але 30% реформи не завершено." } },
  { id: "8", title: { en: "The Bidirectional Data Block", uk: "Двостороннє блокування даних" }, description: { en: "Administrative deadlock: State demands medical licenses from NGOs to enter ESOZ. NGOs cannot comply. World Bank funds remain locked because non-ESOZ data is unauditable.", uk: "Адміністративний глухий кут: Держава вимагає медичні ліцензії від НУО для входу в ЕСОЗ. НУО не можуть їх отримати. Кошти СБ заблоковані, бо дані поза ЕСОЗ не підлягають аудиту." } }
];

export const NBU_STRATEGY: NBUStrategyStep[] = [
  { step: 1, title: { en: "NBU Engagement & Mental Health Index", uk: "Залучення НБУ та Індекс ментального здоров'я" }, description: { en: "Propose to NBU to prepare a mental health index that impacts World Bank lending.", uk: "Запропонувати НБУ готувати індекс ментального здоров'я із впливом на кредитування Світового банку." } },
  { step: 2, title: { en: "Data Bus to NHSU", uk: "Шина даних до НСЗУ" }, description: { en: "Build a data bus delivering verified mental health data directly to the NHSU database.", uk: "Вбудувати шину, яка буде доставляти верифіковані дані до бази НСЗУ." } },
  { step: 3, title: { en: "Train for Care (Banking Sector)", uk: "Train for Care (Банківський сектор)" }, description: { en: "Participate in 'Train for Care' for all Ukrainian banks to build a scalable model for other industries.", uk: "Участь у проєкті 'Train for Care' для всіх українських банків, щоб побудувати модель для інших галузей." } },
  { step: 4, title: { en: "HEAL / World Bank Integration", uk: "Інтеграція HEAL / Світовий банк" }, description: { en: "Reach the WB HEAL project through NBU, utilizing Component 4 ($50M digitalization budget).", uk: "Дотягнутись до проєкту СБ HEAL через НБУ, використовуючи Компонент 4 ($50M на цифровізацію)." } }
];

export const MACRO_ECONOMIC_STATS = {
  costToState: { en: "€0.00", uk: "€0.00" },
  costToStateSub: { en: "State buys service (SaaS), not infrastructure. Zero CAPEX.", uk: "Держава купує послугу (SaaS), а не інфраструктуру. Без CAPEX." },
  gdpImpact: { en: "$1.2B+", uk: "$1.2B+" },
  gdpImpactSub: { en: "Annual GDP loss due to untreated MHPSS conditions.", uk: "Щорічні втрати ВВП через неліковані розлади психічного здоров'я." }
};

export const DO_DONT_RULES = [
  {
    type: "do",
    title: { en: "✓ Always Say", uk: "✓ Завжди кажемо" },
    items: [
      { en: "\"Infrastructure\" / \"financial rails\" / \"digital bus\"", uk: "«Інфраструктура» / «фінансові рейки» / «цифрова шина»" },
      { en: "\"Measurement and payment system\"", uk: "«Система вимірювання та платежів»" },
      { en: "\"Outcome-verified\" / \"data-driven\"", uk: "«Верифіковано за результатом» / «на основі даних»" },
      { en: "\"Complements [programme name]\" / \"enables [programme name]\"", uk: "«Доповнює [назва програми]» / «забезпечує [назва програми]»" },
      { en: "\"Conservative estimate\" / \"verified by [source]\"", uk: "«Консервативна оцінка» / «верифіковано [джерелом]»" },
      { en: "\"Ukrainian-owned\" / \"sovereign data infrastructure\"", uk: "«Українське володіння» / «суверенна дата-інфраструктура»" }
    ]
  },
  {
    type: "dont",
    title: { en: "✗ Never Say", uk: "✗ Ніколи не кажемо" },
    items: [
      { en: "\"We provide therapy\" / \"mental health service\"", uk: "«Ми надаємо терапію» / «послуга психічного здоров'я»" },
      { en: "\"Replacing [any existing programme]\" / \"better than [programme]\"", uk: "«Замінюємо [будь-яку існуючу програму]» / «краще ніж [програма]»" },
      { en: "\"Revolutionary\" / \"unprecedented\" / \"disrupting\"", uk: "«Революційний» / «безпрецедентний» / «руйнівний»" },
      { en: "Any criticism of ТИ ЯК?, HEAL, THRIVE, or MHPSS TWG", uk: "Будь-яка критика ТИ ЯК?, HEAL, THRIVE чи MHPSS TWG" },
      { en: "Unattributed statistics / round-number estimates without source", uk: "Статистика без джерела / округлені оцінки без посилання" },
      { en: "\"App\" / \"startup\" / \"disrupt\" / \"unicorn\" / \"moonshot\"", uk: "«Додаток» / «стартап» / «дизрапт» / «єдиноріг» / «місячний постріл»" }
    ]
  }
];

export const AUDIENCES: Audience[] = [
  { id: "wb", name: { en: "World Bank & Donors", uk: "Світовий банк та донори" }, concern: { en: "Value-for-money, results verification, DLIs", uk: "Вартість за гроші, верифікація результатів, DLIs" }, message: { en: "FEEL Again is the measurement infrastructure that makes HEAL's investments and THRIVE's results countable.", uk: "FEEL Again — інфраструктура вимірювання, яка робить інвестиції HEAL та результати THRIVE вимірюваними." } },
  { id: "gov", name: { en: "Ukrainian Government (MoH, NHSU)", uk: "Уряд України (МОЗ, НСЗУ)" }, concern: { en: "ESOZ compatibility, Law 4223-IX implementation", uk: "Сумісність з ЕСОЗ, реалізація Закону 4223-IX" }, message: { en: "Provides the digital tool that implements Law 4223-IX and feeds ESOZ via HL7 FHIR R4.", uk: "Надає цифровий інструмент, що реалізує Закон 4223-IX і живить ЕСОЗ через HL7 FHIR R4." } },
  { id: "prof", name: { en: "Mental Health Professionals", uk: "Фахівці психічного здоров'я" }, concern: { en: "Income stability, formalization burden", uk: "Стабільність доходу, тягар формалізації" }, message: { en: "Reduces formalization cost, provides stable client flow, measures outcomes. Platform works for you.", uk: "Знижує вартість формалізації, забезпечує потік клієнтів, вимірює результати. Платформа працює для вас." } }
];

// WHO-inspired Palette for charts
export const COLORS = {
    primary: "#0093d5", // WHO Blue
    secondary: "#f26829", // Orange
    accent: "#f7941d", // Lighter Orange
    dark: "#1e293b",
    light: "#f1f5f9",
    success: "#009B77",
    danger: "#D91E18"
};

export const DIRECTIONS = [
  {
    id: 1,
    title: { en: "Digital Ecosystem & Finance", uk: "Цифрова Екосистема та Фінанси" },
    tagline: { en: "The Engine: Liquidity & Transparency", uk: "Двигун: Ліквідність та Прозорість" },
    keyProjects: [
        { en: "De-risked Co-financing", uk: "Де-ризиковане спів-фінансування" }, 
        { en: "Digital Actor Coordination", uk: "Цифрова координація акторів" },
        { en: "Global API Integration", uk: "Інтеграція з глобальними АРІ" }
    ],
    deploymentModels: ["Blended Finance", "Blockchain/Solana", "Open Data Standards"],
    status: "Active",
    description: { 
        en: "Unified data set and financial infrastructure ensuring transparent resource allocation.", 
        uk: "Єдиний дата-сет та фінансова інфраструктура, що забезпечує прозорий розподіл ресурсів." 
    }
  },
  {
    id: 2,
    title: { en: "Human Capital & Regulation", uk: "Людський Капітал та Регулювання" },
    tagline: { en: "The Standards: Quality & Capacity", uk: "Стандарти: Якість та Спроможність" },
    keyProjects: [
        { en: "Human Capital Restructuring", uk: "Реструктуризація людського капіталу" }, 
        { en: "Regulatory Solution Dev", uk: "Розробка регуляторних рішень" }, 
        { en: "Evidence-Based Practice", uk: "Доказова практика" }
    ],
    deploymentModels: ["Certification", "Legislative Advocacy", "University Partnerships"],
    status: "Active",
    description: { 
        en: "Restructuring the workforce and establishing regulatory frameworks for sustainable rehab.", 
        uk: "Реструктуризація робочої сили та створення регуляторних рамок для сталої реабілітації." 
    }
  },
  {
    id: 3,
    title: { en: "Service Delivery & Innovation", uk: "Надання Послуг та Інновації" },
    tagline: { en: "The Action: Access & Care", uk: "Дія: Доступ та Допомога" },
    keyProjects: [
        { en: "Hospitals & Rehab Centers", uk: "Шпиталі та Реабілітаційні Центри" }, 
        { en: "All You | WHO Integration", uk: "ТИ ЯК | Health Cluster | WHO інтеграція" }, 
        { en: "VR/AR Adaptation", uk: "Адаптація VR/AR" }
    ],
    deploymentModels: ["Hybrid Centers", "Mobile Teams", "Tele-health"],
    status: "Active",
    description: { 
        en: "Direct delivery of services through physical and digital channels.", 
        uk: "Безпосереднє надання послуг через фізичні та цифрові канали." 
    }
  },
  {
    id: 4,
    title: { en: "Consortium & Livelihoods", uk: "Консорціум та Зайнятість" },
    tagline: { en: "The Network: Partners & Vets", uk: "Мережа: Партнери та Ветерани" },
    keyProjects: [
        { en: "Grand Bargain Enabling Tool", uk: "Туул для досягнення Grand Bargain" }, 
        { en: "Veteran Reintegration", uk: "Реінтеграція Ветеранів" }, 
        { en: "CSR Activation", uk: "Активація КСО" }
    ],
    deploymentModels: ["Consortium Mgmt", "Corporate Partnerships", "Advocacy"],
    status: "Active",
    description: { 
        en: "Managing the partner ecosystem and economic integration of beneficiaries.", 
        uk: "Управління екосистемою партнерів та економічна інтеграція бенефіціарів." 
    }
  }
];

export const PARTNERSHIPS = [
  { id: 1, name: { en: "State & Governance", uk: "Держава та Управління" }, icon: "🏛️", partners: ["MOH", "Min Economy", "Cabinet Ministers"], beneficiaries: { en: "Regulatory Sandbox", uk: "Регуляторна Пісочниця" }, budget: "State", status: "Active", color: "bg-red-900/40 text-red-200", size: 9, layer: "Governance" },
  { id: 2, name: { en: "Coordination", uk: "Координація" }, icon: "🤝", partners: ["Open Society Foundation Ukraine"], beneficiaries: { en: "Consortium", uk: "Консорціум" }, budget: "Grant", status: "Active", color: "bg-orange-900/40 text-orange-200", size: 7, layer: "Execution" },
  { id: 3, name: { en: "Financial Inclusion", uk: "Фінансова Інклюзія" }, icon: "🏦", partners: ["NBU", "EBRD"], beneficiaries: { en: "Veterans", uk: "Ветерани" }, budget: "Institutional", status: "Active", color: "bg-yellow-900/40 text-yellow-200", size: 8, layer: "Funding" },
  { id: 5, name: { en: "Health Cluster & UN", uk: "Кластер Охорони Здоров'я та ООН" }, icon: "🚑", partners: ["WHO", "UNICEF", "Health Cluster OCHA"], beneficiaries: { en: "Coordination", uk: "Координація" }, budget: "Pooled", status: "Dialogue", color: "bg-indigo-900/40 text-indigo-200", size: 9, layer: "Governance" },
  { id: 6, name: { en: "Clinical & Academic", uk: "Клінічна та Академічна Спільнота" }, icon: "🎓", partners: ["USC ICT (Dr. Skip Rizzo)", "GEHA Israel", "Shevchenko Uni", "Oxford/Groningen"], beneficiaries: { en: "Methodology", uk: "Методологія" }, budget: "Grant", status: "Active", color: "bg-purple-900/40 text-purple-200", size: 6, layer: "Quality" },
  { id: 7, name: { en: "Fintech & Digital", uk: "Фінтех та Цифрові Платформи" }, icon: "🌐", partners: ["Quorum HighCastle", "Enkidu P2P"], beneficiaries: { en: "Infrastructure", uk: "Інфраструктура" }, budget: "Private", status: "Active", color: "bg-green-900/40 text-green-200", size: 7, layer: "Execution" },
  { id: 8, name: { en: "Humanitarian Donors", uk: "Гуманітарні Донори" }, icon: "❤️", partners: ["USAID", "EU", "Chemonics/DAI"], beneficiaries: { en: "Liquidity", uk: "Ліквідність" }, budget: "Grant", status: "Active", color: "bg-pink-900/40 text-pink-200", size: 5, layer: "Funding" },
  
  // Expanded Beneficiaries & Target Groups
  { id: 4, name: { en: "Veterans & Active Military", uk: "Ветерани та Військовослужбовці" }, icon: "🎖️", partners: ["US DoD", "MOH"], beneficiaries: { en: "Primary Target (PTSD/TBI)", uk: "Основна Цільова Група (ПТСР/ЧМТ)" }, budget: "State/Donor", status: "Active", color: "bg-blue-900/40 text-blue-200", size: 10, layer: "Beneficiary" },
  { id: 9, name: { en: "IDPs & War-Affected Civilians", uk: "ВПО та Постраждалі Цивільні" }, icon: "👨‍👩‍👧‍👦", partners: ["Humanitarian Responders"], beneficiaries: { en: "Broad Population (74% Gap)", uk: "Широке Населення (74% Розрив)" }, budget: "Donor/Pooled", status: "Active", color: "bg-teal-900/40 text-teal-200", size: 9, layer: "Beneficiary" },
  { id: 10, name: { en: "Families of Veterans & Fallen", uk: "Родини Ветеранів та Полеглих" }, icon: "🫂", partners: ["Community Centers"], beneficiaries: { en: "Secondary Trauma Support", uk: "Підтримка Вторинної Травми" }, budget: "CSR/Philanthropy", status: "Active", color: "bg-rose-900/40 text-rose-200", size: 8, layer: "Beneficiary" },
  { id: 11, name: { en: "Mental Health Professionals", uk: "Фахівці Психічного Здоров'я" }, icon: "🧠", partners: ["Private Practitioners", "Retrained Specialists"], beneficiaries: { en: "Capacity Building Target", uk: "Цільова Група Розбудови Спроможності" }, budget: "Grants/B2B", status: "Active", color: "bg-cyan-900/40 text-cyan-200", size: 8, layer: "Beneficiary" }
];

export const TRAIN_FOR_CARE_ECONOMICS = {
  cohortSize: 20,
  investment: 75605,
  costPerProfessional: 3780,
  proBonoHoursPerProfessional: 120,
  totalProBonoHours: 2400,
  marketRatePerHour: 70,
  generatedValue: 168000,
  netGain: 92395,
  roi: 2.22,
  gdpReintegrationPerJob: 2000
};

export const ARCHITECTURE_LAYERS = [
  { id: 1, name: { en: "Layer 1: Clinical Protocol Foundation", uk: "Шар 1: Клінічний Фундамент" }, desc: { en: "EMDR, TF-CBT, VR exposure. Evidence-based treatments recognized by insurance.", uk: "EMDR, TF-CBT, VR експозиція. Доказові методи, що визнаються страхуванням." } },
  { id: 2, name: { en: "Layer 2: Digital Accompaniment", uk: "Шар 2: Цифровий Супровід" }, desc: { en: "QR integration, practitioner links, mobile outcome measurement.", uk: "QR-інтеграція, лінки фахівців, вимірювання результатів на мобільному." } },
  { id: 3, name: { en: "Layer 3: Payment Infrastructure", uk: "Шар 3: Платіжна Інфраструктура" }, desc: { en: "P2P + blended finance + outcome-based payments. Smart Clearing & Escrow.", uk: "P2P + змішане фінансування + оплата за результат. Smart Clearing та Escrow." } },
  { id: 4, name: { en: "Layer 4: Data Coordination", uk: "Шар 4: Координація Даних" }, desc: { en: "API gateway to ESOZ, ActivityInfo, OCHA FTS. Depersonalized aggregation.", uk: "API шлюз до ЕСОЗ, ActivityInfo, OCHA FTS. Деперсоніфікована агрегація." } },
  { id: 5, name: { en: "Layer 5: Governance & Compliance", uk: "Шар 5: Управління та Комплаєнс" }, desc: { en: "Grand Bargain alignment, KSZI security, KEP digital signatures.", uk: "Відповідність Grand Bargain, захист КСЗІ, КЕП підписи." } },
  { id: 6, name: { en: "Gateway: FEEL Integration Hub", uk: "Шлюз: FEEL Інтеграційний Хаб" }, desc: { en: "Translating humanitarian/private data into ESOZ formats. Currency control (Quoroom).", uk: "Переклад гуманітарних/приватних даних у формати ЕСОЗ. Валютний контроль (Quoroom)." }, isGateway: true }
];

export const KILLER_QUOTES = [
  {
    en: "We do not provide therapy. We build the digital bus that makes therapy findable, fundable, and accountable.",
    uk: "Ми не надаємо терапію. Ми будуємо цифрову шину, яка робить терапію знаходжуваною, фінансованою та підзвітною."
  },
  {
    en: "Training fails because there is nowhere to practice. Facilities fail because there is no measurement system. Measurement fails because there are no financial rails.",
    uk: "Тренінги провалюються, бо нема де практикувати. Заклади провалюються, бо нема системи вимірювання. Вимірювання провалюється, бо нема фінансових рейок."
  },
  {
    en: "117,652 people have been trained in mental health protocols — yet only 42 are practising as structured, accountable, funded professionals.",
    uk: "117 652 людини навчено протоколам психічного здоров'я — але лише 42 практикують як структуровані, підзвітні, фінансовані фахівці."
  },
  {
    en: "Every quantitative claim in FEEL Again communications traces to our Canonical Dataset. Conservative projections are our only projections.",
    uk: "Кожне кількісне твердження в комунікаціях FEEL Again простежується до нашого Канонічного датасету. Консервативні прогнози — наші єдині прогнози."
  },
  {
    en: "FEEL Again replaces manual 4W reporting with automated open data. Your organization's contribution becomes visible in a national dataset without adding reporting burden.",
    uk: "FEEL Again замінює ручну 4W-звітність автоматизованими відкритими даними. Внесок вашої організації стає видимим у національному датасеті без додаткового тягаря звітності."
  }
];

export const SCORING_MATRIX = [
  { id: "skin", weight: 25, title: { en: "Skin in the Game", uk: "Skin in the Game" }, desc: { en: "Beneficiary/community co-pay (social contract). Increases completion compliance.", uk: "Особистий внесок бенефіціара / громади (соціальний договір). Підвищує комплаєнс." } },
  { id: "match", weight: 20, title: { en: "Co-funding Match", uk: "Співфінансування" }, desc: { en: "Presence of corporate donor or community fund (blended finance leverage).", uk: "Наявність корпоративного донора або фонду громади (blended finance leverage)." } },
  { id: "demo", weight: 20, title: { en: "Demographic Multiplier", uk: "Демогр. мультиплікатор" }, desc: { en: "Veteran, presence of children, IDP status = higher weight.", uk: "Ветеран, наявність дітей, статус ВПО = вища вага." } },
  { id: "prob", weight: 20, title: { en: "Probability of Completion", uk: "Ймовірність завершення" }, desc: { en: "Stability forecast based on regression dataset (family support, housing).", uk: "Прогноз стабільності на основі регресного датасету (підтримка родини, житло)." } },
  { id: "urgency", weight: 15, title: { en: "Clinical Urgency", uk: "Клінічна терміновість" }, desc: { en: "Priority for acute cases based on primary clinical diagnosis (PHQ-9/GAD-7).", uk: "Пріоритет гострих випадків за результатами первинної діагностики (PHQ-9/GAD-7)." } }
];

export const NARRATIVE_ASSETS = [
  {
    id: "N1",
    title: { en: "The Infrastructure Gap", uk: "Інфраструктурна Прогалина" },
    summary: { 
      en: "117,652 trained, but only 42 practicing. We build the missing digital bus.", 
      uk: "117 652 навчених, але лише 42 практикують. Ми будуємо відсутню цифрову шину." 
    },
    details: {
      en: "The crisis cannot be solved by adding more of what already exists. 117,652 people have been trained in mental health protocols — yet only 42 are practising as structured, accountable, funded professionals. Training fails because there is nowhere to practice. We build the measurement and payment system to formalize the shadow sector and create a pathway from certificate to paid practice.",
      uk: "Кризу неможливо вирішити, додаючи більше того, що вже існує. 117 652 людини навчено протоколам психічного здоров'я — але лише 42 практикують як структуровані, підзвітні фахівці. Тренінги провалюються, бо нема де практикувати. Ми будуємо систему вимірювання та платежів, щоб формалізувати тіньовий сектор і створити шлях від сертифікату до оплачуваної практики."
    }
  },
  {
    id: "N2",
    title: { en: "Rails, Not Trains", uk: "Рейки, а не Потяги" },
    summary: { 
      en: "We do not provide therapy. We build the digital financial rails.", 
      uk: "Ми не надаємо терапію. Ми будуємо цифрові фінансові рейки." 
    },
    details: {
      en: "FEEL Again does not provide therapy. It does not train therapists. It builds the infrastructure that makes therapy findable, fundable, and accountable. Like Visa, we do not sell products; we provide the rails so products can be sold. We build the digital bus—provider registry, session metering, and payment clearing—that connects those who need support with those who can provide it.",
      uk: "FEEL Again не надає терапію. Не навчає терапевтів. Програма будує інфраструктуру, яка робить терапію знаходжуваною, фінансованою та підзвітною. Як Visa, ми не продаємо товари; ми надаємо рейки, щоб товари могли продаватися. Ми будуємо цифрову шину — реєстр надавачів, метрування сесій та кліринг платежів — що з'єднує тих, хто потребує підтримки, з тими, хто може її надати."
    }
  },
  {
    id: "N3",
    title: { en: "Verified Data, Not Promises", uk: "Верифіковані Дані, а не Обіцянки" },
    summary: { 
      en: "Outcome-verified data drives the entire ecosystem.", 
      uk: "Верифіковані за результатом дані керують усією екосистемою." 
    },
    details: {
      en: "Every quantitative claim is traceable to our Canonical Dataset. We use conservative estimates and radical transparency. Sessions are metered against validated clinical instruments (PCL-5, PHQ-9, GAD-7), outcomes are published, and payments clear automatically against verified results. Donor money reaches verified impact, and state systems get data they can count.",
      uk: "Кожне кількісне твердження простежується до нашого Канонічного датасету. Ми використовуємо консервативні оцінки та радикальну прозорість. Сесії метруються за валідованими клінічними інструментами (PCL-5, PHQ-9, GAD-7), результати публікуються, а платежі клірингуються автоматично за верифікованими результатами. Донорські гроші досягають верифікованого впливу, а державні системи отримують дані, які можна рахувати."
    }
  },
  {
    id: "N4",
    title: { en: "Complementarity, Not Competition", uk: "Компліментарність, а не Конкуренція" },
    summary: { 
      en: "Infrastructure that amplifies existing programs.", 
      uk: "Інфраструктура, що підсилює існуючі програми." 
    },
    details: {
      en: "FEEL Again is infrastructure that amplifies existing programs. The First Lady's programme 'How Are You?' reached millions with destigmatization — we provide the rails for those who responded to find a provider. HEAL builds facilities — we measure what happens inside them. THRIVE pays for results — we make results countable. We replace manual 4W reporting with automated open data for the entire sector.",
      uk: "FEEL Again — це інфраструктура, що підсилює існуючі програми. Програма Першої леді 'ТИ ЯК?' охопила мільйони дестигматизацією — ми надаємо рейки для тих, хто відгукнувся, щоб знайти надавача. HEAL будує заклади — ми вимірюємо те, що відбувається всередині. THRIVE платить за результати — ми робимо результати вимірюваними. Ми замінюємо ручну 4W-звітність автоматизованими відкритими даними для всього сектору."
    }
  },
  {
    id: "N5",
    title: { en: "State Integration (SaaS)", uk: "Державна Інтеграція (SaaS)" },
    summary: { 
      en: "A sovereign data infrastructure enabling state policy.", 
      uk: "Суверенна дата-інфраструктура, що забезпечує державну політику." 
    },
    details: {
      en: "FEEL Again provides the digital tool that implements what Law 4223-IX mandates and what ESOZ needs: a certification pathway for psychotherapy SROs, session metering that feeds ESOZ via HL7 FHIR R4, and a path to formalize the shadow sector. The state subscribes to the platform (SaaS) with zero CAPEX, ensuring Ukrainian ownership and sovereign data infrastructure.",
      uk: "FEEL Again надає цифровий інструмент, що реалізує вимоги Закону 4223-IX та потреби ЕСОЗ: шлях сертифікації для СРО психотерапії, метрування сесій, що живить ЕСОЗ через HL7 FHIR R4, та шлях формалізації тіньового сектору. Держава підписується на платформу (SaaS) з нульовим CAPEX, забезпечуючи українське володіння та суверенну дата-інфраструктуру."
    }
  }
];

export const TIMELINE = [
  {
    phase: { en: "STAGE 1: RAILS (0-12 months)", uk: "ФАЗА 1: RAILS (0-12 місяців)" },
    period: { en: "2026", uk: "2026" },
    trigger: { en: "Digital Core Deployment", uk: "Розгортання Цифрового Ядра" },
    deliverables: [
        { en: "Payment infrastructure build", uk: "Побудова платіжної інфраструктури" },
        { en: "ESOZ & Helsi integration", uk: "Інтеграція з ЕСОЗ та Helsi" },
        { en: "First 100-person Train for Care cohort", uk: "Перша когорта Train for Care (100 осіб)" },
        { en: "NBU Regulatory Sandbox launch", uk: "Запуск регуляторної пісочниці НБУ" }
    ],
    status: "Current"
  },
  {
    phase: { en: "STAGE 2: CONNECT (6-24 months)", uk: "ФАЗА 2: CONNECT (6-24 місяці)" },
    period: { en: "2026-2027", uk: "2026-2027" },
    trigger: { en: "50+ Verified Practitioners", uk: "50+ Верифікованих Фахівців" },
    deliverables: [
        { en: "ActivityInfo synchronization with ESOZ", uk: "Синхронізація ActivityInfo з ЕСОЗ" },
        { en: "Scale training to 500 professionals", uk: "Масштабування навчання до 500 фахівців" },
        { en: "Activate SIBs/DIBs funding", uk: "Активація фінансування SIBs/DIBs" },
        { en: "Onboard 232 Health Cluster partners", uk: "Онбординг 232 партнерів Health Cluster" }
    ],
    status: "Future"
  },
  {
    phase: { en: "STAGE 3: COVERAGE & GLOBAL", uk: "ЕТАП 3: ПОКРИТТЯ ТА ГЛОБАЛІЗАЦІЯ" },
    period: { en: "2027+", uk: "2027+" },
    trigger: { en: "State SaaS Subscription", uk: "Державна SaaS-Підписка" },
    deliverables: [
        { en: "State subscribes to platform (No CAPEX)", uk: "Держава купує підписку (Без CAPEX)" },
        { en: "Global Replication Framework", uk: "Рамка глобальної реплікації" },
        { en: "Post-conflict Export", uk: "Експорт у постконфліктні країни" }
    ],
    status: "Future"
  }
];

export const RISKS = [
    {
        id: 1,
        risk: { en: "Insufficient Liquidity / Funding Gap", uk: "Недостатня ліквідність / Дефіцит фінансування" },
        probability: "High",
        impact: "Critical",
        mitigations: [
            { en: "Diversification: Activate Crowdfunding (P2P) + Corp CSR simultaneous to Institutional Grants", uk: "Диверсифікація: Активація краудфандингу (P2P) + КСО паралельно з грантами" },
            { en: "SaaS Model: Pivot platform to B2B service charging 3.5% transaction fees", uk: "SaaS Модель: Півот платформи у B2B сервіс з комісією 3.5% за транзакцію" },
            { en: "Phased scope reduction prioritizing only critical verified cases", uk: "Поетапне зменшення обсягу з пріоритезацією лише критичних верифікованих кейсів" }
        ]
    },
    {
        id: 2,
        risk: { en: "Low Adoption of Crypto/Blockchain wallets by NGOs", uk: "Низьке прийняття крипто-гаманців НУО" },
        probability: "Medium",
        impact: "Severe",
        mitigations: [
            { en: "Middleware Abstraction: Hide blockchain complexity behind standard fiat-like UI", uk: "Абстракція Middleware: Приховати складність блокчейну за стандартним інтерфейсом" },
            { en: "Incentive Program: 'Gas-free' transactions and bonus credits for early adopters", uk: "Програма стимулів: Транзакції без комісії газу та бонуси для ранніх користувачів" },
            { en: "Hybrid Rail: Maintain parallel SWIFT/SEPA rails for conservative partners", uk: "Гібридний шлюз: Підтримка паралельних SWIFT/SEPA каналів для консервативних партнерів" }
        ]
    },
    {
        id: 3,
        risk: { en: "Regulatory Compliance / KYC Blockers", uk: "Регуляторний комплаєнс / KYC блокери" },
        probability: "Medium",
        impact: "Critical",
        mitigations: [
            { en: "Automated Compliance: Integration with Diia/State Registries for instant KYC", uk: "Автоматизований комплаєнс: Інтеграція з Дією/Реєстрами для миттєвого KYC" },
            { en: "Zero-Knowledge Proofs: Validating beneficiary status without exposing sensitive data", uk: "Докази з нульовим розголошенням: Валідація статусу без розкриття чутливих даних" },
            { en: "Partner Shielding: Using large INGOs as fiscal sponsors/intermediaries", uk: "Партнерський щит: Використання великих INGO як фіскальних спонсорів" }
        ]
    }
];

export const FINANCIALS_BY_DIRECTION = [
  { name: { en: "Digital Core Build", uk: "Розробка Цифрового Ядра" }, value: 500000, color: COLORS.primary }
];

export const MANAGEMENT_STRUCTURE = [
    {
        role: { en: "Program Director", uk: "Директор Програми" },
        focus: { en: "Strategy & Governance", uk: "Стратегія та Управління" },
        kpi: { en: "Consortium Growth, Gov Relations", uk: "Ріст Консорціуму, GR" },
        reports: []
    },
    {
        role: { en: "Digital & Finance Lead", uk: "Керівник Цифрової Екосистеми та Фінансів" },
        focus: { en: "Middleware, P2P, Blockchain", uk: "Middleware, P2P, Блокчейн" },
        kpi: { en: "Platform Uptime, Liquidity Volume", uk: "Аптайм, Обсяг Ліквідності" },
        reports: ["Tech Dev Team", "Finance Officer"]
    },
    {
        role: { en: "Human Capital & Practice Lead", uk: "Керівник Напряму Людського Капіталу" },
        focus: { en: "Certification, Regulation, Evidence", uk: "Сертифікація, Регулювання, Доказовість" },
        kpi: { en: "Specialists Verified, Protocols Adopted", uk: "Верифіковані Фахівці, Протоколи" },
        reports: ["Training Coord", "QA Officer"]
    },
    {
        role: { en: "Partnership & Ops Lead", uk: "Керівник Партнерств та Операцій" },
        focus: { en: "CSR, Clusters, Field Ops", uk: "КСО, Кластери, Поля" },
        kpi: { en: "Partners Onboarded, Beneficiary Reach", uk: "Партнери, Охоплення" },
        reports: ["Regional Coords", "Comms Manager"]
    }
];
