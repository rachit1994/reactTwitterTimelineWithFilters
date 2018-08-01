/*eslint indent: ["error", 4, { "SwitchCase": 1 }]*/
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../share/utility';
import _ from 'lodash';

const initialState = {
    username: '',
    tweets: '',
    error: null,
    errorOccured: false,
    loading: false,
    sumOfAllLikes: 0,
    averageLikes: 0,
    mentions: {}
};

const getUserTweetsStart = state => {
    return updateObject(state, { loading: true });
};

const getUserTweetsSuccess = (state, action) => {
    const sum = _.sumBy(action.userTweets, 'favorite_count');
    const averageLikes = sum/action.userTweets.length;
    let mentions = [];
    _.forEach(action.userTweets, (val) => {
        if(val.entities && val.entities.user_mentions.length > 0 ) {
            _.forEach(val.entities.user_mentions, (mention) => {
                mentions.push(mention.screen_name);
            })
        }
    });

    return updateObject(state, {
        username: action.twitterUsername,
        tweets: action.userTweets,
        error: null,
        errorOccured: false,
        loading: false,
        sumOfAllLikes: sum,
        averageLikes: averageLikes,
        mentions: _.groupBy(mentions)
    });
};

const getUserTweetsFailed = (state, action) => {
    return updateObject(state, {
        error: action.getTweetsError,
        errorOccured: true,
        loading: false
    });
};

const loadMoreTweetsStart = state => {
    return updateObject(state, { loading: true });
};

const loadMoreTweetsSuccess = (state, action) => {
    return updateObject(state, {
        tweets: action.allTweets,
        error: null,
        errorOccured: false,
        loading: false
    });
};

const loadMoreTweetsFailed = (state, action) => {
    return updateObject(state, {
        error: action.loadMoreTweetsError,
        errorOccured: true,
        loading: false
    });
};

const resetError = (state) => {
    return updateObject(state, {
        error: null,
        errorOccured: false
    });
};

const ascSortBy = (state, key) => {
    const tweets = _.sortBy(state.tweets, key);
    return updateObject(state, {
        tweets: tweets,
        error: null,
        errorOccured: false,
        loading: false
    });
}

const descSortBy = (state, key) => {
    const tweets = _.sortBy(state.tweets, key).reverse();
    return updateObject(state, {
        tweets: tweets,
        error: null,
        errorOccured: false,
        loading: false
    });
}

const ascSortByDate = (state, key) => {
    const tweets = _.sortBy(state.tweets, (val) =>  new Date(val[key]) );

    return updateObject(state, {
        tweets: tweets,
        error: null,
        errorOccured: false,
        loading: false
    });
}

const descSortByDate = (state, key) => {
    const tweets = _.sortBy(state.tweets, (val) =>  new Date(val[key]) );

    return updateObject(state, {
        tweets: tweets.reverse(),
        error: null,
        errorOccured: false,
        loading: false
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_TWEETS_START:
            return getUserTweetsStart(state);
        case actionTypes.GET_USER_TWEETS_SUCCESS:
            return getUserTweetsSuccess(state, action);
        case actionTypes.GET_USER_TWEETS_FAILED:
            return getUserTweetsFailed(state, action);
        case actionTypes.LOAD_MORE_TWEETS_START:
            return loadMoreTweetsStart(state);
        case actionTypes.LOAD_MORE_TWEETS_SUCCESS:
            return loadMoreTweetsSuccess(state, action);
        case actionTypes.LOAD_MORE_TWEETS_FAILED:
            return loadMoreTweetsFailed(state, action);
        case actionTypes.RESET_ERROR:
            return resetError(state);
        case actionTypes.SORT_BY_DATE_ASCENDING:
            return ascSortByDate(state, 'created_at');
        case actionTypes.SORT_BY_DATE_DESCENDING:
            return descSortByDate(state, 'created_at');
        case actionTypes.SORT_BY_STARS_ASCENDING:
            return ascSortBy(state, 'favorite_count');
        case actionTypes.SORT_BY_STARS_DESCENDING:
            return descSortBy(state, 'favorite_count');
        default:
            return state;
    }
};

export default reducer;
