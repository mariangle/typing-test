import Link from 'next/link';
import Button from "../Button";
import Image from "next/image";

import { useSession, signOut } from "next-auth/react";
import { useState } from 'react';
import { DEFAULT_PFP_URL } from '@/app/constants/constants';

import { HiOutlineLogout } from "react-icons/hi"
import { toast } from 'react-hot-toast';
import { usePathname } from 'next/navigation';

const AuthNav = () => {
    const { data: session, status } = useSession();
    const [ showDropdown, setShowDropdown ] = useState<boolean>(false);
    const pathname = usePathname();

    const handleSignOut = async () => {
      await signOut();
      toast.success("You've been logged out!");
    }

    return (
      <div className='relative text-sm'>
        {status === "unauthenticated" && (
          <Link href="/login" className={`nav_link ${pathname.includes("login") ? "active" : ""}`}>
            <Button>Sign In</Button>
          </Link>
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
                <div className='dropdown_opt'>
                  <Button onClick={handleSignOut}>
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

export default AuthNav;