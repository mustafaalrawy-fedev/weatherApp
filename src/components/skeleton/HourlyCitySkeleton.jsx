import { HiSparkles } from 'react-icons/hi';

const mainStyle =
  'bg-textColor-secondary/10 dark:bg-textColor/50 rounded-lg animate-pulse w-[100px] h-20 main-transition';

const HourlyCitySkeleton = () => {
  return (
    <section className='section-space'>
      <h2 className='text-lg font-bold tracking-widest flex items-center gap-2'>
        <HiSparkles className='size-6' />
        <span>Hourly | 24</span>
      </h2>
      <article className='flex gap-4 overflow-x-auto py-4'>
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className={`${mainStyle} flex flex-col items-center justify-center gap-1 min-w-[100px] p-4`}
          />
        ))}
      </article>
    </section>
  );
};

export default HourlyCitySkeleton;
