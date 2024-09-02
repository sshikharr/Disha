// SectionHeader.tsx
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <h1 className="text-5xl font-TitilliumWeb font-bold tracking-wide text-purple-600">{title}</h1>
      <h1 className="text-5xl font-TitilliumWeb font-bold tracking-wide">{subtitle}</h1>
    </div>
  );
};

export default SectionHeader;