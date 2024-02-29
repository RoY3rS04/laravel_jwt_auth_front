import { FormEvent, useState } from "react";
import userStore from "../stores/UserStore";
import Alert from "./Alert";

export default function ChangePassword() {
    
    const { changePassword } = userStore();
    const [alert, setAlert] = useState<Alert | undefined>(undefined);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {

        e.preventDefault();

        const data = new FormData(e.target as HTMLFormElement);

        changePassword(data, setAlert);

    }

    return (
        <div className="bg-white rounded-md p-5 w-[80%] space-y-5 shadow-xl">
            <div className="space-y-2">
                <h3 className="text-lg font-medium">Change your actual password</h3>
                <p className="text-sm">Change the actual password and ensure it is secure</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                    <label htmlFor="password_1">Your Password</label>
                    <input className="block w-full py-2 px-3 rounded-md border-[1px]" id="password_1" name="password" type="password" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="password_new">New Password</label>
                    <input className="block w-full py-2 px-3 rounded-md border-[1px]" id="password_new" name="password_new" type="password" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="password_confirm">Confirm Password</label>
                    <input className="block w-full py-2 px-3 rounded-md border-[1px]" id="password_confirm" name="password_confirm" type="password" />
                </div>
                <button className="py-3 px-2 rounded-md bg-slate-900 text-sm text-white font-medium">
                    Change Password
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