import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export function SectionHeader({ eyebrow, title, description, className }) {
  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow ? (
        <Badge
          variant="outline"
        >
          {eyebrow}
        </Badge>
      ) : null}
      {title ? (
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      ) : null}
      {description ? (
        <p className="max-w-2xl text-sm text-slate-300 md:text-base">{description}</p>
      ) : null}
    </div>
  );
}
