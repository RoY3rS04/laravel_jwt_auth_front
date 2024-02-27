import userStore from "../stores/UserStore"

export default function UpdateUserInfo() {

    const { user } = userStore();

    return (
        <form className="bg-white rounded-md p-3 w-[80%] space-y-5">
            <div className="space-y-2">
                <label htmlFor="name">Name</label>
                <input className="block w-full py-2 px-3 rounded-md border-[1px]" id="name" name="name" type="text"/>
            </div>
            <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <input className="block w-full py-2 px-3 rounded-md border-[1px]" id="email" name="email" type="email"/>
            </div>
            <div className="space-y-2">
                <label htmlFor="password">Your Password</label>
                <input className="block w-full py-2 px-3 rounded-md border-[1px]" id="password" name="password" type="password" />
            </div>
            <button className="py-3 px-2 rounded-md bg-slate-900 text-sm text-white font-medium">
                Update Profile
            </button>
        </form>
    )

}