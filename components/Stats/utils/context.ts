import React from "react";

export const StatsContext = React.createContext(null);

export const useStatsContext = () => {
    const context = React.useContext(StatsContext);

    if (!context) {
        throw new Error("useStats must only be used within its Provider");
    }

    return context;
};
