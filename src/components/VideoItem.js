import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className='ui items'>
      <div className='item'>
        <div className='image'>
          <img
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
          />
        </div>
        <div className='content'>
          <a href='/#' className='header' onClick={() => onVideoSelect(video)}>
            {video.snippet.title}
          </a>
          <div className='meta'>
            <span>Channel: {video.snippet.channelTitle}</span>
          </div>
          <div className='description'>
            <p>{video.snippet.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
