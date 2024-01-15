"use client"; // Server components cant handle server events, so to handle the button click we change it to a client component
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

interface User {
    id: number,
    name: string,
    email: string
}

const NewUserPage = async () => {

    const router = useRouter();

    return (

        <>
            <button className='btn btn-primary' onClick={() => {router.push("/users")}}> Create </button>
        </>
    )
}

export default NewUserPage