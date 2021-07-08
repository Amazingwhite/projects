import { useState } from 'react';
import './App.css';
import data from './data/data';

function App() {

  let [isActive, setIsActive] = useState(false)
  let [isClicked, setIsClicked] = useState(false)
  let toggleHandler = () => {
    setIsActive(!isActive)
    setIsClicked(!isClicked)
  }

  // const myConnections = data[1].connections.map(id => data[id])
  // console.log(myConnections)
  return (
    <>
      <svg viewBox="0 0 660 270" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect  className={isActive ? 'testing' : null} x="80" y="10" ry="4" />
          <text x="105" y="27">{data[5].name}</text>

          <rect className={isActive ? 'testing' : null} x="200" y="10" ry="4" />
          <text x="225" y="27">{data[4].name}</text>

          <rect className={isActive ? 'testing' : null} x="350" y="10" ry="4" />
          <text x="375" y="27">{data[6].name}</text>

          <rect className={isActive ? 'testing' : null} x="470" y="10" ry="4" />
          <text x="495" y="27">{data[7].name}</text>

          <line x1="130" x2="130" y1="35" y2="50" />
          <line x1="250" x2="250" y1="35" y2="50" />
          <line x1="400" x2="400" y1="35" y2="50" />
          <line x1="520" x2="520" y1="35" y2="50" />

          <path d="m129,50  h122 " />
          <path d="m399,50  h122 " />

          <line x1="190" x2="190" y1="50" y2="80" />
          <line x1="460" x2="460" y1="50" y2="80" />

          <path d="m129,80  h122 " />
          <path d="m399,80  h122 " />

          <line x1="130" x2="130" y1="80" y2="95" />
          <line x1="250" x2="250" y1="80" y2="95" />
          <line x1="400" x2="400" y1="80" y2="95" />
          <line x1="520" x2="520" y1="80" y2="95" />

          <rect className={isActive ? 'testing' : null} x="80" y="95" ry="4" />
          <text x="85" y="112">Братья, сестры</text>

          <rect className={isActive ? 'testing' : null} x="200" y="95" ry="4" />
          <text x="235" y="112">{data[2].name}</text>

          <rect className={isActive ? 'testing' : null} x="350" y="95" ry="4" />
          <text x="385" y="112">{data[3].name}</text>

          <rect className={isActive ? 'testing' : null} x="470" y="95" ry="4" />
          <text x="475" y="112">Братья, сестры</text>

          <line x1="250" x2="250" y1="120" y2="135" />
          <line x1="400" x2="400" y1="120" y2="135" />

          <path d="m249,135  h152 " />

          <line x1="325" x2="325" y1="135" y2="150" />

        
          <rect onClick={toggleHandler} className={isClicked ? 'clicked' : null} x="280" y="150" ry="4" />
          <text onClick={toggleHandler} x="320" y="167">{data[1].name}</text>
          
          <path d="m380,163  h50 " />

          <rect className={isActive ? 'testing' : null} x="430" y="150" ry="4" />
          <text x="435" y="167">Братья, сестры</text>
        </g>
      </svg>
    </>
  );
}

//при клике перебирать массив data и создавать новый из элементов у которых есть болезни

export default App;
