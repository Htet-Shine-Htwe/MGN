import Cookies from "js-cookie"

const useAuth = () : boolean => {
    const token = Cookies.get('token');
    const expiresAt = Cookies.get('expiresAt');

    if (!token || !expiresAt) {
        return false;
    }

    const isExpired = new Date().getTime() > parseInt(expiresAt);
    return !isExpired;
}

export default useAuth;


