export interface SignUp {
    parent: {
        name: string;
        email: string;
        phone: string;
    };
    child: {
        name: string;
        age: number;
    };
    message: string;
}