import { Typography } from "@/components/ui/typography";
import { Heart, Coffee, Star } from "lucide-react";

export function SillyFooter() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Typography.H4 className="flex items-center gap-2">
            Сделано с
            <Heart className="size-5 text-destructive" />
            и
            <Coffee className="size-5 text-primary" />
          </Typography.H4>
          <Typography.P>
            Самый глупый сайт в мире, но мы им гордимся!
          </Typography.P>
          <div className="flex items-center gap-2">
            <Star className="size-4 text-secondary" />
            <Star className="size-4 text-secondary" />
            <Star className="size-4 text-secondary" />
          </div>
        </div>
      </div>
    </footer>
  );
}