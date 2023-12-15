"use client";
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

interface User {
    id: number,
    name: string,
    email: string
}

const NewUserPage = async () => {
    const router = useRouter();
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await res.json();

  return (

    <>
    <h1> Users </h1>
    <button className='btn btn-primary' onClick={() => router.push("/users")}> Submit </button>

    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>

        <tbody>
            { users.map((user) => <tr key={user.id}> 
                <td> {user.name} </td>
                <td> {user.email} </td> 
            </tr>)}
        </tbody>
    </table>

    </>
  )
}

export default NewUserPage