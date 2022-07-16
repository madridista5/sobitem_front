import {createContext} from 'react';

export const LoginContext = createContext({
    login: false,
    setLogin: (login: boolean) => {},
});