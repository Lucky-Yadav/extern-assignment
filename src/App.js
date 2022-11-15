import react, { useState } from 'react'
import './App.css';
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'

function App() {
  const imagelist = [image1, image2, image3, image4, image5, image6]
  const [serial, setserial] = useState("012345")
  const index = [0,1,2,3,4,5]
  
  const [isclicked, setIsclicked] = useState("")

  return (
    <div className="App">
      <div className="main">
        <div className="images">
          {imagelist?.map((image, index) => (
            <div
              className={`image ${isclicked == index ? "" : "hidden"} `}
              key={image}
            >
              <img src={image} alt="" />
              {index}
            </div>
          ))}
        </div>
        <div className="values">
          {imagelist.map((image, index) => (
            <div className="number" key={index} onClick={() => setIsclicked(index)} >
              <button>{ index}</button>
            </div>
          ))}
        </div>
      <input type="text" placeholder='serial no without space' onInput={(e) => setserial(e.target.value)}/>
      </div>
    </div>
  );
}

export default App;
