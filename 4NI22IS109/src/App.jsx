import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App=()=>{
  <Router>
    <Routes>
      <Route path="/" element={<TopUsers/>}/>
      <Route path="/trending" element={<TrendingPosts/>}/>
    </Routes>
  </Router>
}
export default App;