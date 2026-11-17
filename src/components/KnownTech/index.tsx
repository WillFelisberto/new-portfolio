import CMSIcon from '../CmsIcon';

export type KnownTechProps = {
  tech: {
    icon: string;
    name: string;
  };
};

const KnownTech = ({ tech }: KnownTechProps) => {
  return (
    <div className="card-tactile card-tactile-interactive group flex flex-col gap-2 p-5 text-muted hover:text-lime">
      <div className="flex items-center justify-between">
        <p className="label-mono text-ink group-hover:text-lime">{tech.name}</p>
        <CMSIcon icon={tech.icon} name={tech.name} />
      </div>
    </div>
  );
};

export default KnownTech;
