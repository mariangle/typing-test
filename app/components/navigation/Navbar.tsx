"use client"

import Link from "next/link";
import AuthNav from "./AuthNav";

import { HiOutlineSun, HiOutlineMoon,  } from "react-icons/hi"
import { MdLeaderboard } from "react-icons/md"
import { useDarkMode } from "../../hooks/useDark.mode";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="flex_between w-full max-w-screen-lg mx-auto px-4">
        <div className="flex_gap gap-3">
          <Logo />  
          <Version />
          <Banner />
        </div>
        <div className="flex gap-2 md:gap-4 items-center">
          <Leaderboard />
          <Divider />
          <ThemeIcon />
          <AuthNav />
        </div>
      </ul>
    </nav>
    )
  } 

const Logo = () => {
  return (
    <Link href={"/"} className="text-lg md:text-xl">
      <span className="bg-gradient-to-r from-sky-500 pl-1">typing</span>test 
    </Link>
  )
}

const Banner = () => {
  const { data: session } = useSession();
  return (
    <> 
    { !session && (
      <Link href={"/login"} className="hidden md:block">
        <span className="text-xs py-2 px-3 rounded-full secondary_bg hover:bg-sky-400/20 ">
          Sign in to see yourself on the leaderboard.
        </span>
      </Link>
    )}
    </>
  )
};

const ThemeIcon = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const handleToggleTheme = () => setTheme(colorTheme);
  return (
    <span onClick={handleToggleTheme} className="cursor-pointer text-sky-500 dark:text-sky-400">
      {colorTheme === "dark" ? (
        <HiOutlineSun size={22}/>
      ) : (
        <HiOutlineMoon size={20}/>
      )}
    </span>    
  );
};

const Leaderboard = () => {
  const pathname = usePathname();
  return (
    <Link className={`nav_link ${pathname.includes("leaderboard") ? "active" : ""}`} href={"/leaderboard"}>
      <span>Leaderboard</span>
      <MdLeaderboard className="hidden md:block"/>
    </Link>
  )
}

const Version = () => <span className="hidden md:block text-xs py-2 px-3 rounded-full bg-gray-100 text-gray-500 dark:bg-slate-800 dark:text-slate-400">v0.1</span>;
const Divider = () => <div className="h-[25px] w-[1px] border-l border-slate-200 dark:border-slate-700"/>;

export default Navbar;