import { cn } from '@/lib/utils';
import NextLink from 'next/link';
import { ComponentProps } from 'react';
type LinkProps = ComponentProps<typeof NextLink>;

const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        'label-mono flex items-center gap-2 text-muted transition-colors hover:text-lime',
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
