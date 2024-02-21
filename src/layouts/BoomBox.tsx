import { BackgroundGradient } from "@/components/background-gradient";
import { playlistUrl } from "@/constants/links";
import DeezerEmbed from "@/deezer/DeezerEmbed";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/shadcn/components/ui/button";
import { HeadphonesIcon } from "lucide-react";

interface BoomBoxProps {}

const BoomBox: React.FC<BoomBoxProps> = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const player = (
    <BackgroundGradient className="rounded-3xl p-2 bg-white dark:bg-zinc-900">
      <DeezerEmbed
        deezerUrl={playlistUrl}
        autoplay={true}
        maxwidth={200}
        maxheight={200}
        radius={true}
        tracklist={false}
        handleClose={() => setIsExpanded(false)}
      />
    </BackgroundGradient>
  );

  return (
    <>
      <motion.div
        initial="hidden"
        animate={!isExpanded ? "visible" : "hidden"}
        variants={containerVariants}
        className={isExpanded ? "hidden" : "block"}
        onClick={() => setIsExpanded(true)}
      >
        <Button variant="link">
          <BackgroundGradient className="rounded-3xl p-3 bg-white dark:bg-zinc-900">
            <HeadphonesIcon className="h-12 w-12" />
          </BackgroundGradient>
        </Button>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isExpanded ? "visible" : "hidden"}
        variants={containerVariants}
        className={isExpanded ? "block" : "hidden"}
      >
        {player}
      </motion.div>
    </>
  );
};

export default BoomBox;
