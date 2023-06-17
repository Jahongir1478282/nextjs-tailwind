import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

function Index() {
  const { theme, setTheme, systemTheme } = useTheme();
  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  useEffect(() => {
    const handleInitialTheme = async () => {
      const currentTheme = await localStorage.getItem('theme');
      if (currentTheme) {
        setTheme(currentTheme);
      }
    };
    handleInitialTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="border border-1 container mx-auto ">
        <div
          onClick={toggleDarkMode}
          className="  flex justify-end py-2 "
        >
          {theme === 'dark' ? (
            <BsFillSunFill className=" text-orange-400 w-8 h-8 border border-1 border-orange-500 rounded-lg p-1" />
          ) : (
            <BsMoonStarsFill className=" text-[#1F2937] w-8 h-8 border border-1 border-gray-500 rounded-lg p-1" />
          )}
        </div>
      </div>
      <div className=" flex col-end-auto"></div>
      <div className="bg-white dark:bg-gray-800 ">
        This component has a white background in light mode and
        gray-800 background in dark mode.
      </div>
    </div>
  );
}

export default Index;
