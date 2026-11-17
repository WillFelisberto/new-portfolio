'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type NavItemProps = {
  label: string;
  href: string;
};
const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={cn(
        'label-mono flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-muted transition-colors hover:text-ink',
        isActive && 'border-line bg-surface text-ink',
      )}
      aria-current={isActive ? 'page' : undefined}
      href={href}
    >
      <span className="text-lime">#</span>
      {label}
    </Link>
  );
};

export default NavItem;
