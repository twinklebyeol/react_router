import {BrowserRouter, Routes, Route, NavLink, useParams} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    {/* // 각 컴포넌트들을 적절히 사용 */}
    <div className='container'>
    <h1>Hello, React Router DOM</h1>
    <ul>
      <li><NavLink to='/subject'>Home</NavLink></li>
      <li><NavLink to='/topics'>Topics</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
    </ul>
    {/* <view-router></view-router> */}
    <Routes>
    <Route path="/subject" element={<Home/>}/>
    <Route path="/topics/*" element={<Topics/>}/>
    <Route path="/contact/*" element={<Contact/>}/>
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

for(var i = 0; i < TopicContents.length; i++){
  if(topic_id === TopicContents[i].id){
// selected_comp = contents[i]
selected_comp = TopicContents[i].comp;
break;
  }
}
return(<div>{selected_comp}</div>);
}

var TopicContents=[
  {id:1, title:'html', comp:<Topics1 />},
  {id:2, title:'css', comp:<Topics2 />},
  {id:3, title:'javascript', comp:<Topics3 />},
]



function Topics(){

var lists=[]

for (var i=0; i < TopicContents.length; i++ ){
  lists.push( 
  <li key={TopicContents[i].id}>
    <NavLink to={'topic/' + TopicContents[i].id}>
      {TopicContents[i].title}</NavLink></li>
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
const myImage4 = "https://i.pinimg.com/236x/a7/e5/32/a7e5323b3cf51d0402037653e2eb6324.jpg";
const myImage5 = "https://i.pinimg.com/236x/72/0c/cf/720ccfaab53467c4c0aedf50fde50343.jpg";
const myImage6 = "https://i.pinimg.com/236x/18/22/b2/1822b2aa0efdd248398c34f8bd7ecf64.jpg";

  
  
  
  function Topics1() {
  return(
    <div>
      <h3>Topics1</h3>
      <img src={myImage1} alt="My Image"/>
    </div>
  );
}
function Topics2(){
  return(
    <div>
      <h3>Topics2</h3>
      <img src={myImage2} alt="My Image"/>
    </div>
  );
}
function Topics3(){
  return(
    <div>
      <h3>Topics3</h3>
      <img src={myImage3} alt="My Image"/>
    </div>
  );
}


function Contacts(){

  var params = useParams();
  console.log(params.contacts_id);
  var contacts_id = Number(params.contacts_id)

var selected_comp = <Notfound />

for(var i = 0; i < ConatactContents.length; i++){
  if(contacts_id === ConatactContents[i].id){
// selected_comp = contents[i]
selected_comp = ConatactContents[i].comp;
break;
  }
}
return(<div>{selected_comp}</div>);
}

var ConatactContents=[
  {id:3, title:'html', comp:<Contact1 />},
  {id:4, title:'css', comp:<Contact2 />},
  {id:5, title:'javascript', comp:<Contact3 />},
]



function Contact(){
 var lists=[]

for (var i=0; i < ConatactContents.length; i++ ){
  lists.push( 
  <li key={ConatactContents[i].id}>
    <NavLink to={'contacts/' + ConatactContents[i].id}>
      {ConatactContents[i].title}</NavLink></li>
  )
}

  return(
    <div>
      <h2>Contact</h2>
      <p>Contacts...</p>
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
    <Route path='contacts/:contacts_id' element={<Contacts/>}/>
    </Routes>
    </div>
  );
}

function Contact1(){
  return(
    <div>
     <h3>Contact1</h3>
     <img src={myImage4} alt="My Image"  />
    </div>
  );
}
function Contact2(){
  return(
    <div>
     <h3>Contact2</h3>
     <img src={myImage5} alt="My Image"  />
    </div>
  );
}
function Contact3(){
  return(
    <div>
    <h3>Contact3</h3>
    <img src={myImage6} alt="My Image"  />
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
