import { create } from "zustand";
import axiosInstance from "../utils/axios";
import getFormData from '../utils/getFormData';

interface UserStore {
    user?: User,
    loading: boolean,
    getUser: () => Promise<void>,
    logOut: () => void,
    verifyEmail: (token: string) => void,
    updateUser: (body: FormData) => void
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
            const { data } = await axiosInstance.get<UserResponse>('/user');

            set(() => ({ user: data.user }));
        } catch (error) {
            set(() => ({ user: undefined }));
            //TODO alert
        }

        set(() => ({ loading: false }));
    },
    logOut: async () => {
        try {
            const { data } = await axiosInstance.post<ApiResponse>('/user');

            set(() => ({ user: undefined }));

            localStorage.removeItem('token');

            location.href = '/login';
        } catch (error) {
            //TODO alert
        }
    },
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

    },
    updateUser: async (body) => {

        try {
            const { data } = await axiosInstance.post<UserResponse>(`/user`, {
                ...getFormData(body),
                _method: 'PATCH'
            });

            console.log(data);
        } catch (error) {
            //TODO alert
        }
    }
}));

export default userStore;