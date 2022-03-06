import { InMemoryCache } from "@apollo/client";
import { makeVar } from '@apollo/client';

export const userInfoVar = makeVar({
    id: null,
    email: null,
    name: null,
    avatar: null
});

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                userInfo: {
                    read() {
                        return userInfoVar();
                    }
                }
            }
        }
    }
});