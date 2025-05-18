import { SignUp } from "./sign-up"

export interface NewUser {
    id: string
    username: string
    email: string
    name: string
    signups: Array<SignUp>
}
