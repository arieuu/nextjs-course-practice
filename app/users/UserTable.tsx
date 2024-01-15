import { User } from '@prisma/client';
import Link from 'next/link';
import React from 'react'

const UserTable = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await res.json();

    return (
        <>
            <h1> Users </h1>

            <Link href="users/new" className="btn"> Add user </Link>

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

export default UserTable