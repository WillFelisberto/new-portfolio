'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GoogleAnalytics } from './google-analytics';
import NavItem from './nav-item';

type NavItemType = {
  label: string;
  href: string;
};

export type HeaderProps = {
  navItems?: NavItemType[];
};

const NAV_ITEMS: NavItemType[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
];

const Header = ({ navItems = NAV_ITEMS }: HeaderProps) => {
  return (
    <>
      <GoogleAnalytics />
      <motion.header
        className="absolute top-0 z-10 flex h-24 w-full items-center justify-center"
        initial={{ top: -100 }}
        animate={{ top: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <Image width={58} height={49} src="/images/logo.svg" alt="Logo" />
          </Link>
          <nav className="flex items-center gap-4 sm:gap-10">
            {navItems.map((item: NavItemType) => (
              <NavItem {...item} key={item.label} />
            ))}
          </nav>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
