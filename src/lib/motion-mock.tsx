import { ReactNode } from 'react';

interface MotionProps {
  children: ReactNode;
  initial?: any;
  whileInView?: any;
  animate?: any;
  transition?: any;
  viewport?: any;
  className?: string;
}

export const motion = {
  div: ({ children, className, ...props }: MotionProps) => {
    return <div className={className}>{children}</div>;
  },
};