"use client"

import { signOut } from "next-auth/react";

const Users = () => {
  return (
    <button onClick={() => signOut()} className="border bg-red-600">logout</button>
  )
}

export default Users;