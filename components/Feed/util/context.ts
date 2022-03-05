import React from "react";

export const FeedContext = React.createContext(null);

export const useFeedContext = () => {
    const context = React.useContext(FeedContext);

    if (!context) {
        throw new Error("useFeed must only be used within its Provider");
    }

    return context;
};
