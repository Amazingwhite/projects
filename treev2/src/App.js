import './App.css';

function App() {
  return (
    <div className='tree'>
      <div className="leftSide">
        <div className='oldFather'>
          <div className='person babushka babushkaFather' style={{marginLeft: '30px'}}></div>
          <div className='person dedushka dedushkaFather'></div>
        </div>
        <div className='connectors'>
          <div className='topConnectors'>
            <div className='connector topLeft topLeftFather'></div>
            <div className='connector topRight topRightFather'></div>
          </div>
          <div className='verticalConnectors'>
            <div className='connector verticalLeft verticalConnector verticalLeftFather'></div>
            <div className='connector verticalRight verticalConnector verticalRightFather'></div>
          </div>
          <div className='bottomConnectors'>
            <div className='connector bottomLeft bottomLeftFather'></div>
            <div className='connector bottomRight bottomRightFather'></div>
          </div>
        </div>
        <div className='fatherBlock'>
          <div className='person siblings' style={{marginLeft: '30px'}}></div>
          <div className='person father'></div>
        </div>
      </div>

      <div className="rightSide">
        <div className='oldMother'>
          <div className='person babushka babushkaMother'></div>
          <div className='person dedushka dedushkaMother' style={{marginRight: '30px'}}></div>
        </div>
        <div className='connectors'>
          <div className='topConnectors'>
            <div className='connector topLeft topLeftMother'></div>
            <div className='connector topRight topRightMother'></div>
          </div>
          <div className='verticalConnectors'>
            <div className='connector verticalLeft verticalConnector verticalLeftMother'></div>
            <div className='connector verticalRight verticalConnector verticalRightMother'></div>
          </div>
          <div className='bottomConnectors'>
            <div className='connector bottomLeft bottomLeftMother'></div>
            <div className='connector bottomRight bottomRightMother'></div>
          </div>
        </div>
        <div className='motherBlock'>
          <div className='person mother'></div>
          <div className='person siblings' style={{marginRight: '30px'}}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
