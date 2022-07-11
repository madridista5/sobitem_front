import {createContext} from 'react';

export const NavContext = createContext({
    nav: false,
    setNav: (nav: boolean) => {},
});