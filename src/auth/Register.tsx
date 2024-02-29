import { FormEvent, useState } from "react";
import axiosInstance from "../utils/axios";
import { AxiosError } from "axios";
import Alert from "../components/Alert";
import alertStore from "../stores/AlertStore";

export default function Register() {

    const [alert, setAlert] = useState<Alert | undefined>(undefined);
    const { setAlert: setAlertState } = alertStore();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {

        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        try {
            const { data } = await axiosInstance.post('/register', formData);
            
            setAlertState(setAlert, {msg: data.msg, success: true});
        } catch (error) {
            if (error instanceof AxiosError) {

                const { message, msg } = error.response?.data;

                setAlertState(setAlert, { msg: msg ?? message, success: false });
            }
        }

    }

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="w-[40%] space-y-3 font-medium text-gray-800 bg-white rounded-md p-5">
                <div className="space-y-2">
                    <label htmlFor="name">Name</label>
                    <input className="block w-full py-2 px-3 rounded-md border-[1px]" name="name" id="name" type="text" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <input className="block w-full py-2 px-3 rounded-md border-[1px]" name="email" id="email" type="email" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="password">Password</label>
                    <input className="block w-full py-2 px-3 rounded-md border-[1px]" name="password" id="password" type="password" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="password_confirm">Confirm Password</label>
                    <input className="block w-full py-2 px-3 rounded-md border-[1px]" name="password_confirm" id="password_confirm" type="password" />
                </div>
                <button className="py-2 px-3 font-semibold text-white bg-slate-900 rounded-md w-full">Register</button>
                {
                    alert ?
                        (<Alert msg={alert.msg} success={alert.success}></Alert>)
                    : null
                }
            </form>
        </div>
    )

}