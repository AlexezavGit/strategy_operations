# ПЛАН КОНСОЛІДАЦІЇ РЕПОЗИТОРІЇВ FEEL AGAIN

> Статус: **відтворений план** (рекострукція з фактичного стану репозиторіїв 2026-11-24;
> оригінальний розбір втрачено разом із сесією Vibe — цей документ тепер є головним носієм).
> Джерело фактів: безпосередній огляд клонів усіх 12 репозиторіїв (гілка main, дата останніх комітів — з git log, origin GitHub).

---

## 1. Інвентаризація (стан на 2026-11-24)

| # | Репозиторій | Тип/пакер | Останній коміт | Що це | Стан |
|---|---|---|---|---|---|
| 1 | `site_front` | Replit rest-express (React+Vite, Drizzle/PG, auth) | 2026-09-27 | Публічний сайт FEEL Again + рольові кабінети (donor/provider/beneficiary/admin), `docs/` master context | **Активна основа** |
| 2 | `Hum_Fintech_infrastructure` | Replit rest-express | 2026-11-23 | Суперсет DigitalBus: ті самі сторінки + 5 порталів-кабінетів (admin/donor/provider/beneficiary/public) | **Активна основа** |
| 3 | `remix-of-mhpss-connect` | Lovable vite+shadcn | 2026-11-24 | Консорціум/програмні лінії, i18n, integrations | **Активна основа** |
| 4 | `DigitalBus` | Replit rest-express | 2026-03-31 | Прозорість гуманітарної допомоги (landing, dashboard, blockchain-monitor, transparency…) | ⛔ підмножина №2 — на архів |
| 5 | `gazelle-pathways` | Lovable vite+shadcn | 2026-07-06 | Програма Gazelle, кінетика кільця, мобільний фікс | Їсть «ремікс-ланцюжок», найновіша версія |
| 6 | `gazelles-flow` | Lovable vite+shadcn | 2026-06-04 | Попередня ітерація того самого продукту | ⛔ перекрита №5 — на архів |
| 7 | `dashboard` | Google AI Studio export (Vite, Cloudflare) | 2026-09-04 | `mhpss-ukraine-dashboard`, статичний експорт | Marginal — обʼєднати або архів |
| 8 | `terminal` | AI Studio / Next | 2026-04-11 | ImpactCalculator, сторінка trainings, статичний експорт | Marginal |
| 9 | `Feel-Again-blomberg` | AI Studio export (Vite, chartjs) | 2026-05-08 | Пітч-слайди Bloomberg-стилю | ⛔ одноразовий артефакт — на архів |
| 10 | `Feel-Again---Strategic-Visualizer-2` | AI Studio export | 2026-05-20 | Стратегічний візуалізатор | ⛔ одноразовий артефакт — на архів |
| 11 | `strategy_operations` | документи/аплоади | 2026-04-10 | Матриця програмних ліній (remix draft) — цей репо | залишити як docs-hub |
| 12 | `HumanitarianPlatform` | — | — | **Порожній** (0 файлів) | ⛔ видалити або використати як ціль злиття |

## 2. Головний висновок

Три паралельні лінійки будують **той самий продукт** (платформа прозорості/фінтех-рейки MHPSS-сектору):

```
Лінія A (повний стек):  DigitalBus ──→ Hum_Fintech_infrastructure ──┐
Лінія B (повний стек):  site_front (кабінети + docs-контекст)       ├──→ ОДИН монорепо
Лінія C (Lovable):      gazelles-flow ──→ gazelle-pathways ──→ remix-of-mhpss-connect
Лінія D (пітчі/візуали): blomberg + visualizer + terminal + dashboard  → мет与研究 archive/
```

Найдорожче дублювання: №1 і №2 — дві копії однієї архітектури (однаковий replit.md, 14+14 спільних сторінок), кожна зі своїми кабінетами.

## 3. Рекомендована цільова структура (монорепо на базі `Hum_Fintech_infrastructure`, альтернатива — `site_front`)

```
feel-again/               (нове імʼя або існуючий репо)
├── apps/
│   ├── platform/         ← Hum_Fintech_infrastructure (портал-суперсет, найсвіжіший код)
│   ├── public-site/      ← site_front (кабінети перенести в platform, docs/ —уголь в /docs)
│   └── consortium/       ← remix-of-mhpss-connect (остання ланка Lovable-ланцюжка)
├── packages/ui           ← спільні shadcn-компоненти (3 Lovable-репо + 2 Replit-репо мають майже ідентичний набір)
├── packages/i18n         ← uk/en рядки з remix-of-mhpss-connect як база
├── strategy archive/     ← blomberg, visualizer-2, terminal, dashboard, DigitalBus (читабельний архів, деплой вимкнено)
└── docs/                 ← master context із site_front + цей план + реєстр
```

Обґрунтування бази: `Hum_Fintech_infrastructure` — найсвіжіший код (23.11) і функційно найширший; але `site_front` — єдина лінія з реальним auth (Passport/scrypt, PG-сесії) і стратегічною документацією. **Рішення про базу — за вами; план нижче працює для обох варіантів** (в іншому випадку напрямок перенесення порталів змінюється на зворотний).

## 4. Фази (порядок мінімізує ризик)

**Фаза 0 — захист (1 день, до дотику до коду).**
Створити мітку `pre-merge-snapshot` на main кожного з 12 репо. Це страховка від повторення «зникнення сесії»: усе, що існує в git-тегах, вже нічого не fears.

**Фаза 1 — архівування (1–2 дні).**
DigitalBus, gazelles-flow, blomberg, Strategic-Visualizer-2, terminal, dashboard → GitHub archive (read-only). Нічого не видаляється; історія комітів лишається.

**Фаза 2 — злиття ліній A+B (основний обсяг, ~1–2 тижні).**
Диф-аудит 14 спільних сторінок DigitalBus-лінії vs site_front-кабінетів; перенесення role-based cabinet logic (Passport, scrypt, PG-сесії) у базу; єдиний drizzle schema.

**Фаза 3 — консорціум (3–5 днів).**
remix-of-mhpss-connect → `apps/consortium`; страницы, i18n-словники, integrations.

**Фаза 4 — спільні пакети (за потреби).**
packages/ui, packages/i18n — тільки якщо дублювання реально заважає (не поспішати).

**Фаза 5 — прибрати порожній HumanitarianPlatform** (видалити або перейменувати під ціль монорепо).

## 5. Відкриті питання (вирішуєти до Фази 2)

1. База монорепо: `Hum_Fintech_infrastructure`, `site_front`, чи новий порожній репо?
2. Чи має консорціум (Lovable-лінія) окремий деплой, чи це сторінки основного сайта?
3. Мови: remix має i18n (uk/en); інші — жорстко uk. Уніфікувати на базі remix-словників?

---

*Документ створений 2026-11-24 як реконструкція втраченого розбору. Оновлювати тут, а не в чат-сесіях.*
