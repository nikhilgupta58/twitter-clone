import React from "react";

export const IndivisualTweetContext = React.createContext(null);

export const useIndivisualTweetContext = () => {
    const context = React.useContext(IndivisualTweetContext);

    if (!context) {
        throw new Error("useIndivisualTweet must only be used within its Provider");
    }

    return context;
};
