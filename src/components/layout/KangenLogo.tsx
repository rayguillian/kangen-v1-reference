import { cn } from "@/lib/utils";

interface KangenLogoProps {
  className?: string;
}

export default function KangenLogo({ className }: KangenLogoProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center justify-center">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-md"></div>
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
            <div className="absolute h-3/4 w-3/4 rounded-full bg-white dark:bg-gray-900"></div>
            <div className="absolute top-1/2 left-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 opacity-50"></div>
            <span className="relative z-10 text-xs font-bold text-white dark:text-blue-100">K</span>
          </div>
        </div>
      </div>
    </div>
  );
}