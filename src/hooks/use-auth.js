import {useSelector} from 'react-redux'

export function useAuth() {
    const {email, toke, id} = useSelector(state => state.user);
    return {
        isAuth: !!email,
        email,
        toke,
        id,
    }
}