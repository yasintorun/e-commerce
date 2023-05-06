import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const useAuth = () => {
    const [userId, setUserId] = useState();
    const {data: session, status} = useSession();
    useEffect(() => {
        if(!session) {
            setUserId(null);
            return;
        }
        setUserId(session.user.id);
    }, [session])
    return {
        userId
    }
}
