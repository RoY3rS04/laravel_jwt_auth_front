import { useEffect, useState } from "react"
import userStore from "../stores/UserStore"
import { useParams } from "react-router-dom";
import Alert from "../components/Alert";

export default function VerifyEmail() {

    const { verifyEmail, loading } = userStore();
    const { token } = useParams();
    const [alert, setAlert] = useState<Alert | undefined>(undefined);

    useEffect(() => {

        if (token) {
            verifyEmail(token, setAlert);
        }

    }, [])

    return (
        <div>
            {
                loading ? (
                    <p>Loading...</p>
                )
                : (
                    alert ? (
                            <Alert msg={alert.msg} success={alert.success} />
                    ) : null
                )
            }
        </div>
    )

}