import React from "react";

export const ProfileBox = React.createContext(null);

export const useProfileContext = () => {
    const context = React.useContext(ProfileBox);

    if (!context) {
        throw new Error("useProfile must only be used within its Provider");
    }

    return context;
};
