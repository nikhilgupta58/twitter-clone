import React from "react";

export const TweetsContext = React.createContext(null);

export const useTweetsContext = () => {
    const context = React.useContext(TweetsContext);

    if (!context) {
        throw new Error("useTweets must only be used within its Provider");
    }

    return context;
};
