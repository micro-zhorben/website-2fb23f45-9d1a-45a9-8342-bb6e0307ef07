import { SillyBanner } from "@/components/silly-banner";
import { SillyCard } from "@/components/silly-card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, PartyPopper, Ghost } from "lucide-react";

export function Home() {
  const [isSpinning, setIsSpinning] = useState(false);

  const cards = [
    {
      title: "Глупая карточка",
      content: "Эта карточка такая глупая, что даже не знает, что она карточка!",
      buttonText: "Пощекотать"
    },
    {
      title: "Ещё глупее",
      content: "Эта карточка думает, что она пингвин. Не разубеждайте её!",
      buttonText: "Покормить рыбкой"
    },
    {
      title: "Самая глупая",
      content: "Эта карточка пытается выучить квантовую физику... безуспешно.",
      buttonText: "Подбодрить"
    }
  ];

  return (
    <div className="container space-y-8 py-6">
      <SillyBanner />
      
      <motion.div
        animate={isSpinning ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <Typography.H1 className="flex items-center justify-center gap-4">
          <PartyPopper className="size-12 text-primary" />
          Добро пожаловать в царство глупости!
          <Ghost className="size-12 text-primary" />
        </Typography.H1>
      </motion.div>

      <div className="text-center">
        <Typography.Lead>
          Этот сайт создан исключительно для того, чтобы заставить вас улыбнуться.
          Никакого смысла, только веселье!
        </Typography.Lead>
        
        <Button
          variant="outline"
          size="lg"
          className="mt-4 text-foreground"
          onClick={() => setIsSpinning(true)}
          onAnimationEnd={() => setIsSpinning(false)}
        >
          <Sparkles className="mr-2 size-5" />
          Нажми меня!
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <SillyCard {...card} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}