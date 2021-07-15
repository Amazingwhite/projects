import UserProfile from './components/UserProfile';
import './styles/App.css';
import data from './data/data';
import { useState } from 'react';
import cn from 'classnames'

function App() {

  let [isActive, setIsActive] = useState(null)

  let setActiveUser = (user) => {
    setIsActive(user)
  }

  return (
    <div className='tree'>
      <div className="leftSide">
        <div className='oldFather'>
          <UserProfile
            name={data[4].name}
            illnesses={data[4].illnesses}
            id={4}
            isActive={isActive?.classList.contains('babushkaFather') && isActive}
            setActiveUser={setActiveUser}
          />
          <UserProfile
            name={data[5].name}
            illnesses={data[5].illnesses}
            id={5}
            isActive={isActive?.classList.contains('dedushkaFather') && isActive}
            setActiveUser={setActiveUser}
          />
        </div>
        <div className='connectors'>
          <div className='topConnectors'>
            <div className={cn('connector topLeft topLeftFather', {'activeConnector': data[4].illnesses.length>0})}></div>
            <div className={cn('connector topRight topRightFather', {'activeConnector': data[5].illnesses.length>0})}></div>
          </div>
          <div className='verticalConnectors'>
            <div className={cn('connector verticalLeft verticalConnector verticalLeftFather', {'activeConnector': data[4].illnesses.length>0})}></div>
            <div className={cn('connector verticalRight verticalConnector verticalRightFather', {'activeConnector': data[5].illnesses.length>0})}></div>
          </div>
          <div className='bottomConnectors'>
            <div className={cn('connector bottomLeft bottomLeftFather', {'activeConnector': data[8].illnesses.length>0})}></div>
            <div className={cn('connector bottomRight bottomRightFather', {'activeConnector': data[4].illnesses.length>0 || data[5].illnesses.length>0 || data[8].illnesses.length>0})}></div>
          </div>
        </div>
        <div className='fatherBlock'>
          <UserProfile
            name={data[8].name}
            illnesses={data[8].illnesses}
            id={8}
            isActive={isActive?.classList.contains('fatherSiblings') && isActive}
            setActiveUser={setActiveUser}
          />
          <UserProfile
            name={data[2].name}
            illnesses={data[2].illnesses}
            id={2}
            isActive={isActive?.classList.contains('father') && isActive}
            setActiveUser={setActiveUser}
          />
        </div>
      </div>

      <div className="rightSide">
        <div className='oldMother'>
        <UserProfile
            name={data[6].name}
            illnesses={data[6].illnesses}
            id={6}
            isActive={isActive?.classList.contains('babushkaMother') && isActive}
            setActiveUser={setActiveUser}
          />
          <UserProfile
            name={data[7].name}
            illnesses={data[7].illnesses}
            id={7}
            isActive={isActive?.classList.contains('dedushkaMother') && isActive}
            setActiveUser={setActiveUser}
          />
        </div>
        <div className='connectors'>
          <div className='topConnectors'>
            <div className={cn('connector topLeft topLeftMother', {'activeConnector': data[6].illnesses.length>0})}></div>
            <div className={cn('connector topRight topRightMother', {'activeConnector': data[7].illnesses.length>0})}></div>
          </div>
          <div className='verticalConnectors'>
            <div className={cn('connector verticalLeft verticalConnector verticalLeftMother', {'activeConnector': data[6].illnesses.length>0})}></div>
            <div className={cn('connector verticalRight verticalConnector verticalRightMother', {'activeConnector': data[7].illnesses.length>0})}></div>
          </div>
          <div className='bottomConnectors'>
            <div className={cn('connector bottomLeft bottomLeftMother', {'activeConnector': data[6].illnesses.length>0 || data[7].illnesses.length>0 || data[9].illnesses.length>0})}></div>
            <div className={cn('connector bottomRight bottomRightMother', {'activeConnector': data[9].illnesses.length>0})}></div>
          </div>
        </div>
        <div className='motherBlock'>
          <UserProfile
            name={data[3].name}
            illnesses={data[3].illnesses}
            id={3}
            isActive={isActive?.classList.contains('mother') && isActive}
            setActiveUser={setActiveUser}
          />
          <UserProfile
            name={data[9].name}
            illnesses={data[9].illnesses}
            id={9}
            isActive={isActive?.classList.contains('motherSiblings') && isActive}
            setActiveUser={setActiveUser}
          />
        </div>
      </div>

      <div className='bottom'>
        <div className='selfConnectors'>

          <div className='selfTopConnectors'>
            <div className='selfLeftConnector activeConnector'></div>
            <div className='selfRightConnector activeConnector'></div>
          </div>
          <div className='selfVerticalConnectors'>
            <div className='selfVerticalLeft verticalLeft activeConnector'></div>
            <div className='selfVerticalRight verticalRight activeConnector'></div>
          </div>
          
        </div>
        
        <div className='selfBlock'>
          <UserProfile
            name={data[1].name}
            illnesses={data[1].illnesses}
            id={1}
            isActive={isActive?.classList.contains('me') && isActive}
            setActiveUser={setActiveUser}
          />
          <div className={cn('horizontalConnector', {'activeConnector': data[10].illnesses.length>0})}></div>
          <UserProfile
            name={data[10].name}
            illnesses={data[10].illnesses}
            id={10}
            isActive={isActive?.classList.contains('selfSiblings') && isActive}
            setActiveUser={setActiveUser}
          />
        </div>

      </div>
    </div>
  );
}

export default App;