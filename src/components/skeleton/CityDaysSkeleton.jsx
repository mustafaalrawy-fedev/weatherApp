import { HiSparkles } from 'react-icons/hi';

const CityDaysSkeleton = () => {
  const mainStyle =
    'bg-textColor-secondary/10 dark:bg-textColor/50 rounded-lg animate-pulse main-transition';
  return (
    <section className='section-space'>
      <h1 className='mb-5 text-xl font-bold flex items-center gap-2'>
        <HiSparkles className='size-6' />
        <span>Avg Temperature</span>
      </h1>
      <article className='grid grid-cols-1 lg:grid-cols-5 gap-3'>
        {Array.from({ length: 5 }).map((_, index) => {
          return <div key={index} className={`${mainStyle} h-28`} />;
        })}
      </article>
    </section>
  );
};

export default CityDaysSkeleton;
