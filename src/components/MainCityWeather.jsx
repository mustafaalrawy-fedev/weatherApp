import { useSelector } from 'react-redux';
import { weatherCodeDescriptions as weatherCodeDesc } from '../data/weatherCode';
import { FaWind } from 'react-icons/fa';
import MainCitySkeleton from './skeleton/MainCitySkeleton';
import { motion } from 'motion/react';

const MainCityWeather = () => {
  const { weatherData, loading } = useSelector((state) => state.weather);
  const { cityData } = useSelector((state) => state.geographic);

  const { current_weather_units, current_weather } = weatherData;

  const colsStyle = 'flex flex-col gap-6';
  return loading ? (
    <MainCitySkeleton />
  ) : (
    <section className='section-space'>
      {/* current weather */}
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='card-color flex justify-between gap-5 p-5 main-transition'
      >
        <div className={colsStyle}>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.2, 0.6, 0.2, 1] }}
            className='text-3xl md:text-6xl font-black'
          >
            {current_weather?.temperature} {current_weather_units?.temperature}{' '}
          </motion.p>
          <p className='flex items-center gap-1'>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: 'easeInOut' }}
              className='text-6xl md:text-8xl'
            >
              {weatherCodeDesc[current_weather?.weathercode]?.icon}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7, ease: 'easeInOut' }}
              className='text-xs md:text-sm font-bold text-textColor-secondary/50 dark:text-textColor/50 tracking-wider main-transition'
            >
              {weatherCodeDesc[current_weather?.weathercode]?.description}
            </motion.span>
          </p>
        </div>
        <main className={`${colsStyle} text-right`}>
          <div>
            {/* Country Name */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5, ease: 'easeInOut' }}
              className='mb-3 text-xs md:text-sm font-bold text-textColor-secondary/80 dark:text-textColor/80 tracking-widest main-transition'
            >
              {cityData?.country}
            </motion.p>
            {/* City Name */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5, ease: 'easeInOut' }}
              className='text-lg md:text-4xl capitalize tracking-wider'
            >
              {cityData?.cityName}
            </motion.h1>
            {/* Time */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7, ease: 'easeInOut' }}
              className='text-sm text-textColor-secondary/50 dark:text-textColor/50 tracking-wider main-transition'
            >
              {new Date(current_weather?.time).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
            </motion.div>
          </div>
          {/* Wind Speed */}
          <p className='flex items-center gap-2 h-full ml-auto'>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: 'easeInOut' }}
            >
              <FaWind className='size-5 md:size-8 text-sky-400' />
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.9, ease: 'easeInOut' }}
              className='text-xs md:text-sm font-bold text-textColor-secondary/50 dark:text-textColor/50 tracking-wider main-transition'
            >
              {current_weather?.windspeed} {current_weather_units?.windspeed}
            </motion.span>
          </p>
        </main>
      </motion.aside>
    </section>
  );
};

export default MainCityWeather;
