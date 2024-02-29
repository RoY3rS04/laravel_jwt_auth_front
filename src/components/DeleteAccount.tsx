import { FormEvent, useState } from "react";
import userStore from "../stores/UserStore";
import Alert from "./Alert";

export default function DeleteAccount() {

    const { deleteAccount } = userStore();
    const [alert, setAlert] = useState<Alert | undefined>(undefined);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {

        e.preventDefault();

        const data = new FormData(e.target as HTMLFormElement);

        deleteAccount(data, setAlert);

    }

    return (
        <div className="bg-white rounded-md p-5 w-[80%] space-y-5 shadow-xl">
            <div className="space-y-2">
                <h3 className="text-lg font-medium">Delete Your Account</h3>
                <p className="text-sm">By doing this action all your info will be lost, so be sure this is actually what you want to do</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                    <label htmlFor="password_2">Your Password</label>
                    <input className="block w-full py-2 px-3 rounded-md border-[1px]" id="password_2" name="password" type="password" />
                </div>
                <button className="py-3 px-2 rounded-md bg-red-600 text-sm text-white font-medium">
                    Delete Account
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