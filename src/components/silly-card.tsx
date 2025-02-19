import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Sparkles } from "lucide-react";

interface SillyCardProps {
  title: string;
  content: string;
  buttonText: string;
}

export function SillyCard({ title, content, buttonText }: SillyCardProps) {
  const [isWobbling, setIsWobbling] = useState(false);

  const handleClick = () => {
    setIsWobbling(true);
    setTimeout(() => setIsWobbling(false), 1000);
  };

  return (
    <motion.div
      animate={isWobbling ? {
        rotate: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.5 }
      } : {}}
    >
      <Card className="w-[300px] overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-5 text-primary" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Typography.P>{content}</Typography.P>
        </CardContent>
        <CardFooter>
          <Button 
            variant="outline"
            className="w-full text-foreground"
            onClick={handleClick}
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}