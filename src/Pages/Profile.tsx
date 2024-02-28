import { Link } from "react-router-dom";
import ChangePassword from "../components/ChangePassword";
import DeleteAccount from "../components/DeleteAccount";
import UpdateUserInfo from "../components/UpdateUserInfo";

export default function Profile() {

    return (
        <section className="bg-gray-100 min-h-full flex flex-col items-center py-3 space-y-10 relative">
            <Link className="sticky self-start top-3 left-3 bg-white p-3 rounded-full shadow-xl" to='/home'>
                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </Link>
            <UpdateUserInfo />
            <ChangePassword />
            <DeleteAccount/>
        </section>
    )

}