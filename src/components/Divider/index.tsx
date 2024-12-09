import { cn } from '@/lib/utils';

type DividerProps = {
  className?: string;
};
const Divider = ({ className }: DividerProps) => {
  return (
    <div className={cn('my-8 w-full border-b border-b-gray-800', className)} />
  );
};

export default Divider;
