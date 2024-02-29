import { create } from "zustand";
import axiosInstance from "../utils/axios";
import getFormData from '../utils/getFormData';
import { AxiosError } from "axios";
import alertStore from './AlertStore';
import { SetCall } from "./AlertStore";

interface UserStore {
    user?: User,
    loading: boolean,
    getUser: () => Promise<void>,
    logOut: (alertCall: SetCall<Alert>) => void,
    verifyEmail: (token: string, alertCall: SetCall<Alert>) => void,
    updateUser: (body: FormData, alertCall: SetCall<Alert>) => void,
    changePassword: (body: FormData, alertCall: SetCall<Alert>) => void,
    deleteAccount: (body: FormData, alertCall: SetCall<Alert>) => void
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
        }

        set(() => ({ loading: false }));
    },
    logOut: async (alertCall) => {
        try {
            const { data } = await axiosInstance.post<ApiResponse>('/user');

            alertStore.getState().setAlert(
                alertCall, { msg: data.msg , success: true }
            );

            set(() => ({ user: undefined }));

            localStorage.removeItem('token');

            location.href = '/login';
        } catch (error) {
            if (error instanceof AxiosError) {

                const { message, msg } = error.response?.data;

                alertStore.getState().setAlert(
                    alertCall, { msg: msg ?? message, success: false }
                );
            }
        }
    },
    verifyEmail: async (token, alertCall) => {

        try {
            const { data } = await axiosInstance.patch(`/verify_email/`, [], {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alertStore.getState().setAlert(
                alertCall, { msg: data.msg , success: true }
            );
        } catch (error) {
            if (error instanceof AxiosError) {

                const { message, msg } = error.response?.data;

                alertStore.getState().setAlert(
                    alertCall, { msg: msg ?? message, success: false }
                );
            }
        }

        set(() => ({ loading: false }));

    },
    updateUser: async (body, alertCall) => {

        try {
            const { data } = await axiosInstance.post<UserResponse>(`/user`, {
                ...getFormData(body),
                _method: 'PATCH'
            });

            set(() => ({ user: data.user }));

            alertStore.getState().setAlert(
                alertCall, { msg: data.msg , success: true }
            );
        } catch (error) {
            if (error instanceof AxiosError) {

                const { message, msg } = error.response?.data;

                alertStore.getState().setAlert(
                    alertCall, { msg: msg ?? message, success: false }
                );
            }
        }
    },
    changePassword: async (body, alertCall) => {

        try {
            const { data } = await axiosInstance.post<ApiResponse>(`/user/change-password`, {
                ...getFormData(body),
                _method: 'PATCH'
            });

            alertStore.getState().setAlert(
                alertCall, { msg: data.msg , success: true }
            );
        } catch (error) {
            if (error instanceof AxiosError) {

                const { message, msg } = error.response?.data;

                alertStore.getState().setAlert(
                    alertCall, { msg: msg ?? message , success: false }
                );
            }
        }

    },
    deleteAccount: async (body, alertCall) => {
        try {
            const { data } = await axiosInstance.post<ApiResponse>(`/user`, {
                ...getFormData(body),
                _method: 'DELETE'
            });

            alertStore.getState().setAlert(
                alertCall, { msg: data.msg , success: true }
            );

            set(() => ({ user: undefined }));
        } catch (error) {
            if (error instanceof AxiosError) {

                const { message, msg } = error.response?.data;

                alertStore.getState().setAlert(
                    alertCall, { msg: msg ?? message , success: false }
                );
            }
        }
    }
}));

export default userStore;