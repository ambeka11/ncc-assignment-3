import {createContext, useState } from 'react';
// Create a context
const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [data] = useState('Hello from Context!');
    return (
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    );
};
export { MyContext, MyProvider };