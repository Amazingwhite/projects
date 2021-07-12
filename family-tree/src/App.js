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
      e.currentTarget.classList.add('clickedColor')
    }
  }

  useEffect(() => {
    let people = document.querySelectorAll('.person')
    people.forEach((i) => {
      let isIllness = i.innerHTML.toLocaleLowerCase().indexOf('нет информации')
      if (isIllness === -1) {
        i.classList.add('fillColor')
        i.classList.add('activeText')
      }
    })

    //Подсветка конекторов у "Я"

    if (document.querySelector('.me').classList.contains('fillColor') && document.querySelector('.father').classList.contains('fillColor')) {
      document.querySelector('.meVerticalConnector').classList.add('clickedConnector')
      document.querySelector('.meLeftConnector').classList.add('clickedConnector')
    }

    if (document.querySelector('.me').classList.contains('fillColor') && document.querySelector('.mother').classList.contains('fillColor')) {
      document.querySelector('.meVerticalConnector').classList.add('clickedConnector')
      document.querySelector('.meRightConnector').classList.add('clickedConnector')
    }

    if (document.querySelector('.me').classList.contains('fillColor') && document.querySelector('.meSiblings').classList.contains('fillColor')) {
      document.querySelector('.meHorizontalConnector').classList.add('clickedConnector')
    } else if (document.querySelector('.meHorizontalConnector').classList.contains('clickedConnector')) {
      console.log('elseif отработал')
      document.querySelector('.meHorizontalConnector').classList.remove('clickedConnector')
    }



    //Подсветка конекторов у "Отец"

    if (document.querySelector('.meVerticalConnector').classList.contains('clickedConnector') && document.querySelector('.fatherSiblings').classList.contains('fillColor')) {
      document.querySelector('.meLeftConnector').classList.add('clickedConnector')
      document.querySelector('.fatherRightConnector').classList.add('clickedConnector')
      document.querySelector('.fatherRightConnector').classList.add('clickedConnector')
      document.querySelector('.fatherLeftConnector').classList.add('clickedConnector')
    }

    if (document.querySelector('.meVerticalConnector').classList.contains('clickedConnector') && document.querySelector('.fatherGrandmother').classList.contains('fillColor')) {
      document.querySelector('.meLeftConnector').classList.add('clickedConnector')
      document.querySelector('.fatherRightConnector').classList.add('clickedConnector')
      document.querySelector('.fatherVerticalConnector').classList.add('clickedConnector')
      document.querySelector('.agedFatherLeftConnector').classList.add('clickedConnector')
    }

    if (document.querySelector('.meVerticalConnector').classList.contains('clickedConnector') && document.querySelector('.fatherGrandfather').classList.contains('fillColor')) {
      document.querySelector('.meLeftConnector').classList.add('clickedConnector')
      document.querySelector('.fatherRightConnector').classList.add('clickedConnector')
      document.querySelector('.fatherVerticalConnector').classList.add('clickedConnector')
      document.querySelector('.agedFatherRightConnector').classList.add('clickedConnector')
    }

    //Подстветка конекторов у "Мать"

    if (document.querySelector('.meVerticalConnector').classList.contains('clickedConnector') && document.querySelector('.motherSiblings').classList.contains('fillColor')) {
      document.querySelector('.meRightConnector').classList.add('clickedConnector')
      document.querySelector('.motherRightConnector').classList.add('clickedConnector')
      document.querySelector('.motherRightConnector').classList.add('clickedConnector')
      document.querySelector('.motherLeftConnector').classList.add('clickedConnector')
    }

    if (document.querySelector('.meVerticalConnector').classList.contains('clickedConnector') && document.querySelector('.motherGrandmother').classList.contains('fillColor')) {
      document.querySelector('.meRightConnector').classList.add('clickedConnector')
      document.querySelector('.motherLeftConnector').classList.add('clickedConnector')
      document.querySelector('.motherVerticalConnector').classList.add('clickedConnector')
      document.querySelector('.agedMotherLeftConnector').classList.add('clickedConnector')
    }

    if (document.querySelector('.meVerticalConnector').classList.contains('clickedConnector') && document.querySelector('.motherGrandfather').classList.contains('fillColor')) {
      document.querySelector('.meRightConnector').classList.add('clickedConnector')
      document.querySelector('.motherLeftConnector').classList.add('clickedConnector')
      document.querySelector('.motherVerticalConnector').classList.add('clickedConnector')
      document.querySelector('.agedMotherRightConnector').classList.add('clickedConnector')
    }

  }, [])

  return (
    <>
      <div className="tree">
        <ul>
          <li>
            <div className="family">
              <ul>
                <li>
                  <div onClick={clickHandler} className="person leftSidePerson fatherGrandmother">
                    <div className="name">
                      <p className='personTitle'>{data[4].name}</p>
                      <p className='personInfo'>{data[4].illnesses.length > 0 ? data[4].illnesses.length + ' заболевания' : 'Нет информации'}</p>
                    </div>
                  </div>
                  <div onClick={clickHandler} className="person rightSidePerson fatherGrandfather">
                    <div className="name">
                      <p className='personTitle'>{data[5].name}</p>
                      <p className='personInfo'>{data[5].illnesses.length > 0 ? data[5].illnesses.length + ' заболевания' : 'Нет информации'}</p>
                    </div>
                  </div>
                </li>

                <li style={{ paddingLeft: '67px' }}>
                  <div onClick={clickHandler} className="person leftSidePerson motherGrandmother">
                    <div className="name">
                      <p className='personTitle'>{data[6].name}</p>
                      <p className='personInfo'>{data[6].illnesses.length > 0 ? data[6].illnesses.length + ' заболевания' : 'Нет информации'}</p>
                    </div>
                
                  </div>
                  
                  <div onClick={clickHandler} className="person rightSidePerson motherGrandfather">
                    <div className="name">
                      <p className='personTitle'>{data[7].name}</p>
                      <p className='personInfo'>{data[7].illnesses.length > 0 ? data[7].illnesses.length + ' заболевания' : 'Нет информации'}</p>
                    </div>
                  </div>
                </li>
                
              </ul>

              <ul style={{ padding: '0' }}>
                <li >
                <div className='tri'></div>
                  <div className='connector agedFatherLeftConnector'></div>
                  <div className='connector agedFatherRightConnector'></div>
                  <div className='connector agedMotherLeftConnector'></div>
                  <div className='connector agedMotherRightConnector'></div>
                </li>
              </ul>
              
              <ul style={{ padding: '0' }}>
                <li>
                  <div className="connector fatherLeftConnector"></div>
                  <div className='verticalConnector fatherVerticalConnector'></div>
                  <div className="connector fatherRightConnector"></div>
                </li>

                <li>
                  <div className="connector motherLeftConnector"></div>
                  <div className='verticalConnector motherVerticalConnector'></div>
                  <div className="connector motherRightConnector"></div>
                </li>
              </ul>

              <ul>
                <li>
                  <div onClick={clickHandler} className="person leftSidePerson fatherSiblings">
                    <div className="name">
                      <p className='personTitle'>{data[9].name}</p>
                      <p className='personInfo'>{data[9].illnesses.length > 0 ? data[9].illnesses.length + ' заболевания' : 'Нет информации'}</p>
                    </div>
                  </div>
                  <div onClick={clickHandler} className="person rightSidePerson father">
                    <div className="name">
                      <p className='personTitle'>{data[2].name}</p>
                      <p className='personInfo'>{data[2].illnesses.length > 0 ? data[2].illnesses.length + ' заболевания' : 'Нет информации'}</p>
                    </div>
                  </div>
                </li>
                <li style={{ paddingLeft: '67px' }}>
                  <div onClick={clickHandler} className="person leftSidePerson mother">
                    <div className="name">
                      <p className='personTitle'>{data[3].name}</p>
                      <p className='personInfo'>{data[3].illnesses.length > 0 ? data[3].illnesses.length + ' заболевания' : 'Нет информации'}</p>
                    </div>
                  </div>
                  <div onClick={clickHandler} className="person rightSidePerson motherSiblings">
                    <div className="name">
                      <p className='personTitle'> {data[10].name}</p>
                      <p className='personInfo'> {data[10].illnesses.length > 0 ? data[10].illnesses.length + ' заболевания' : 'Нет информации'}</p>
                    </div>
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
                  <div onClick={clickHandler} className="person clickedColor me">

                    <p className='personTitle'>{data[1].name} </p>
                    <p className='personInfo'>{data[1].illnesses.length > 0 ? data[1].illnesses.length + ' заболевание' : 'Нет информации'}</p>

                  </div>

                  <div onClick={clickHandler} className="person meSiblings">

                    <p className='personTitle'>{data[8].name}</p>
                    <p className='personInfo'>{data[8].illnesses.length > 0 ? data[8].illnesses.length + ' заболевания' : 'Нет информации'}</p>

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