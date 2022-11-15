import react, { useRef, useState } from 'react'
import './App.css';
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'

function App() {
  const imagelist = [image1, image2, image3, image4, image5, image6]
  const [list, setList] = useState([0, 1, 2, 3, 4, 5]);
  const index = [0, 1, 2, 3, 4, 5]
  
  const dragItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };
  
  const dragOverItem = useRef();
    const dragEnter = (e, position) => {
      dragOverItem.current = position;
      console.log(e.target.innerHTML);
    };
   const drop = (e) => {
     const copyListItems = [...list];
     const dragItemContent = copyListItems[dragItem.current];
     copyListItems.splice(dragItem.current, 1);
     copyListItems.splice(dragOverItem.current, 0, dragItemContent);
     dragItem.current = null;
     dragOverItem.current = null;
     setList(copyListItems);
   };
  const [isclicked, setIsclicked] = useState("")
  // console.log(index)
  return (
    <div className="App">
      <div className="main">
        <div className="images">
          {imagelist?.map((image, index) => (
            <img src={image} alt="" />
          ))}
        </div>
        <div className="values">
          <p>drag buttons to set new sequence </p>
          <div className="value">
            {list.map((index) => (
              <div
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                className="number"
                key={index}
                draggable
              >
                <button>{index}</button>
              </div>
            ))}
          </div>
        </div>
        <div className="current">current sequence {list}</div>
        <div className="new">
          <p>
            {" "}
            New Sequence <span>{list}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
