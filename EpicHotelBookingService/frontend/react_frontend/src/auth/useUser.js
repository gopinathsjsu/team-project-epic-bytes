import { useState, useEffect } from 'react';
import { useToken } from './useToken';
import * as jwt_decode from 'jwt-decode';


export const useUser = () => {
    const [token] = useToken();

    const getPayloadFromToken = token => {
        const encodedPayload = token;



        console.log(JSON.parse(atob(token.split('.')[1])));
 return JSON.parse(atob(token.split('.')[1]));

    }

    const [user, setUser] = useState(() => {
        if (!token) return null;
        return getPayloadFromToken(token);
    });

    useEffect(() => {
        if (!token) {
            setUser(null);
        } else {
            setUser(getPayloadFromToken(token));
        }
    }, [token]);

    return user;
}