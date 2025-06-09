const MainCitySkeleton = () => {
  const mainStyle =
    'bg-textColor-secondary/10 dark:bg-textColor/50 rounded-lg animate-pulse main-transition';
  return (
    <section className='section-space'>
      <aside className='card-color flex justify-between gap-5 p-5'>
        <div className='flex flex-col gap-6'>
          <p className={`w-30 h-16 ${mainStyle}`} />
          <p className='flex items-center gap-6'>
            <span className={`${mainStyle} w-10 h-12`} />
            <span className={`${mainStyle} w-16 h-5`} />
          </p>
        </div>
        <main className={`flex flex-col gap-6`}>
          <div>
            <h1 className={`${mainStyle} w-28 h-8`} />
            {/* Time */}
            <span className={`${mainStyle} w-8 h-2`} />
          </div>
          {/* Wind Speed */}
          <p className='flex items-center gap-2 h-full ml-auto'>
            <span className={`${mainStyle} w-8 h-8`} />
            <span className={`${mainStyle} w-18 h-5`} />
          </p>
        </main>
      </aside>
    </section>
  );
};

export default MainCitySkeleton;
