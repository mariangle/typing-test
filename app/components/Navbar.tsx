"use client" 
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
    const { data: session, status } = useSession();
    
    return (
        <div className="flex justify-between items-center">
            <div>Typing Test</div>
            { (status === "unauthenticated" || status === "loading") && (
              <Link href={"/login"}> 
               <Button>
                Login
               </Button>
              </Link>
            )}
            {/* UNATHENTICATED*/}
            { status === "unauthenticated" && (
                <>
                    <Link href={"/login"}>
                         <Button>
                            Sign In
                         </Button>
                    </Link>
                </>
            )
            }
            {/* AUTHENTICATED */}
            { status === "authenticated" && (
              <div className="flex items-center gap-2">
                <Image
                src={session?.user?.image || ''}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
                />
                <Button onClick={signOut}>
                    signOut
                </Button>
              </div>
            )}
        </div>
    )
} 

export default Navbar;