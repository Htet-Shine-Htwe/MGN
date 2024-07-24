import useSecureStorage from "./useSecureStorage";

type userAuthProps = {
    adminGuard?: boolean,
}

const useAuth = ({adminGuard = true} : userAuthProps) : boolean => 
{   
    const { get } = useSecureStorage();
    const tokenType = adminGuard ? 'auth-token' : 'user-auth-token';
    const token = get(tokenType);
    const expiresAt = get('expiresAt');

    if (!token || !expiresAt) {
        return false;
    }

    const isExpired = new Date().getTime() > parseInt(expiresAt);
   
    return !isExpired;
}

export default useAuth;


