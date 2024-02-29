import { FormEvent, useState } from "react";
import userStore from "../stores/UserStore"
import Alert from "./Alert";

export default function UpdateUserInfo() {

    const { user, updateUser } = userStore();
    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [alert, setAlert] = useState<Alert | undefined>(undefined);
    
    function handleSubmit(e: FormEvent<HTMLFormElement>) {

        e.preventDefault();

        const data = new FormData(e.target as HTMLFormElement);

        updateUser(data, setAlert);

    }

    return (
        <div className="bg-white rounded-md p-5 w-[80%] space-y-5 shadow-xl">
            <div className="space-y-2">
                <h3 className="text-lg font-medium">Your Info</h3>
                <p className="text-sm">Update your name and email address</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                    <label htmlFor="name">Name</label>
                    <input onChange={(e) => setName(e.target.value)} className="block w-full py-2 px-3 rounded-md border-[1px]" id="name" name="name" value={name} type="text"/>
                </div>
                <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className="block w-full py-2 px-3 rounded-md border-[1px]" id="email" name="email" value={email} type="email"/>
                </div>
                <div className="space-y-2">
                    <label htmlFor="password">Your Password</label>
                    <input className="block w-full py-2 px-3 rounded-md border-[1px]" id="password" name="password" type="password" />
                </div>
                <button className="py-3 px-2 rounded-md bg-slate-900 text-sm text-white font-medium">
                    Update Profile
                </button>
                {
                    alert ?
                        (<Alert msg={alert.msg} success={alert.success}></Alert>)
                    : null
                }
            </form>
        </div>
    )

}