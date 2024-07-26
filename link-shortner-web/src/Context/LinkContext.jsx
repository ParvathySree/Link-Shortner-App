import { useState, createContext } from "react";

const LinkContext = createContext();

const LinkContextProvider = ({ children }) => {
    const [originalLink, setOriginalLink] = useState('');
    const [shortLink, setShortLink] = useState('');

    return (
        <LinkContext.Provider value={{ originalLink, setOriginalLink, shortLink, setShortLink }}>
            {children}
        </LinkContext.Provider>
    );
}

export { LinkContext, LinkContextProvider };
