import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Zap, Star, PartyPopper } from "lucide-react";

export function MoreSilly() {
  const [bouncing, setBouncing] = useState<number | null>(null);
  const [confetti, setConfetti] = useState(false);

  const handleBounce = (index: number) => {
    setBouncing(index);
    setTimeout(() => setBouncing(null), 1000);
  };

  const sillyThoughts = [
    "Если бы компьютеры могли чихать, антивирус был бы просто цифровым носовым платком 🤧",
    "Почему WiFi не может передавать запахи пиццы? Это было бы революционно! 🍕",
    "Что если облака - это просто небесный хлопок? ☁️",
    "Может быть, радуга - это просто улыбка неба? 🌈"
  ];

  return (
    <div className="container space-y-8 py-6">
      <motion.div
        animate={confetti ? {
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        } : {}}
        className="text-center"
      >
        <Typography.H1 className="flex items-center justify-center gap-4">
          <Zap className="size-12 text-primary" />
          Ещё больше глупостей!
          <Star className="size-12 text-primary" />
        </Typography.H1>
      </motion.div>

      <div className="grid gap-6">
        {sillyThoughts.map((thought, index) => (
          <motion.div
            key={index}
            className="rounded-lg bg-card p-6 text-card-foreground"
            animate={bouncing === index ? {
              y: [0, -20, 0],
              transition: { duration: 0.5 }
            } : {}}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start justify-between gap-4">
              <Typography.P>{thought}</Typography.P>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground"
                onClick={() => handleBounce(index)}
              >
                <Sparkles className="size-5" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button
          variant="outline"
          size="lg"
          className="text-foreground"
          onClick={() => setConfetti(true)}
          onAnimationEnd={() => setConfetti(false)}
        >
          <PartyPopper className="mr-2 size-5" />
          Взорвать конфетти!
        </Button>
      </div>
    </div>
  );
}