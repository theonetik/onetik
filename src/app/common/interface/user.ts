export interface User {
    id?: string;
    name: string;
    email: string;
    role: 'superuser' | 'user';
    password?: string;
}
