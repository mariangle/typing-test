"use client"

import AuthSocialButton from "./AuthSocialButton";

import { useEffect } from "react"
import { BsGithub, BsGoogle } from "react-icons/bs"
import { toast } from "react-hot-toast"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const AuthForm = () => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session?.status === "authenticated"){
            router.push("/")
        }
    }, [session?.status])

    const socialAction = (action: string) => {
        signIn(action, { redirect: false })
        .then((callback) => {
            if (callback?.error) {
                toast.error("Invalid credentials")
            }

            if (callback?.ok && !callback?.error){
                toast.success("Logged in!")
            }
        })
    }
    
  return (
    <div className="mt-8 mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300">
                        </div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">
                            Continue with
                        </span>
                    </div>
                </div>
                <div className="mt-6 flex gap-2">
                    <AuthSocialButton 
                        icon={BsGithub}
                        onClick={() => socialAction("github")}
                    />
                    <AuthSocialButton 
                        icon={BsGoogle}
                        onClick={() => socialAction("google")}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthForm