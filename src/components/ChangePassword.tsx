export default function ChangePassword() {

    return (
        <div className="bg-white rounded-md p-5 w-[80%] space-y-5 shadow-xl">
            <div className="space-y-2">
                <h3 className="text-lg font-medium">Change your actual password</h3>
                <p className="text-sm">Change the actual password and ensure it is secure</p>
            </div>
            <form className="space-y-5">
                <div className="space-y-2">
                    <label htmlFor="password_1">Your Password</label>
                    <input className="block w-full py-2 px-3 rounded-md border-[1px]" id="password_1" name="password" type="password_1" />
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
            </form>
        </div>
    )

}