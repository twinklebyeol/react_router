import { BrowserRouter, Routes, Route, NavLink, useParams } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hello, React Router DOM</h1>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/topics">Topics</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="/topics/*" element={<Topics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Home...</p>
    </div>
  );
}

function Topic(){
  var params = useParams();
  // console.log(params)
  // console.log(params.topic_id)
  var topic_id = Number(params.topic_id)

  /* var selected_comp = null
  if(topic_id == 1){
    selected_comp = <Topics1></Topics1>
  } else if(topic_id == 2){
    selected_comp = <Topics2></Topics2>
  } else if(topic_id == 3){
    selected_comp = <Topics3></Topics3>
  } else{
    selected_comp = <NotFound></NotFound>
  } */

  /* var selected_comp = {
    comp: <NotFound />
  } */
  var selected_comp = <NotFound />

  for( var i = 0; i < contents.length; i++ ){
    if(topic_id === contents[i].id){
      // selected_comp = contents[i]
      selected_comp = contents[i].comp
      break;
    }
  }

  return(
    <div>
      {/* {selected_comp.comp} */}
      {selected_comp}
    </div>
  )
}

var contents=[
  {id: 1, title: 'HTML', comp: <Topics1 />},
  {id: 2, title: 'CSS', comp: <Topics2 />},
  {id: 3, title: 'JAVASCRIPT', comp: <Topics3 />},
]

function Topics() {
  var lists = []
  for(var i = 0; i < contents.length; i++){
    lists.push(
      <li key={contents[i].id}>
        <NavLink to={"topic/" + contents[i].id}>
          {contents[i].title}
        </NavLink>
      </li>
    )
  }

  return (
    <div>
      <h2>Topics</h2>
      <p>Topics...</p>
      <ul>
        {/* <li><NavLink to="topic/1">HTML</NavLink></li>
        <li><NavLink to="topic/2">CSS</NavLink></li>
        <li><NavLink to="topic/3">JAVASCRIPT</NavLink></li> */}
        {lists}
      </ul>
        
      <Routes>
        {/* <Route path="topic/1" element={<Topics1 />} />
        <Route path="topic/2" element={<Topics2 />} />
        <Route path="topic/3" element={<Topics3 />} />
        <Route path="topic/*" element={<NotFound />} /> */}

        <Route path="topic/:topic_id" element={<Topic />} />
      </Routes>
    </div>
  );
}

function Topics1() {
  return (
    <div>
      <h3>HTML</h3>
      <p>HTML is...</p>
    </div>
  );
}

function Topics2() {
  return (
    <div>
      <h3>CSS</h3>
    <p>CSS is...</p>
    </div>
  );
}

function Topics3() {
  return (
    <div>
      <h3>JAVASCRIPT</h3>
    <p>JAVASCRIPT is...</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact...</p>
    </div>
  );
}

/* function NotFound() {
  return (
    <div>
      <h2>Sorry! Page is Not Found!</h2>
    </div>
  );
}  */
const NotFound = () => {
  return (
    <div>
      <h2>Sorry! Page is Not Found!</h2>
    </div>
  );
}

export default App;
