import CMSIcon from '../CmsIcon';

export type KnownTechProps = {
  tech: {
    icon: string;
    name: string;
  };
  index?: number;
};

type TechMeta = {
  code: string;
  category: string;
  appBadge: string;
  isCore?: boolean;
};

const TECH_CATALOG: Record<string, TechMeta> = {
  nextjs: {
    code: 'U01',
    category: 'CORE ARCH',
    appBadge: '7+ YRS • HIGH-SCALE APPS',
    isCore: true,
  },
  next: {
    code: 'U01',
    category: 'CORE ARCH',
    appBadge: '7+ YRS • HIGH-SCALE APPS',
    isCore: true,
  },
  typescript: {
    code: 'U02',
    category: 'LANGUAGE',
    appBadge: 'TYPE-SAFE ARCHITECTURE',
    isCore: true,
  },
  'edge ai': {
    code: 'U03',
    category: 'RESEARCH',
    appBadge: 'UFSC RESEARCH • ESP32-S3 INT8',
    isCore: true,
  },
  tinyml: {
    code: 'U03',
    category: 'RESEARCH',
    appBadge: 'UFSC RESEARCH • ESP32-S3 INT8',
    isCore: true,
  },
  'ai agents': {
    code: 'U04',
    category: 'AI SYSTEMS',
    appBadge: 'AUTONOMOUS AGENTS & MCP',
    isCore: true,
  },
  react: {
    code: 'U05',
    category: 'FRONTEND',
    appBadge: 'REACT 19 • COMPONENT LIBS',
    isCore: true,
  },
  'node.js': {
    code: 'U06',
    category: 'RUNTIME',
    appBadge: 'DISTRIBUTED SERVICES & APIS',
    isCore: true,
  },
  node: {
    code: 'U06',
    category: 'RUNTIME',
    appBadge: 'DISTRIBUTED SERVICES & APIS',
    isCore: true,
  },
  knockoutjs: {
    code: 'U07',
    category: 'ENTERPRISE',
    appBadge: 'ORACLE COMMERCE CLOUD (OCC)',
  },
  knockout: {
    code: 'U07',
    category: 'ENTERPRISE',
    appBadge: 'ORACLE COMMERCE CLOUD (OCC)',
  },
  postgresql: {
    code: 'U08',
    category: 'DATABASE',
    appBadge: 'RELATIONAL & DISTRIBUTED DATA',
  },
  postgres: {
    code: 'U08',
    category: 'DATABASE',
    appBadge: 'RELATIONAL & DISTRIBUTED DATA',
  },
  'progress 4gl': {
    code: 'U09',
    category: 'LEGACY ERP',
    appBadge: 'MISSION-CRITICAL SYSTEMS',
  },
  openedge: {
    code: 'U09',
    category: 'LEGACY ERP',
    appBadge: 'MISSION-CRITICAL SYSTEMS',
  },
  jest: {
    code: 'U10',
    category: 'TESTING',
    appBadge: 'TDD & SUITE AUTOMATION',
  },
  git: {
    code: 'U11',
    category: 'DEVOPS',
    appBadge: 'CI/CD & GIT FLOW AUTOMATION',
  },
};

function getTechMeta(name: string, index?: number): TechMeta {
  const lower = name.toLowerCase();
  const normalized = lower.replace(/[^a-z0-9]/g, '');

  for (const [key, meta] of Object.entries(TECH_CATALOG)) {
    if (
      lower.includes(key) ||
      normalized.includes(key.replace(/[^a-z0-9]/g, ''))
    ) {
      return meta;
    }
  }

  const codeNum =
    typeof index === 'number' ? String(index + 1).padStart(2, '0') : 'XX';
  return {
    code: `U${codeNum}`,
    category: 'MODULAR SYS',
    appBadge: 'PRODUCTION PROVEN',
  };
}

const KnownTech = ({ tech, index }: KnownTechProps) => {
  const meta = getTechMeta(tech.name, index);

  return (
    <div className="card-tactile card-tactile-interactive group relative flex flex-col justify-between gap-3 p-4 transition-all hover:border-violet-electric sm:p-5">
      {/* IC Chip Technical Header */}
      <div className="flex items-center justify-between border-b border-line/60 pb-2.5">
        <span className="label-mono text-[10px] tracking-widest text-dim transition-colors group-hover:text-muted">
          {`// ${meta.code} :: ${meta.category}`}
        </span>
        <div
          className="flex items-center gap-1.5"
          title={meta.isCore ? 'Core Specialization' : 'Active Tool'}
        >
          {meta.isCore ? (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
          ) : (
            <span className="h-1.5 w-1.5 rounded-full bg-line transition-colors group-hover:bg-violet-electric" />
          )}
        </div>
      </div>

      {/* Main IC Module Body: Icon Socket + Tech Name */}
      <div className="my-1 flex items-center gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line bg-well p-2 text-ink shadow-inner transition-colors group-hover:border-lime/50 group-hover:text-lime">
          <CMSIcon icon={tech.icon} name={tech.name} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="label-mono truncate font-display text-base font-bold text-ink transition-colors group-hover:text-lime sm:text-lg">
            {tech.name}
          </p>
        </div>
      </div>

      {/* IC Footer: Hardware / Application Micro-Badge */}
      <div className="mt-1 flex items-center justify-between rounded border border-line/40 bg-surface/80 px-2 py-1">
        <span className="label-mono truncate text-[10px] text-dim transition-colors group-hover:text-ink/80">
          {meta.appBadge}
        </span>
      </div>
    </div>
  );
};

export default KnownTech;
