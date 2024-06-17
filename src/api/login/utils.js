import { getCookie } from '../../utils/CookieManager';
import { jwtDecode } from 'jwt-decode'

export const getUserRole = () => {
    const token = getCookie('jwt');
    if (!token) return 0;
    const decodedToken = jwtDecode(token);
    return decodedToken?.user_type_id;
  };
  
  export const getUserId = () => {
    const token = getCookie('jwt');
    if (!token) return 0;
    const decodedToken = jwtDecode(token);
    return decodedToken?.user_id;
  }