import React, { useEffect, useRef } from 'react'
import './styles/App.css';
import data from './data/data';
import UserProfile from './components/UserProfile';
import cn from 'classnames'

let App = () => {
  //users refs
  let fatherGrandmother = useRef();
  let fatherGrandfather = useRef();
  let motherGrandmother = useRef();
  let motherGrandfather = useRef();
  let father = useRef();
  let fatherSiblings = useRef();
  let mother = useRef();
  let motherSiblings = useRef();
  let me = useRef();
  let meSiblings = useRef();
  let usersRefs = [fatherGrandmother, fatherGrandfather, motherGrandmother, motherGrandfather, father, fatherSiblings, mother, motherSiblings, me,meSiblings]

  //connectors refs
  let meVerticalConnector = useRef();
  let meRightConnector = useRef();
  let meLeftConnector = useRef();
  let meHorizontalConnector = useRef();

  let fatherVerticalConnector = useRef();
  let fatherRightConnector = useRef();
  let fatherLeftConnector = useRef();

  let motherVerticalConnector = useRef();
  let motherRightConnector = useRef();
  let motherLeftConnector = useRef();

  let agedFatherLeftConnector = useRef();
  let agedFatherRightConnector = useRef();
  let agedMotherLeftConnector = useRef();
  let agedMotherRightConnector = useRef();

  //треугольники refs
  let treLeftGrandmother = useRef();
  let treLeftGrandfather = useRef();
  let treRightGrandmother = useRef();
  let treRightGrandfather = useRef();
  let treFather = useRef();
  let treMother = useRef();
  let treRefs = [treLeftGrandmother, treLeftGrandfather, treRightGrandmother, treRightGrandfather, treFather, treMother]
  
  let clickHandler = (e) => {
    if(e.currentTarget.classList.contains('fillColor')){

      treRefs.forEach(i => {
        if(i.current.classList.contains('clickedTre')) {
          i.current.classList.remove('clickedTre')
        }
      })
      
      usersRefs.forEach(i => {
        if(i.current.classList.contains('clickedColor')) {
          i.current.classList.remove('clickedColor')
        }
      })
      e.currentTarget.classList.add('clickedColor')
    }

    //Подсветка треугольников синим
    if(fatherGrandmother.current.classList.contains('clickedColor')) {
      treLeftGrandmother.current.classList.add('clickedTre') 
    } 
    if(fatherGrandfather.current.classList.contains('clickedColor')) {
      treLeftGrandfather.current.classList.add('clickedTre')
    }
    if(motherGrandmother.current.classList.contains('clickedColor')) {
      treRightGrandmother.current.classList.add('clickedTre')
    }
    if(motherGrandfather.current.classList.contains('clickedColor')) {
      treRightGrandfather.current.classList.add('clickedTre')
    }
    if(father.current.classList.contains('clickedColor')) {
      treFather.current.classList.add('clickedTre')
    }
    if(mother.current.classList.contains('clickedColor')) {
      treMother.current.classList.add('clickedTre')
    }
} 
  useEffect(() => {
    //Подсветка треугольников серым
    if(fatherGrandmother.current.classList.contains('fillColor')) treLeftGrandmother.current.classList.add('activeTre')
    if(fatherGrandfather.current.classList.contains('fillColor')) treLeftGrandfather.current.classList.add('activeTre')
    if(motherGrandmother.current.classList.contains('fillColor')) treRightGrandmother.current.classList.add('activeTre')
    if(motherGrandfather.current.classList.contains('fillColor')) treRightGrandfather.current.classList.add('activeTre')
    if(father.current.classList.contains('fillColor')) treFather.current.classList.add('activeTre')
    if(mother.current.classList.contains('fillColor')) treMother.current.classList.add('activeTre')

    //Подсветка конекторов у "Я"
    if (me.current.classList.contains('fillColor') && father.current.classList.contains('fillColor')) {
      meVerticalConnector.current.classList.add('clickedConnector')
      meLeftConnector.current.classList.add('clickedConnector')
    }
    if (me.current.classList.contains('fillColor') && mother.current.classList.contains('fillColor')) {
      meVerticalConnector.current.classList.add('clickedConnector')
      meRightConnector.current.classList.add('clickedConnector')
    }
    if (me.current.classList.contains('fillColor') && meSiblings.current.classList.contains('fillColor')) {
      meHorizontalConnector.current.classList.add('clickedConnector')
    } else if (meHorizontalConnector.current.classList.contains('clickedConnector')) {
      meHorizontalConnector.current.classList.remove('clickedConnector')
    }

    //Подсветка конекторов у "Отец"
    if (meVerticalConnector.current.classList.contains('clickedConnector') && fatherSiblings.current.classList.contains('fillColor')) {
      meLeftConnector.current.classList.add('clickedConnector')
      fatherRightConnector.current.classList.add('clickedConnector')
      fatherLeftConnector.current.classList.add('clickedConnector')
    }
    if (meVerticalConnector.current.classList.contains('clickedConnector') && fatherGrandmother.current.classList.contains('fillColor')) {
      meLeftConnector.current.classList.add('clickedConnector')
      fatherRightConnector.current.classList.add('clickedConnector')
      fatherVerticalConnector.current.classList.add('clickedConnector')
      agedFatherLeftConnector.current.classList.add('clickedConnector')
    }
    if (meVerticalConnector.current.classList.contains('clickedConnector') && fatherGrandfather.current.classList.contains('fillColor')) {
      meLeftConnector.current.classList.add('clickedConnector')
      fatherRightConnector.current.classList.add('clickedConnector')
      fatherVerticalConnector.current.classList.add('clickedConnector')
      agedFatherRightConnector.current.classList.add('clickedConnector')
    }

    //Подстветка конекторов у "Мать"
    if (meVerticalConnector.current.classList.contains('clickedConnector') && motherSiblings.current.classList.contains('fillColor')) {
      meRightConnector.current.classList.add('clickedConnector')
      motherRightConnector.current.classList.add('clickedConnector')
      motherLeftConnector.current.classList.add('clickedConnector')
    }
    if (meVerticalConnector.current.classList.contains('clickedConnector') && motherGrandmother.current.classList.contains('fillColor')) {
      meRightConnector.current.classList.add('clickedConnector')
      motherLeftConnector.current.classList.add('clickedConnector')
      motherVerticalConnector.current.classList.add('clickedConnector')
      agedMotherLeftConnector.current.classList.add('clickedConnector')
    }
    if (meVerticalConnector.current.classList.contains('clickedConnector') && motherGrandfather.current.classList.contains('fillColor')) {
      meRightConnector.current.classList.add('clickedConnector')
      motherLeftConnector.current.classList.add('clickedConnector')
      motherVerticalConnector.current.classList.add('clickedConnector')
      agedMotherRightConnector.current.classList.add('clickedConnector')
    }
  }, [])

  return (
      <div className="tree">
        <ul>
          <li>
            <div className="family">
              <ul>
                <li>
                  <UserProfile 
                    name={data[4].name}
                    illnesses={data[4].illnesses}
                    ref={fatherGrandmother}
                    varyingClass='leftSidePerson'
                    clickHandler={clickHandler}/>
                  <UserProfile 
                    name={data[5].name}
                    illnesses={data[5].illnesses}
                    ref={fatherGrandfather}
                    varyingClass='rightSidePerson'
                    clickHandler={clickHandler}/>
                </li>
                <li style={{ paddingLeft: '67px' }}>
                  <UserProfile 
                    name={data[6].name}
                    illnesses={data[6].illnesses}
                    ref={motherGrandmother}
                    varyingClass='leftSidePerson'
                    clickHandler={clickHandler}/>
                  <UserProfile 
                    name={data[7].name}
                    illnesses={data[7].illnesses}
                    ref={motherGrandfather}
                    varyingClass='rightSidePerson'
                    clickHandler={clickHandler}/>
                </li>
              </ul>

              <ul style={{height: '0'}}>
                <li>
                  <div className='tre treLeftGrandmother' ref={treLeftGrandmother}></div>
                  <div className='tre treLeftGrandfather' ref={treLeftGrandfather}></div>
                  <div className='tre treRightGrandmother' ref={treRightGrandmother}></div>
                  <div className='tre treRightGrandfather' ref={treRightGrandfather}></div>
                </li>
              </ul>

              <ul style={{ padding: '0' }}>
                <li >
                  <div className='connector agedFatherLeftConnector' ref={agedFatherLeftConnector}></div>
                  <div className='connector agedFatherRightConnector' ref={agedFatherRightConnector}></div>
                  <div className='connector agedMotherLeftConnector' ref={agedMotherLeftConnector}></div>
                  <div className='connector agedMotherRightConnector' ref={agedMotherRightConnector}></div>
                </li>
              </ul>
              
              <ul style={{ padding: '0' }}>
                <li>
                  <div className="connector fatherLeftConnector" ref={fatherLeftConnector}></div>
                  <div className='verticalConnector fatherVerticalConnector' ref={fatherVerticalConnector}></div>
                  <div className="connector fatherRightConnector" ref={fatherRightConnector}></div>
                </li>
                <li>
                  <div className="connector motherLeftConnector" ref={motherLeftConnector}></div>
                  <div className='verticalConnector motherVerticalConnector' ref={motherVerticalConnector}></div>
                  <div className="connector motherRightConnector" ref={motherRightConnector}></div>
                </li>
              </ul>

              <ul>
                <li>
                  <UserProfile 
                    name={data[9].name}
                    illnesses={data[9].illnesses}
                    ref={fatherSiblings}
                    varyingClass='leftSidePerson'
                    clickHandler={clickHandler}/>
                  <UserProfile 
                    name={data[2].name}
                    illnesses={data[2].illnesses}
                    ref={father}
                    varyingClass='rightSidePerson'
                    clickHandler={clickHandler}/>
                </li>
                <li style={{ paddingLeft: '67px' }}>
                  <UserProfile 
                    name={data[3].name}
                    illnesses={data[3].illnesses}
                    ref={mother}
                    varyingClass='leftSidePerson'
                    clickHandler={clickHandler}/>
                  <UserProfile 
                    name={data[10].name}
                    illnesses={data[10].illnesses}
                    ref={motherSiblings}
                    varyingClass='rightSidePerson'
                    clickHandler={clickHandler}/>
                </li>
              </ul>

              <ul style={{height: '0'}}>
                <li>
                  <div className='tre treFather' ref={treFather}></div>
                  <div className='tre treMother' ref={treMother}></div>
                </li>
              </ul>

              <ul style={{ padding: '0' }}>
                <li>
                  <div className='bottomConnector meLeftConnector' ref={meLeftConnector}></div>
                  <div className='meVerticalConnector' ref={meVerticalConnector}></div>
                  <div className='bottomConnector meRightConnector' ref={meRightConnector}></div>
                  <div className='meHorizontalConnector' ref={meHorizontalConnector}></div>
                </li>
              </ul>

              <ul>
                <li className='myselfBlock'>
                  <UserProfile 
                    name={data[1].name}
                    illnesses={data[1].illnesses}
                    ref={me}
                    varyingClass=''
                    clickHandler={clickHandler}/>
                  <UserProfile 
                    name={data[8].name}
                    illnesses={data[8].illnesses}
                    ref={meSiblings}
                    varyingClass='meSiblings'
                    clickHandler={clickHandler}/>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
  );
}
export default App;