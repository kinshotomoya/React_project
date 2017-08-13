import React from 'react'
import VideoListItem from './video_list_item';


// index.jsの <VideoList video={this.state.videos} />の値がpropに格納されている！
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    // keyは数字でなくてもいい！この場合は文字になっている！
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}  />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

// class VideoList extends Component {
//   render(){
//     return(
//       <ul className="col-md-4 list-group">
//       </ul>
//     );
//   };
// }

export default VideoList;
