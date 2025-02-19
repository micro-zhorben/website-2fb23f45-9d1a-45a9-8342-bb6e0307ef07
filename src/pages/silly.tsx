import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Music, Laugh, PartyPopper, Ghost } from "lucide-react";

export function Silly() {
  const [danceParty, setDanceParty] = useState(false);
  const controls = useAnimation();

  const startParty = async () => {
    setDanceParty(true);
    await controls.start({
      scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
      rotate: [0, 10, -10, 15, -15, 0],
      transition: { duration: 1 }
    });
    setDanceParty(false);
  };

  return (
    <div className="container space-y-8 py-6">
      <motion.div
        animate={controls}
        className="text-center"
      >
        <Typography.H1 className="flex items-center justify-center gap-4">
          <Music className="size-12 text-primary" />
          Страница глупостей
          <Laugh className="size-12 text-primary" />
        </Typography.H1>
      </motion.div>

      <div className="grid gap-8">
        <motion.div
          className="rounded-lg bg-card p-6 text-card-foreground"
          whileHover={{ scale: 1.02 }}
        >
          <Typography.H3 className="flex items-center gap-2">
            <PartyPopper className="size-6 text-primary" />
            Глупый факт дня
          </Typography.H3>
          <Typography.P>
            Если бы пингвины умели летать, они бы всё равно предпочитали ходить,
            потому что это выглядит забавнее!
          </Typography.P>
        </motion.div>

        <motion.div
          className="rounded-lg bg-card p-6 text-card-foreground"
          whileHover={{ scale: 1.02 }}
        >
          <Typography.H3 className="flex items-center gap-2">
            <Ghost className="size-6 text-primary" />
            Глупая шутка
          </Typography.H3>
          <Typography.P>
            Почему программисты не любят природу?
            Потому что там слишком много багов! 🐛
          </Typography.P>
        </motion.div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="text-foreground"
            onClick={startParty}
            disabled={danceParty}
          >
            <Music className="mr-2 size-5" />
            Устроить танцевальную вечеринку!
          </Button>
        </div>
      </div>
    </div>
  );
}