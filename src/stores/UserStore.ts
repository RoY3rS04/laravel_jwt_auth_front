import { create } from "zustand";
import axiosInstance from "../utils/axios";
import { AxiosError } from "axios";

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
}

interface UserStore {
    user?: User,
    loading: boolean,
    getUser: () => Promise<void>,
    logOut: () => void,
    verifyEmail: (token: string) => void
}

const userStore = create<UserStore>()((set) => ({
    user: undefined,
    loading: true,
    getUser: async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            return set(() => ({ loading: false }));
        }

        try {
            const { data } = await axiosInstance.get<User>('/user');

            set(() => ({ user: data }));
        } catch (error) {
            set(() => ({ user: undefined }));
            //TODO alert
        }

        set(() => ({ loading: false }));
    },
    logOut: () => set(() => ({ user: undefined })),
    verifyEmail: async (token) => {

        try {
            await axiosInstance.patch(`/verify_email/`, [], {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            //TODO alert
        }

        set(() => ({ loading: false }));

    }
}));

export default userStore;