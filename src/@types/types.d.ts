export {};
import 'next-auth/';

declare module 'next-auth' {
    interface User {
        email: string;
        id: int;
        name: string | null;
    }
}
