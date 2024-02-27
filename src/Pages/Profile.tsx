import ChangePassword from "../components/ChangePassword";
import DeleteAccount from "../components/DeleteAccount";
import UpdateUserInfo from "../components/UpdateUserInfo";

export default function Profile() {

    return (
        <section className="bg-gray-100 h-full flex flex-col items-center py-3 space-y-10">
            <UpdateUserInfo />
            <ChangePassword />
            <DeleteAccount/>
        </section>
    )

}