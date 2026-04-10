import React from 'react';

interface Props {
  status: string;
}

const StatusBadge: React.FC<Props> = ({ status }) => {
  let colorClass = "bg-slate-800 text-slate-300 border border-slate-700";
  const s = status.toLowerCase();

  if (s.includes("active") || s.includes("current")) colorClass = "bg-emerald-900/30 text-emerald-400 border border-emerald-800";
  else if (s.includes("pending") || s.includes("decision") || s.includes("critical")) colorClass = "bg-red-900/30 text-red-400 animate-pulse border border-red-800";
  else if (s.includes("dev") || s.includes("platform") || s.includes("tech")) colorClass = "bg-amber-900/30 text-amber-400 border border-amber-800";
  else if (s.includes("funding")) colorClass = "bg-blue-900/30 text-blue-400 border border-blue-800";
  else if (s.includes("research") || s.includes("dialogue")) colorClass = "bg-purple-900/30 text-purple-400 border border-purple-800";

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${colorClass}`}>
      {status}
    </span>
  );
};

export default StatusBadge;