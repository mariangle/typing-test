"use client"

import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";

import { DEFAULT_PFP_URL, NAV_LINKS } from '@/lib/constants';
import { HiOutlineSun, HiOutlineMoon, HiOutlineLogout } from "react-icons/hi"

import { useSession, signOut } from "next-auth/react";
import { useState } from 'react';
import { useDarkMode } from "@/hooks/useDarkmode";
import { usePathname } from "next/navigation";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex_between w-full max-w-screen-lg mx-auto px-4">
        <div className="flex_gap gap-3">
          <Logo />  
          <Version />
          <Banner />
        </div>
        <ul className="flex gap-2 md:gap-4 items-center">
          <NavLink linkIndex={1} />
          <Divider />
          <ThemeIcon />
          <AuthNav />
        </ul>
      </div>
    </nav>
  )
} 

const NavLink = ({ linkIndex }: { linkIndex: number }) => {
  const { href, text } = NAV_LINKS[linkIndex];
  const pathname = usePathname();

  return (
    <Link href={href} className={`nav_link ${pathname === href ? "active" : ""}`}>
      <span>{text}</span>
    </Link>
  );
};

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

const AuthNav = () => {
  const { data: session, status } = useSession();
  const [ showDropdown, setShowDropdown ] = useState<boolean>(false);

  return (
    <div className='relative text-sm'>
      {status === "unauthenticated" && (
        <NavLink linkIndex={2} />
      )}
      {status === "authenticated" && (
        <div className="flex items-center gap-2">
          <Image
            src={session?.user?.image || DEFAULT_PFP_URL}
            width={24}
            height={24}
            className="rounded-full cursor-pointer"
            alt="profile image"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          { showDropdown && (
            <nav className='dropdown'>
              <div className='p-2'>
                <div className='text-xs'>{session.user?.name}</div>
                <div className='text-xs desc'>{session.user?.email}</div>
              </div>
              <div className='dropdown_opt' onClick={() => signOut()}>
                <Button>
                  <HiOutlineLogout size={24}/>
                  <span>Sign Out</span>
                </Button>
              </div>
            </nav>
          )}
        </div>
      )}
    </div>
  )
}

const Version = () => <span className="hidden md:block text-xs py-2 px-3 rounded-full bg-gray-100 text-gray-500 dark:bg-slate-800 dark:text-slate-400">v0.1.1</span>;
const Divider = () => <div className="h-[25px] w-[1px] border-l border-slate-200 dark:border-slate-700"/>;

export default Navbar;