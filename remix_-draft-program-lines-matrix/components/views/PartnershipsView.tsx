import React from 'react';
import { PARTNERSHIPS } from '../../constants';
import { Lang } from '../../types';
import { Users, Building2, Shield, HeartHandshake, GraduationCap } from 'lucide-react';

interface Props {
    lang: Lang;
}

const LAYER_CONFIG: Record<string, { icon: any, title: { en: string, uk: string }, color: string, border: string }> = {
    'Governance': { icon: Building2, title: { en: 'Governance & Coordination', uk: 'Управління та Координація' }, color: 'text-blue-400', border: 'border-blue-500/30' },
    'Funding': { icon: HeartHandshake, title: { en: 'Funding & Liquidity', uk: 'Фінансування та Ліквідність' }, color: 'text-emerald-400', border: 'border-emerald-500/30' },
    'Execution': { icon: Users, title: { en: 'Execution & Outreach', uk: 'Виконання та Охоплення' }, color: 'text-orange-400', border: 'border-orange-500/30' },
    'Quality': { icon: GraduationCap, title: { en: 'Quality & Methodology', uk: 'Якість та Методологія' }, color: 'text-purple-400', border: 'border-purple-500/30' },
    'Beneficiary': { icon: Shield, title: { en: 'Beneficiaries & Target Groups', uk: 'Бенефіціари та Цільові Групи' }, color: 'text-red-400', border: 'border-red-500/30' }
};

const PartnershipsView: React.FC<Props> = ({ lang }) => {
  // Group partnerships by layer
  const groupedPartnerships = PARTNERSHIPS.reduce((acc, partner) => {
      if (!acc[partner.layer]) {
          acc[partner.layer] = [];
      }
      acc[partner.layer].push(partner);
      return acc;
  }, {} as Record<string, typeof PARTNERSHIPS>);

  return (
    <div className="space-y-8">
      <div className="bg-slate-900/80 backdrop-blur p-6 rounded-xl border border-slate-800">
         <h3 className="text-xl text-white font-bold mb-2 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-500" />
            {lang === 'en' ? 'Ecosystem & Stakeholders' : 'Екосистема та Стейкхолдери'}
         </h3>
         <p className="text-sm text-slate-400 max-w-4xl">
            {lang === 'en' 
             ? 'The FEEL Again program operates as a decentralized ecosystem. This map outlines the key stakeholders, their roles across different operational layers, and how they interact to ensure systemic resilience and scale.' 
             : 'Програма FEEL Again функціонує як децентралізована екосистема. Ця карта окреслює ключових стейкхолдерів, їхні ролі на різних операційних рівнях та їхню взаємодію для забезпечення системної стійкості та масштабування.'}
         </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {Object.entries(groupedPartnerships).map(([layer, partners]) => {
            const config = LAYER_CONFIG[layer] || { icon: Users, title: { en: layer, uk: layer }, color: 'text-slate-400', border: 'border-slate-500/30' };
            const Icon = config.icon;

            return (
                <div key={layer} className={`bg-slate-900 rounded-xl border ${config.border} p-6 flex flex-col`}>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                        <div className={`p-2 rounded-lg bg-slate-950 border ${config.border}`}>
                            <Icon className={`w-5 h-5 ${config.color}`} />
                        </div>
                        <h4 className="text-lg font-bold text-white">{config.title[lang]}</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                        {partners.map(partner => (
                            <div key={partner.id} className="bg-slate-950 rounded-lg p-4 border border-slate-800 flex flex-col">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-2xl">{partner.icon}</span>
                                    <h5 className="font-bold text-slate-200 text-sm leading-tight">{partner.name[lang]}</h5>
                                </div>
                                
                                <div className="space-y-2 mt-auto">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-slate-500">{lang === 'en' ? 'Role:' : 'Роль:'}</span>
                                        <span className="text-slate-300 font-medium">{partner.beneficiaries[lang]}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-slate-500">{lang === 'en' ? 'Budget:' : 'Бюджет:'}</span>
                                        <span className="text-slate-300">{partner.budget}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-slate-500">{lang === 'en' ? 'Status:' : 'Статус:'}</span>
                                        <span className={`px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold ${
                                            partner.status === 'Active' ? 'bg-emerald-900/50 text-emerald-400' :
                                            partner.status === 'Open' ? 'bg-blue-900/50 text-blue-400' :
                                            'bg-slate-800 text-slate-400'
                                        }`}>
                                            {partner.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-3 pt-3 border-t border-slate-800/50">
                                    <div className="flex flex-wrap gap-1">
                                        {partner.partners.map((p, i) => (
                                            <span key={i} className="text-[10px] bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800">
                                                {p}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        })}
      </div>
    </div>
  );
};

export default PartnershipsView;