import { useEffect } from "react"
import userStore from "../stores/UserStore"
import { Navigate, Outlet } from "react-router-dom";

export default function Protected() {

    const { getUser, user, loading } = userStore();

    useEffect(() => {

        getUser();

    }, []);

    if (loading) {
        return 'Loading...';
    }

    return (
        <>
            {
                user?.id ? 
                    (
                        <main className="w-screen h-screen">
                            <Outlet></Outlet>
                        </main >
                    )
                : <Navigate to={'/login'}/>
            }
        </>
    )

}