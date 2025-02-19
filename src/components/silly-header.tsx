import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { Sparkles, PartyPopper, Ghost } from "lucide-react";

export function SillyHeader() {
  const [bounce, setBounce] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          to="/"
          className={`flex items-center gap-2 text-foreground transition-transform duration-300 ${bounce ? 'animate-bounce' : ''}`}
          onMouseEnter={() => setBounce(true)}
          onMouseLeave={() => setBounce(false)}
        >
          <PartyPopper className="size-6" />
          <Typography.H3>Глупый Сайт</Typography.H3>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link to="/silly" className="flex items-center gap-2 text-foreground">
            <Sparkles className="size-4" />
            <span>Глупости</span>
          </Link>
          <Link to="/more-silly" className="flex items-center gap-2 text-foreground">
            <Ghost className="size-4" />
            <span>Ещё глупее</span>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}