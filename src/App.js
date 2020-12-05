import React, { Component } from 'react';
import youtube from './apis/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

const KEY = 'AIzaSyBCpcbinVN0onTth5YMIuEIcYRJOpbbmFo';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit('reactjs');
  }

  onSearchSubmit = (value) => {
    youtube
      .get('/search', {
        params: {
          key: KEY,
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: value,
        },
      })
      .then((response) =>
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0],
        })
      );
  };

  onVideoSelect = (video) => {
    console.log('From the app');
    console.log(video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
