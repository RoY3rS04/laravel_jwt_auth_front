import { SetStateAction } from "react";
import { create } from "zustand";
import React from 'react';

export type SetCall<T> = React.Dispatch<SetStateAction<T | undefined>>;


export interface AlertStore {
    setAlert: (setCall: SetCall<Alert>, alert: Alert) => void
}

const alertStore = create<AlertStore>()(() => ({
    setAlert: (setCall, alert) => {
        
        setCall(alert);

        setTimeout(() => {
            setCall(undefined);
        }, 2500);
    }
}))

export default alertStore;