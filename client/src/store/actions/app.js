import * as actionTypes from './actionTypes';

export const getUserTweetsStart = () => {
    return {
        type: actionTypes.GET_USER_TWEETS_START
    };
};
export const getUserTweetsSuccess = (username, tweets) => {
    return {
        type: actionTypes.GET_USER_TWEETS_SUCCESS,
        twitterUsername: username,
        userTweets: tweets
    };
};

export const getUserTweetsFailed = error => {
    return {
        type: actionTypes.GET_USER_TWEETS_FAILED,
        getTweetsError: error
    };
};

export const getUserTweets = username => {
    return {
        type: actionTypes.GET_USER_TWEETS_INITIAL,
        username: username
    };
};

export const loadMoreTweetsStart = () => {
    return {
        type: actionTypes.LOAD_MORE_TWEETS_START
    };
};

export const loadMoreTweetsSuccess = (tweets) => {
    return {
        type: actionTypes.LOAD_MORE_TWEETS_SUCCESS,
        allTweets: tweets
    };
};

export const loadMoreTweetsFailed = (error) => {
    return {
        type: actionTypes.LOAD_MORE_TWEETS_FAILED,
        loadMoreTweetsError: error
    };
};

export const loadMoreTweets = (username, tweets) => {
    return {
        type: actionTypes.LOAD_MORE_TWEETS_INITIAL,
        username: username,
        tweets: tweets
    };
};

export const resetError = () => {
    return {
        type: actionTypes.RESET_ERROR
    };
};

export const sortByDateAsc = () => {
    return {
        type: actionTypes.SORT_BY_DATE_ASCENDING
    }
}

export const sortByDateDesc = () => {
    return {
        type: actionTypes.SORT_BY_DATE_DESCENDING
    }
}

export const sortByStarsAsc = () => {
    return {
        type: actionTypes.SORT_BY_STARS_ASCENDING
    }
}

export const sortByStarsDesc = () => {
    return {
        type: actionTypes.SORT_BY_STARS_DESCENDING
    }
}
