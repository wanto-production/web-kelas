'use client';

import { motion, useAnimation, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';
import TrueFocus from '@/components/react-bits/TrueFocus';

interface Activity {
  year: string;
  title: string;
  location: string;
  description: string;
}

export const ActivitiesTimeline = () => {
  const activities: Activity[] = [
    {
      year: "2025",
      title: "demos",
      location: "smpn 3 cikarang utara",
      description: "demo eskul, jadi buzzer jir😹",
    },
    {
      year: "2025",
      title: "jalan jalan ke gedung juang",
      location: "Jalan Sultan Hasanudin No.39, Tambun Selatan, Kabupaten Bekasi",
      description: "seru coy walau gosong😹",
    },
    {
      year: "2025",
      title: "classmeet",
      location: "smpn 3 cikarang utara",
      description: "gw nggak ngapa ngapain sih😹",
    },
    {
      year: "2025",
      title: "mukbang gacoan",
      location: "kelas 8.10",
      description: "pada mukbang jir, gw mah diet😹",
    },
  ];

  return (
    <div className="space-y-12">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-3 text-center px-4"
      >
        <TrueFocus
          sentence="Our adventures"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Kenangan yang gak bakal terulang — tapi selalu bisa dikenang
        </p>
      </motion.div>

      {/* Timeline Content */}
      <div className="space-y-8 sm:space-y-10 max-w-4xl mx-auto px-4 sm:px-6">
        {activities.map((item, index) => (
          <ActivityItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

// Komponen Item dengan animasi scroll
const ActivityItem = ({ item, index }: { item: Activity; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.2,
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
      className="flex flex-col sm:flex-row gap-6 sm:gap-8 group"
    >
      {/* Year Circle — responsive size */}
      <div className="flex flex-row sm:flex-col items-center justify-center sm:items-start gap-4 sm:gap-0 flex-shrink-0">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
          {item.year}
        </div>
        {/* Connector Line — hide on mobile, show on sm+ */}
        {index < 4 && (
          <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-gray-400 to-transparent dark:from-gray-600"></div>
        )}
      </div>

      {/* Activity Card */}
      <div className="flex-1 pb-8 sm:pb-0">
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-gray-300/50 dark:border-gray-700/50 group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-all duration-300 hover:shadow-lg">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">
            {item.title}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 text-sm sm:text-base">
            📍 {item.location}
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
