export default function DeleteAccount() {

    return (
        <form className="bg-white rounded-md p-3 w-[80%] space-y-5">
            <div className="space-y-2">
                <label htmlFor="password_2">Your Password</label>
                <input className="block w-full py-2 px-3 rounded-md border-[1px]" id="password_2" name="password" type="password" />
            </div>
            <button className="py-3 px-2 rounded-md bg-red-600 text-sm text-white font-medium">
                Delete Account
            </button>
        </form>
    )

}