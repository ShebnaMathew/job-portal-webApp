import {LOGIN_SUCCESS, INVALID_LOGIN, LOGIN_NETWORK_ERROR, 
    COMPLETE_ONBOARDING, LOGOUT, POPULATE_SEARCH, SAVE_LISTING,
    SORT_BY_POPULARITY,CLEAR_SEARCH,INCOMPLETE_ONBOARDING} from "./actionConstants";
import {login, clearSearchForUser, userNotCompletedOnboarding,
    saveUserListing,getListings, listingsByPopularity,getUserSavedListings,
    userCompletedOnboarding, addPreferenceForUser, removePreferenceForUser} from "../data/data";
import store from "./store";

export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    payload: {
        user: user
    }
});

export const loginFail = () => ({
    type: INVALID_LOGIN
});

export const loginNetworkError = () => ({
    type: LOGIN_NETWORK_ERROR
});

/** The following actions get/update mock data and would have to be refactored
 * if/when the data source is changed.
 */

// Eventually this action creator would be re-written to connect to a real data source
export const validateUser = (username, password) => {
    let user = login(username, password);
    if (user.id)
        return loginSuccess(user);
    else return loginFail();
    // No case for a network error yet
}

export const getSavedListings = () => {
    let userId = store.getState().user.id;
    return {
        type: SAVE_LISTING,
        payload: {
            saved: getUserSavedListings(userId)
        }
    }
}

// Note for future: need to handle error from data source
export const getUserListings = () => {
    let userId = store.getState().user.id;
    let listings = getListings(userId);
    return {
        type: POPULATE_SEARCH,
        payload: {
            listings: listings
        }
    }
}

export const getPopularityListing = (e) => {
    let userId = store.getState().user.id;
    let popularity;
    popularity = (e.target.checked)? listingsByPopularity(userId): getListings(userId);
    return {
        type: SORT_BY_POPULARITY,
        payload: {
            popularity: popularity
        }
    }
}

export const addPreference = preference => {
    let user = store.getState().user.id;
    let updatedPreferences = addPreferenceForUser(user, preference);
    return {
        type: POPULATE_SEARCH,
        payload: {
            listings: updatedPreferences
        }
    }
};

export const removePreference = preferences => {
    let userId = store.getState().user.id;
    let updatedPreferences = removePreferenceForUser(userId, preferences);
    return {
        type: POPULATE_SEARCH,
        payload: {
            listings: updatedPreferences
        }
    }
};

export const clearSearch = () => {
    let userId = store.getState().user.id;
    let clear = clearSearchForUser(userId);
    return {
        type: CLEAR_SEARCH,
        payload: {
            search: clear.search,
            listings: clear.listings
        }
    }
};

export const saveListing = listing => {
    let userId = store.getState().user.id;
    let updatedSave = saveUserListing(userId, listing);
    return {
        type: SAVE_LISTING,
        payload: {
            saved: updatedSave
        }
    }
};

export const completeOnboarding = () => {
    let userId = store.getState().user.id;
    userCompletedOnboarding(userId);
    return {
        type: COMPLETE_ONBOARDING
    }
}

export const incompleteOnboarding = () => {
    let userId = store.getState().user.id;
    userNotCompletedOnboarding(userId);
    return {
        type: INCOMPLETE_ONBOARDING
    }
}

export const logout = () => ({
    type: LOGOUT
});
