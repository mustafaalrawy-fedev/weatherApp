import { useDispatch, useSelector } from 'react-redux';
import { setTemperatureUnit } from '../store/slices/weatherSlice';
import { useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const ToggleBtn = () => {
  const { temperatureUnit } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const weatherUnit = useMemo(
    () => [
      { name: 'celsius', value: '°C' },
      { name: 'fahrenheit', value: '°F' },
    ],
    []
  );

  const handleTemperatureUnit = (unit) => {
    dispatch(setTemperatureUnit(unit));
  };

  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, duration: 0.8, ease: 'easeInOut' }}
      className='text-lg font-semibold card-color rounded-full w-20 h-10 main-transition'
    >
      <div className='flex justify-between items-center gap-2'>
        {weatherUnit.map((unit) => {
          const { name, value } = unit;
          const isActive = temperatureUnit === name;
          return (
            <button
              key={name}
              className={`${
                isActive
                  ? 'bg-textColor-secondary dark:bg-textColor text-textColor dark:text-textColor-secondary main-transition'
                  : ''
              } dark:text-textColor rounded-full w-10 h-10`}
              onClick={() => handleTemperatureUnit(name)}
            >
              {value}
            </button>
          );
        })}
      </div>
    </motion.aside>
  );
};

export default ToggleBtn;
