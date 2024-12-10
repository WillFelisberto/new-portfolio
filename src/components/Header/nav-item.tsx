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
        'flex items-center gap-2 font-mono font-medium text-gray-400',
        isActive && 'text-gray-50',
      )}
      href={href}
    >
      <span className="text-sky-400">#</span>
      {label}
    </Link>
  );
};

export default NavItem;
