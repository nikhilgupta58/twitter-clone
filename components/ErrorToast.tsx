import { createStandaloneToast, theme } from '@chakra-ui/react';
import React from 'react'

const toast = createStandaloneToast({ theme });
type Error = { message: string };
export function queryErrorHandler(error: Error | any): void {
    // error is type unknown because in js, anything can be an error (e.g. throw(5))
    const id = "react-query-error";
    let title: string = "";

    if (error?.message) {
        title = error.message;
    } else {
        title =
            error instanceof Error
                ? // remove the initial 'Error: ' that accompanies many errors
                error.toString().replace(/^Error:\s*/, "")
                : "Error connecting to server";
    }
    // prevent duplicate toasts
    toast.closeAll();
    toast({
        id,
        title,
        status: "error",
        variant: "subtle",
        isClosable: true,
        position: "top-right",
    });
}