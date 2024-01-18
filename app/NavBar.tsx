"use client";

import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className='flex bg-slate-200 p-5'>
        <Link className='mr-5' href="/"> Nextjs </Link>
        <Link className='mr-5' href="/users"> Users </Link>
        { status == "loading" && <div> Loading...</div>}
        { status == "authenticated" && <div className='mr-5'> { session.user!.name } <Link className='ml-3' href="/api/auth/signout"> Sign out </Link> </div> }
        { status == "unauthenticated" && <Link className='' href="/api/auth/signin"> Login </Link> }
    </div>
  )
}

export default NavBar