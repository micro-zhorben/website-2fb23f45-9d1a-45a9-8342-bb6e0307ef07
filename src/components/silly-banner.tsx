import { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { PartyPopper, Laugh, Heart } from "lucide-react";

export function SillyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-card text-card-foreground"
    >
      <div className="container flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-4">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <PartyPopper className="size-8 text-primary" />
          </motion.div>
          <div className="space-y-1">
            <Typography.H4>
              Добро пожаловать на самый глупый сайт!
            </Typography.H4>
            <Typography.P>
              Здесь всё создано для веселья и хорошего настроения
            </Typography.P>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Laugh className="size-6 text-foreground" />
          <Heart className="size-6 text-foreground" />
          <Button 
            variant="ghost"
            className="text-foreground"
            onClick={() => setIsVisible(false)}
          >
            Закрыть
          </Button>
        </div>
      </div>
    </motion.div>
  );
}