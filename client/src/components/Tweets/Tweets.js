import React from 'react';
import Grid from '@material-ui/core/Grid';

import Tweet from './Tweet/Tweet';
import classes from './Tweets.css';
import FilterAndSort from '../filterAndSort';
import StatsModal from '../statsModal';

const tweets = (props) => {
    const tweets_data = props.tweets.map(({id, text, created_at, favorite_count}) => {
        return (
          <Grid item xs={12} md={4} key={id}>
            <Tweet
                username={props.username}
                text={text}
                data={created_at}
                favorite_count={favorite_count}
            />
          </Grid>
        );
    });
    return (
      <div className={classes.Tweets}>
        <FilterAndSort
          sortByDateAsc={props.sortByDateAsc}
          sortByDateDesc={props.sortByDateDesc}
          sortByStarsAsc={props.sortByStarsAsc}
          sortByStarsDesc={props.sortByStarsDesc}
        />
          <StatsModal
            sumOfAllLikes={props.sumOfAllLikes}
            averageLikes={props.averageLikes}
            mentions={props.mentions}
          />
        <Grid container spacing={16}>{tweets_data}</Grid>
      </div>
    );
};

export default tweets;
