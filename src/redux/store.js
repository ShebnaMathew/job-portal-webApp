import {createStore} from "redux";
import {INITIAL_STATE, LOGIN_STATE} from "./storeConstants";
import { LOGIN_SUCCESS, INVALID_LOGIN, LOGIN_NETWORK_ERROR, INCOMPLETE_ONBOARDING,
    POPULATE_SEARCH, CLEAR_SEARCH, SORT_BY_POPULARITY,SAVE_LISTING, COMPLETE_ONBOARDING, LOGOUT } from "./actionConstants";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginState: LOGIN_STATE.LOGGED_IN,
                user: action.payload.user
            }
        case INVALID_LOGIN:
            return {...state, loginState: LOGIN_STATE.INVALID_LOGIN}
        case LOGIN_NETWORK_ERROR:
            return {...state, loginState: LOGIN_STATE.NETWORK_ERROR}
        case POPULATE_SEARCH:
            return {
                ...state,
                listings: action.payload.listings
            }
        case CLEAR_SEARCH:
            return {
                ...state,
                search: action.payload.preference,
                listings: action.payload.listings
            }
        case SAVE_LISTING:
            return {
                ...state,
                saved: action.payload.saved
            }
        case COMPLETE_ONBOARDING:
            return {
                ...state,
                user: {
                    ...state.user,
                    onboardingComplete: true
                }
            }
        case INCOMPLETE_ONBOARDING:
            return {
                ...state,
                user: {
                    ...state.user,
                    onboardingComplete: false
                }
            }
        case SORT_BY_POPULARITY:
            return {
                ...state,
                listings: action.payload.popularity
            }
        case LOGOUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default createStore(rootReducer);