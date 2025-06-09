import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import {
  //   FaFirstdraft,
  FaCloud,
  FaCloudRain,
  FaCloudShowersHeavy,
  FaCloudSun,
  FaCloudMoon,
  FaCloudSunRain,
  FaCloudMoonRain,
} from 'react-icons/fa';
import { motion } from 'motion/react';

const SplashScreen = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  //   const randomColors = [
  //     { color: 'after:bg-lime-500 before:bg-lime-500' },
  //     { color: 'after:bg-sky-500 before:bg-sky-500' },
  //     { color: 'after:bg-amber-500 before:bg-amber-500' },
  //     { color: 'after:bg-green-500 before:bg-green-500' },
  //     { color: 'after:bg-teal-500 before:bg-teal-500' },
  //     { color: 'after:bg-red-500 before:bg-red-500' },
  //     { color: 'after:bg-rose-500 before:bg-rose-500' },
  //   ];
  // const randomColor =
  //   randomColors[Math.floor(Math.random() * randomColors.length)];

  const iconMainStyle =
    'size-14 md:size-22 text-textColor-secondary dark:text-textColor';

  const randomIcons = [
    // { icon: <FaFirstdraft className={`${iconMainStyle}`} /> },
    { icon: <FaCloudSun className={`${iconMainStyle}`} /> },
    { icon: <FaCloudMoon className={`${iconMainStyle}`} /> },
    { icon: <FaCloudSunRain className={`${iconMainStyle}`} /> },
    { icon: <FaCloudMoonRain className={`${iconMainStyle}`} /> },
    { icon: <FaCloudRain className={`${iconMainStyle}`} /> },
    { icon: <FaCloudShowersHeavy className={`${iconMainStyle}`} /> },
    { icon: <FaCloud className={`${iconMainStyle}`} /> },
  ];

  const randomIcon =
    randomIcons[Math.floor(Math.random() * randomIcons.length)];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <article
          className={`w-screen h-screen flex flex-col justify-center items-center gap-3 bg-lightMain-bgColor dark:bg-main-bgColor `}
        >
          <main className='text-textColor-secondary dark:text-textColor text-xl md:text-3xl tracking-[8px] font-bold flex flex-col justify-center items-center gap-5'>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              {randomIcon.icon}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
              //   className={`relative after:content-[""] before:content-[""] after:absolute before:absolute after:right-0 before:left-0 after:bottom-0 before:top-0 after:w-24 before:w-24 after:h-1 before:h-1 ${randomColor.color}`}
            >
              WEATHER APP
            </motion.h1>
          </main>
          <div className='fixed bottom-50 left-1/2 -translate-1/2 w-full h-1 flex justify-center items-center mt-5'>
            <ProgressBar progress={'100'} />
          </div>
        </article>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default SplashScreen;
