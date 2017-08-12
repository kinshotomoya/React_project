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

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: '野球'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos });と同じ！
      //  es6では、key valueを一緒にかける！
    });
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={ this.state.videos } />
      </div>
    )
  }
}



// Take this compone's generate HTML and put it on the page(in the DOM)
// 1個目に表示したいdomを書いて、二つ目の引数にすでにあるhtmlを指定！
ReactDOM.render(<App />, document.querySelector('.container'));
