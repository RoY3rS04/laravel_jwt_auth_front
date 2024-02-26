import { useEffect } from "react"
import userStore from "../stores/UserStore"
import { useParams } from "react-router-dom";

export default function VerifyEmail() {

    const { verifyEmail, loading } = userStore();
    const { token } = useParams();

    useEffect(() => {

        if (token) {
            verifyEmail(token);
        }

    }, [])

    return (
        <div>
            {
                loading ? (
                    <p>Loading...</p>
                )
                : (
                    <>
                        {/* Todo alert */}
                    </>
                )
            }
        </div>
    )

}