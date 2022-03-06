import { createStandaloneToast, theme } from '@chakra-ui/react';
import React from 'react'

const toast = createStandaloneToast({ theme });
type Error = {
    message: string,
    extensions: {
        code: string
    },
    description: string
};
export function queryErrorHandler(error: Error | any): void {
    // error is type unknown because in js, anything can be an error (e.g. throw(5))
    const id = "react-query-error";
    const err = error?.description ? error?.description : error?.extensions?.code
    // prevent duplicate toasts
    toast.closeAll();
    toast({
        id,
        title: err,
        status: "error",
        variant: "subtle",
        isClosable: true,
        position: "top-right",
    });
}