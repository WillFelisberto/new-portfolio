import { ReactNode } from 'react';

type KnownTechProps = {
  tech: {
    icon: ReactNode;
    name: string;
  };
};

const KnownTech = ({ tech }: KnownTechProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-all hover:bg-gray-600/30 hover:text-sky-500">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>
    </div>
  );
};

export default KnownTech;
