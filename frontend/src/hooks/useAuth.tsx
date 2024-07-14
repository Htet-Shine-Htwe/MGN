import Cookies from "js-cookie"


type userAuthProps = {
    adminGuard?: boolean,
}

const useAuth = ({adminGuard = true} : userAuthProps) : boolean => 
{   
    const tokeType = adminGuard ? 'auth-token' : 'user-auth-token';
    const token = Cookies.get(tokeType);
    const expiresAt = Cookies.get('expiresAt');
    // console.log(token,expiresAt);

    if (!token || !expiresAt) {
        return false;
    }


    const isExpired = new Date().getTime() > parseInt(expiresAt);
    return !isExpired;
}

export default useAuth;


