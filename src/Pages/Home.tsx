import { useState } from "react";
import userStore from "../stores/UserStore";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Alert from '../components/Alert';

export default function Home() {

    const { user, logOut } = userStore();
    const [menu, setMenu] = useState(false);
    const [alert, setAlert] = useState<Alert | undefined>(undefined);

    function handleMenu() {
        setMenu(prev => !prev);
    }

    return (
        <section className="p-3 h-full flex flex-col">
            <header className="flex justify-between py-3 px-4">
                <h1 className="text-lg font-medium">JWT AUTH</h1>
                <div className="flex gap-x-2 items-center relative">
                    <span>{user?.name}</span>
                    {!menu ? <button onClick={handleMenu}>
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                        </button> : <button onClick={handleMenu}>
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                        </button>
                    }
                    <div className={clsx(`absolute p-4 top-6 right-0 rounded-md bg-white shadow-xl`, {
                        'hidden': !menu
                    })}>
                        <ul className="space-y-2">
                            <li>
                                <Link to='/profile'>Profile</Link>
                            </li>
                            <li className="text-red-600">
                                <button onClick={() => logOut(setAlert)}>LogOut</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="w-full flex flex-1 items-center justify-center">
                <div className="space-y-5">
                    <h1 className="text-3xl font-bold">Welcome again {user?.name}!</h1>
                    {
                        alert ? (
                            <Alert msg={alert.msg} success={alert.success} />
                        ) : null
                    }
                </div>
            </div>
        </section>
    )

}