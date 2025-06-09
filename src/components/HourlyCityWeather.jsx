import { useSelector } from 'react-redux';
import { weatherCodeDescriptions } from '../data/weatherCode';
import { HiSparkles } from 'react-icons/hi';
import HourlyCitySkeleton from './skeleton/HourlyCitySkeleton';
import { motion, AnimatePresence } from 'motion/react';
// import { getWeatherIcon } from '../utils/weatherIcons';

const HourlyCityWeather = () => {
  const { loading, weatherData, temperatureUnit } = useSelector(
    (state) => state.weather
  );

  if (!weatherData) return null;

  const { time, temperature_2m, weathercode } = weatherData?.hourly ?? '';
  // const { time, temperature_2m, weathercode } = hourly;

  // Get current hour to show next 24 hours
  const currentHour = new Date().getHours();
  const next24Hours = time?.slice(currentHour, currentHour + 24); // next 24 hours
  const next24HoursTemp = temperature_2m?.slice(currentHour, currentHour + 24); // next 24 hours temperature

  return loading ? (
    <HourlyCitySkeleton />
  ) : (
    <section className='section-space'>
      <h2 className='text-lg font-bold tracking-widest flex items-center gap-2'>
        <HiSparkles className='size-6' />
        <span>Hourly | 24 </span>
      </h2>
      <article className='flex gap-4 overflow-x-auto py-4 '>
        <AnimatePresence mode='popLayout'>
          {next24Hours?.map((hour, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.05 * index,
                duration: 0.4,
                ease: 'easeInOut',
              }}
              key={hour}
              className={`${
                index % 2 === 0
                  ? 'bg-textColor/50 dark:bg-card-bgColor/50 main-transition'
                  : 'bg-textColor dark:bg-transparent main-transition'
              }  flex flex-col items-center justify-center gap-1 min-w-[100px] rounded-lg p-4`}
            >
              <p className='text-sm'>
                {new Date(hour).toLocaleTimeString([], {
                  hour: '2-digit',
                  hour12: true,
                })}
              </p>
              <span className='text-3xl'>
                {weatherCodeDescriptions[weathercode[index]]?.icon}
              </span>
              <p className='text-sm font-semibold'>
                {Math.round(next24HoursTemp[index])}
                <span className='ml-1.5'>
                  °{temperatureUnit === 'celsius' ? 'C' : 'F'}
                </span>
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </article>
    </section>
  );
};

export default HourlyCityWeather;
