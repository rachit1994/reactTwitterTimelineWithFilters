import React from 'react';
import Grid from '@material-ui/core/Grid';

import Tweet from './Tweet/Tweet';
import classes from './Tweets.css';

const tweets = (props) => {
    console.log('props.tweets', props.tweets);
    const tweets_data = props.tweets.map(({id, text, created_at}) => {
        return (
          <Grid item xs={12} md={4} key={id}>
            <Tweet
                username={props.username}
                text={text}
                data={created_at}
            />
          </Grid>
        );
    });
    return (
      <div className={classes.Tweets}>
        <Grid container spacing={16}>{tweets_data}</Grid>
      </div>
    );
};

export default tweets;
