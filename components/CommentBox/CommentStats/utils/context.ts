import React from "react";

export const CommentStatsContext = React.createContext(null);

export const useCommentStatsContext = () => {
    const context = React.useContext(CommentStatsContext);

    if (!context) {
        throw new Error("useCommentStats must only be used within its Provider");
    }

    return context;
};
