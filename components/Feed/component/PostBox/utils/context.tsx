import React from "react";

export const PostContext = React.createContext(null);

export const usePostContext = () => {
    const context = React.useContext(PostContext);

    if (!context) {
        throw new Error("usePost must only be used within its Provider");
    }

    return context;
};
