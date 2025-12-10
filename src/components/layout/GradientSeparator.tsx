import { cn } from "@/lib/utils";

type GradientSeparatorProps = {
  className?: string;
};

export function GradientSeparator({ className }: GradientSeparatorProps) {
  return (
    <div
      className={cn(
        "h-px w-full bg-gradient-to-r from-card via-primary/50 to-card",
        className
      )}
    />
  );
}
