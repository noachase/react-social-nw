const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        // { id: 1, followed: true, fullName: 'Noah', status: 'Im the best', location: {city: 'Kharkov', country: 'Ukraine'} },
        // { id: 2, followed: false, fullName: 'Vladushka', status: 'Im the best', location: {city: 'Kiev', country: 'Ukraine'} },
        // { id: 3, followed: false, fullName: 'Bodya Bodya', status: 'Im the best', location: {city: 'Krakov', country: 'Poland'} },
        // { id: 4, followed: true, fullName: 'Vladik', status: 'Im the best', location: {city: 'Kharkov', country: 'Ukraine'} },
        // { id: 5, followed: true, fullName: 'Serega', status: 'Im the best', location: {city: 'Kharkov', country: 'Ukraine'} },
        // { id: 6, followed: true, fullName: 'Olya', status: 'Im the best', location: {city: 'Kharkov', country: 'Ukraine'} }
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }

        default:
            return state;
    }




}

export const followAC = () => ({ type: FOLLOW, userId })
export const unfollowAC = () => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
})

export default usersReducer;