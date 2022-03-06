export interface IPost {
    id: string,
    body: string,
    image: string,
    userId: string,
    createdAt: string,
    like: {
        id: string,
        userId: string
    },
    user: {
        id: string,
        email: string,
        avatar: string,
        name: string,
    },
    comment: {
        id: string,
        message: string,
        createdAt: string,
        user: {
            id: string,
            email: string,
            avatar: string,
            name: string,
        },
        like: {
            id: string,
        }
    }
}