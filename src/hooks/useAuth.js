import { useEffect, useState } from "react";

export const useAuth = () => {
    const [userId, setUserId] = useState();
    useEffect(() => {
        let userId = localStorage.getItem('userId');
        if (!userId) {
            userId = Date.now() % 10000;
            localStorage.setItem('userId', userId);
        }
        setUserId(typeof userId == "string" ? parseInt(userId) : userId);
    }, [])
    return {
        userId
    }
}
