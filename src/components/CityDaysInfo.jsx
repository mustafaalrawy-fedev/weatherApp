import { useSelector } from 'react-redux';
import { weatherCodeDescriptions } from '../data/weatherCode';
import { HiSparkles } from 'react-icons/hi';
import CityDaysSkeleton from './skeleton/CityDaysSkeleton';
import { motion, AnimatePresence } from 'motion/react';

const CityDaysInfo = () => {
  const { loading, weatherData, temperatureUnit } = useSelector(
    (state) => state.weather
  );

  if (!weatherData) return null;

  const { hourly, current_weather } = weatherData;
  const time = hourly?.time;

  const next5days = new Set(time?.map((t) => t?.split('T')[0]));
  const currentDay = new Date(current_weather?.time).toLocaleDateString(
    'en-US',
    {
      weekday: 'long',
    }
  );

  const handleDaysData = (day) => {
    const dayName = new Date(day).toLocaleDateString('en-US', {
      weekday: 'long',
    });

    // average Temperature
    const dayAvgTemperature = hourly?.temperature_2m
      .filter((t, index) => {
        return time[index].split('T')[0] === day;
      })
      .reduce((acc, curr) => {
        return (
          acc +
          curr /
            hourly?.temperature_2m.filter((t, index) => {
              return time[index].split('T')[0] === day;
            }).length
        );
      }, 0);

    // Random Weather code
    const dayWeatherCode = hourly?.weathercode.filter((t, index) => {
      return time[index].split('T')[0] === day;
    })[0];

    return { dayName, dayAvgTemperature, dayWeatherCode };
  };

  return loading ? (
    <CityDaysSkeleton />
  ) : (
    <section className='section-space'>
      <h1 className='mb-5 text-lg tracking-widest font-bold flex items-center gap-2'>
        <HiSparkles className='size-6' />
        <span>Avg Temperature</span>
      </h1>
      <article className='grid grid-cols-1 lg:grid-cols-5 gap-3'>
        <AnimatePresence mode='popLayout'>
          {Array.from(next5days).map((day, index) => {
            const { dayName, dayAvgTemperature, dayWeatherCode } =
              handleDaysData(day);
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 * index,
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
                key={index}
                className='flex items-center justify-between gap-2 card-color p-4 main-transition'
              >
                <p className='text-md font-bold text-textColor-secondary/80 dark:text-textColor/80 main-transition'>
                  {currentDay === dayName ? 'Today' : dayName.slice(0, 3)}
                </p>
                <aside className='flex flex-col items-center justify-center gap-3'>
                  <div className='flex items-center gap-2'>
                    <span className='text-3xl'>
                      {weatherCodeDescriptions[dayWeatherCode]?.icon}
                    </span>
                    <p>
                      <span className='text-xl'>
                        {dayAvgTemperature.toFixed(0)}
                      </span>
                      <span className='ml-1'>
                        °{temperatureUnit === 'celsius' ? 'C' : 'F'}
                      </span>
                    </p>
                  </div>
                  <p className='text-sm font-bold text-textColor-secondary/30 dark:text-textColor/30 main-transition'>
                    {weatherCodeDescriptions[dayWeatherCode]?.description}
                  </p>
                </aside>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </article>
    </section>
  );
};

export default CityDaysInfo;
