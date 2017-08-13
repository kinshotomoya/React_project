import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
// search_bar.jsからSeaarchBarコンポーネントをimportしている！
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyBF0kK2CNwPPDb8T3bCx2q7ZGzas_dVofI';


// create a new component. This component should produce some HTMl
// Appコンポーネントは各コンンポーネントのbaseみたいなもん！
// function base conponent
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('音楽');
  }


  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
         videos: videos,
         selectedVideo: videos[0]
       });
      // this.setState({ videos: videos });と同じ！
      //  es6では、key valueを一緒にかける！
    });
  }


  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
          videos={ this.state.videos } />
      </div>
    )
  }
}



// Take this compone's generate HTML and put it on the page(in the DOM)
// 1個目に表示したいdomを書いて、二つ目の引数にすでにあるhtmlを指定！
ReactDOM.render(<App />, document.querySelector('.container'));
