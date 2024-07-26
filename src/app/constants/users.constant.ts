export interface User {
  name: string;
  email: string;
  password: string;
  username: string;
}

export const USERS: User[] = [
  {
    name: 'Demo',
    email: 'demo@mail.com',
    password: '123',
    username: 'demo'
  }
]
