import React, { useEffect } from 'react'
import './App.css';
import data from './data/data';

let App = () => {

  let clickHandler = (e) => {
    let people = document.querySelectorAll('.person')
    if (e.target.innerHTML.toLocaleLowerCase().indexOf('нет информации') === -1) {
      people.forEach((i) => {
        if (i.classList.contains('clickedColor')) {
          i.classList.remove('clickedColor')
        }
      })
      console.log(e.target)
      e.currentTarget.classList.add('clickedColor')
    }
  }

  useEffect(() => {
    let people = document.querySelectorAll('.person')
    people.forEach((i) => {
      let isIllness = i.innerHTML.toLocaleLowerCase().indexOf('нет информации')
      if (isIllness === -1) i.classList.add('fillColor')
    })
  }, [])


  // let testClick = (e) => {
  //   console.log(e.target.innerHTML.toLocaleLowerCase().indexOf('нет информации'))
  //   let filtered = people.forEach((i) => {
  //     let isIllness = i.innerHTML.toLocaleLowerCase().indexOf('нет информации')
  //     if (isIllness === -1) i.classList.add('fillColor')
  //   })
  //   return filtered
  // }

  return (
    <>
      <div className="tree">
        <ul>
          <li>
            <div className="family">

              <ul>
                <li>
                  <div onClick={clickHandler} className="person leftSidePerson">
                    <div className="name">{data[4].name} <br />{data[4].illnesses.length > 0 ? data[4].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                  <div onClick={clickHandler} className="person rightSidePerson">
                    <div className="name grandfather">{data[5].name} <br />{data[5].illnesses.length > 0 ? data[5].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                </li>
              
                <li style={{paddingLeft: '67px'}}>
                  <div onClick={clickHandler} className="person leftSidePerson">
                    <div className="name grandmother">{data[6].name} <br />{data[6].illnesses.length > 0 ? data[6].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                  <div onClick={clickHandler} className="person rightSidePerson">
                    <div className="name">{data[7].name} <br />{data[7].illnesses.length > 0 ? data[7].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                </li>
              </ul>

              <ul style={{ padding: '0' }}>
                <li >
                  <div className='connector grandmotherLeftConnector'></div>
                  <div className='connector grandmotherRightConnector'></div>
                  <div className='connector grandfatherLeftConnector'></div>
                  <div className='connector grandfatherRightConnector'></div>
                </li>
              </ul>

               <ul style={{ padding: '0' }}>
                <li>

                  <div className="connector fatherLeftConnector">

                  </div>
                  <div className='verticalConnector fatherVerticalConnector'></div>
                  <div className="connector fatherRightConnector">

                  </div>

                </li>

                <li>
                  <div className="connector motherLeftConnector"></div>
                  <div className='verticalConnector motherVerticalConnector'></div>
                  <div className="connector motherRightConnector"></div>
                </li>
              </ul>

              <ul>
                <li>
                  <div onClick={clickHandler} className="person leftSidePerson">
                    <div className="name">{data[9].name} <br />{data[9].illnesses.length > 0 ? data[9].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                  <div onClick={clickHandler} className="person rightSidePerson">
                    <div className="name father">{data[2].name} <br />{data[2].illnesses.length > 0 ? data[2].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                </li>
                <li style={{paddingLeft: '67px'}}>
                  <div onClick={clickHandler} className="person leftSidePerson">
                    <div className="name mother">{data[3].name} <br />{data[3].illnesses.length > 0 ? data[3].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                  <div onClick={clickHandler} className="person rightSidePerson">
                    <div className="name">{data[10].name} <br />{data[10].illnesses.length > 0 ? data[10].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                </li>
              </ul> 

              <ul style={{ padding: '0' }}>
                <li>
                  <div className='bottomConnector meLeftConnector'></div>
                  <div className='meVerticalConnector'></div>
                  <div className='bottomConnector meRightConnector'></div>
                  <div className='meHorizontalConnector'></div>
                  
                </li>
              </ul>

              <ul>
                <li className='myselfBlock'>
                  <div onClick={clickHandler} className="person clickedColor">
                    <div className="name">{data[1].name} <br />{data[1].illnesses.length > 0 ? data[1].illnesses.length + ' заболевание' : 'Нет информации'}</div>
                  </div>
                  
                  <div onClick={clickHandler} className="person mySiblings">
                    <div className="name">{data[8].name} <br />{data[8].illnesses.length > 0 ? data[8].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                </li>
              </ul>
              

            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
