import React from 'react';

import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onSelectVideo }) => {
    const listOfVideo = videos.map( (video, id)=> <VideoItem onSelectVideo={onSelectVideo} key={id} video={video} /> )
    return ( 
        <Grid container spacing={10} >
            {listOfVideo}
        </Grid>
        
     );
}
 
export default VideoList;