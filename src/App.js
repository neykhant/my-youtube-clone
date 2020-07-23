import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import youtube from './api/youtube';
import {SearchBar, VideoDetails, VideoList } from './components/index';

class Appp extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    onSelectVideo = (video) =>{
        this.setState({ selectedVideo: video });
    }

    componentDidMount(){
        this.handleSubmit('pdf generation with react and node')
    }

    handleSubmit = async (searchTerm) => {
        const  response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyD0W0CtP56asYOaaoDnipHtLH8DgYGZ-f0',
                q: searchTerm
            }
        })
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
        console.log(response.data.items);
    }
    render() { 
        const { selectedVideo, videos } = this.state;
        return ( 
            <Grid justify="center" container spacing={10} >
                <Grid item xs={12} >
                    <Grid container spacing={10} >
                        <Grid item xs={12} >
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8} >
                            <VideoDetails video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4} >
                            <VideoList videos={videos} onSelectVideo={this.onSelectVideo} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
         );
    }
}
 
export default Appp;