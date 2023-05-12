import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

import { useState, useEffect } from 'react'

const Header = () => {

    const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	const currentTheme = theme === "system" ? systemTheme : theme;

  
  return (
     <div className="flex items-center justify-between p-6 min-[560px]:px-16 md:px-40 md:p-8">
      <h1 className="text-xl font-bold min-[560px]:text-3xl md:text-2xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-teal-500 to-90% text-transparent inline-block bg-clip-text">MY TODO</h1>
      <div className="flex items-center space-x-2">
        
        {currentTheme === "dark" ? (
				<SunIcon
					className="h-4 w-4 cursor-pointer text-yellow-500"
					onClick={() => setTheme("light")}
				/>
			) : (
				<MoonIcon
					className="h-4 w-4 cursor-pointer text-slate-600"
					onClick={() => setTheme("dark")}
				/>
			)}  
      </div>
    </div>
  )
}

export default Header