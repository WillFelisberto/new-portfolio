import CMSIcon from '../CmsIcon';

export type KnownTechProps = {
  tech: {
    icon: string;
    name: string;
  };
};

const KnownTech = ({ tech }: KnownTechProps) => {
  return (
    <div className="card-tactile card-tactile-interactive group relative flex items-center justify-between p-4 transition-all hover:border-violet-electric sm:p-5">
      {/* Left: S.C.R.A.P.S. Test Point LED + Tech Name */}
      <div className="flex items-center gap-3">
        <span
          className="relative flex h-2 w-2 shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime/40 opacity-75 transition-opacity group-hover:bg-lime group-hover:opacity-100" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime/80 shadow-[0_0_6px_rgba(194,239,78,0.5)] transition-all group-hover:bg-lime group-hover:shadow-[0_0_8px_rgba(194,239,78,0.9)]" />
        </span>
        <p className="label-mono truncate text-xs font-medium text-ink transition-colors group-hover:text-lime sm:text-sm">
          {tech.name}
        </p>
      </div>

      {/* Right: Tactile Recessed Socket for Icon */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-line bg-well p-1.5 text-muted shadow-inner transition-colors group-hover:border-lime/40 group-hover:text-lime">
        <CMSIcon icon={tech.icon} name={tech.name} />
      </div>
    </div>
  );
};

export default KnownTech;
