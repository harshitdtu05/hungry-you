import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // input
    const [userStatus, setUserStatus] = useState(true);
    useEffect(() => {

        window.addEventListener("offline", () => {
            setUserStatus(false);
        })


        window.addEventListener("online", () => {
            setUserStatus(true);
        })

    }, []);

    // output
    return userStatus;
}

export default useOnlineStatus;