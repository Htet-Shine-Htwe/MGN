import Cookies from "js-cookie"

const useAuth = () : boolean => {
    const token = Cookies.get('auth-token');
    const expiresAt = Cookies.get('expiresAt');
    // console.log(token,expiresAt);

    if (!token || !expiresAt) {
        return false;
    }


    const isExpired = new Date().getTime() > parseInt(expiresAt);
    return !isExpired;
}

export default useAuth;


