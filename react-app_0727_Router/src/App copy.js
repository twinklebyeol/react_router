import {BrowserRouter, Routes, Route, NavLink, useParams} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    {/* // 각 컴포넌트들을 적절히 사용 */}
    <div className='container'>
    <h1>Hello, React Router DOM</h1>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/topics'>Topics</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
    </ul>
    {/* <view-router></view-router> */}
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/topics/*" element={<Topics/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path='/*' element={<Notfound/>}/> 
    </Routes>
    </div>  
    </BrowserRouter>
  );
}

function Home(){
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Topic(){

  var params = useParams();
  console.log(params.topic_id);
  var topic_id = Number(params.topic_id)


//   var selected_comp = null
// if(topic_id == 1){
//   selected_comp = <Topics1></Topics1>;
// }else if(topic_id == 2){
//   selected_comp = <Topics2></Topics2>;
// }else if(topic_id == 3){
//   selected_comp = <Topics3></Topics3>;
// }else {
//   selected_comp = <Notfound></Notfound>;
// }
var selected_comp = <Notfound />

for(var i = 0; i < contents.length; i++){
  if(topic_id === contents[i].id){
// selected_comp = contents[i]
selected_comp = contents[i].comp;
break;
  }
}
return(<div>{selected_comp}</div>);
}

var contents=[
  {id:1, title:'html', comp:<Topics1 />},
  {id:2, title:'css', comp:<Topics2 />},
  {id:3, title:'javascript', comp:<Topics3 />},
]



function Topics(){

var lists=[]

for (var i=0; i < contents.length; i++ ){
  lists.push( 
  <li key={contents[i].id}>
    <NavLink to={'topic/' + contents[i].id}>
      {contents[i].title}</NavLink></li>
  )
}

  return(
    <div>
      <h2>Topics</h2>
      <p>Topics...</p>
    <ul>
    {/* <li><NavLink to='/topics/1'>HTML</NavLink></li>
    <li><NavLink to='/topics/2'>CSS</NavLink></li>
    <li><NavLink to='/topics/3'>Javascript</NavLink></li> */}
    {lists}
    </ul>
    <Routes>
    {/* <Route path="/1" element={<Topics1/>}/>
    <Route path="/2" element={<Topics2/>}/>
    <Route path="/3" element={<Topics3/>}/>
    <Route path='/*' element={<Notfound/>}/>  */}
    <Route path='topic/:topic_id' element={<Topic/>}/>
    </Routes>
    </div>
  );
}

const myImage1 = 'https://i.pinimg.com/236x/79/8f/59/798f5980874aaa327b5e692da12e4066.jpg';
const myImage2 = 'https://i.pinimg.com/236x/6d/28/6f/6d286fbf106949106d3f1beb417fbdff.jpg';
const myImage3 = 'https://i.pinimg.com/236x/ff/3a/69/ff3a69f91d0d648f1adea386b2a1933e.jpg';

function Topics1(){
  return(
    <div>
      <h3>Topics1</h3>
      <img src={myImage1} alt="My Image" />
    </div>
  );
}
function Topics2(){
  return(
    <div>
      <h3>Topics2</h3>
      <img src={myImage2} alt="My Image" />
    </div>
  );
}
function Topics3(){
  return(
    <div>
      <h3>Topics3</h3>
      <img src={myImage3} alt="My Image" />
    </div>
  );
}
function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}
// function Notfound(){
//   return(
//     <div>
//       <h2>쏘리</h2>
//       사이트를 열수가없댜이~...
//     </div>
//   );
// }

// 함수방식이면 아래처럼 입력해도 된다
const Notfound =()=>{
  return(
      <div>
        <h2>쏘리</h2>
        사이트를 열수가없댜이~...
     </div>
    );
 }
export default App;
