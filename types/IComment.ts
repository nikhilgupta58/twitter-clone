export interface IComment {
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
        userId: string
    }
}