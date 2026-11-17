import { cn } from '@/lib/utils';

type DividerProps = {
  className?: string;
};
const Divider = ({ className }: DividerProps) => {
  return (
    <div
      className={cn(
        'my-8 w-full border-b border-dashed border-b-line',
        className,
      )}
    />
  );
};

export default Divider;
