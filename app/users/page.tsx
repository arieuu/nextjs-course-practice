import Link from "next/link";
import { Suspense } from "react";


const UsersPage = () => {
    return (
        <>
        <div> Users page </div>
            <Link href="/users/new" className="btn"> Add user </Link>
        </>
    )
}

export default UsersPage;