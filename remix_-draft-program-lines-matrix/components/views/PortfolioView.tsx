import React from 'react';
import { PROJECTS } from '../../constants';
import StatusBadge from '../ui/StatusBadge';
import { Lang, Project } from '../../types';

interface Props {
    lang: Lang;
}

const PortfolioView: React.FC<Props> = ({ lang }) => {
  const headers = {
    code: { en: "Code", uk: "Код" },
    name: { en: "Intervention Name", uk: "Назва Втручання" },
    budget: { en: "Req. Funding", uk: "Потреба" },
    timeline: { en: "Duration", uk: "Тривалість" },
    ben: { en: "Targeted Reach", uk: "Цільове Охоплення" },
    status: { en: "Status", uk: "Статус" },
    total: { en: "Total", uk: "Разом" }
  };

  // Group projects by cluster
  const groupedProjects = PROJECTS.reduce((acc, project) => {
    if (!acc[project.cluster]) {
      acc[project.cluster] = [];
    }
    acc[project.cluster].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedProjects).map(([groupName, projects]) => (
        <div key={groupName} className="bg-slate-900 rounded-xl shadow-lg border border-slate-800 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-800 bg-slate-950 flex justify-between items-center">
            <h3 className="font-bold text-slate-200 flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-500 rounded-sm"></span>
                {groupName}
            </h3>
            <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-2 py-1 rounded-md border border-slate-700">
              {headers.total[lang]}: ${projects.reduce((acc, p) => acc + p.budget, 0).toLocaleString()}
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-900 text-slate-500 font-medium border-b border-slate-800">
                <tr>
                  <th className="px-6 py-3 text-xs uppercase tracking-wider">{headers.code[lang]}</th>
                  <th className="px-6 py-3 text-xs uppercase tracking-wider">{headers.name[lang]}</th>
                  <th className="px-6 py-3 text-xs uppercase tracking-wider">{headers.budget[lang]}</th>
                  <th className="px-6 py-3 text-xs uppercase tracking-wider">{headers.timeline[lang]}</th>
                  <th className="px-6 py-3 text-xs uppercase tracking-wider">{headers.ben[lang]}</th>
                  <th className="px-6 py-3 text-xs uppercase tracking-wider">{headers.status[lang]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {projects.map((proj) => (
                  <tr key={proj.code} className="hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4 font-mono text-xs text-slate-500 font-medium">{proj.code}</td>
                    <td className="px-6 py-4 font-medium text-slate-200">
                        {proj.name[lang]}
                        <p className="text-xs text-slate-500 mt-1">{proj.description[lang]}</p>
                    </td>
                    <td className="px-6 py-4 text-slate-400 font-mono text-xs">{proj.budget > 0 ? `$${proj.budget.toLocaleString()}` : 'TBD'}</td>
                    <td className="px-6 py-4 text-slate-400">{proj.timeline[lang]}</td>
                    <td className="px-6 py-4 text-slate-400 max-w-[200px] truncate" title={proj.beneficiaries[lang]}>
                        {proj.beneficiaries[lang]}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={proj.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioView;