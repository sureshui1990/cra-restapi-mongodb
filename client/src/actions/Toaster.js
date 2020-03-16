
import { toast } from 'react-toastify';

export const DOASTER_SUCCESS = message => {
    return () => toast.success(message, {
        position: toast.POSITION.TOP_RIGHT
    })
};
export const DOASTER_ERROR = message => {
    return () => toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
    })
};
