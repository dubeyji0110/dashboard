import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

export const AvatarPlaceholder = (props: { className?: string }) => {
  return <Skeleton className={cn("w-5 h-5 rounded-full", props.className)} />;
};
