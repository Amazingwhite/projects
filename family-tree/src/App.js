import React, { useEffect } from 'react'
import './App.css';
import data from './data/data';

let App = () => {

  let clickHandler = (e) => {
    let people = document.querySelectorAll('.person')
    if(e.target.innerHTML.toLocaleLowerCase().indexOf('нет информации') === -1) {
      people.forEach( (i) => {
        if(i.classList.contains('clickedColor')) {
          i.classList.remove('clickedColor')
        }
      })
      e.currentTarget.classList.add('clickedColor')
      e.currentTarget.classList.add('underline')
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
                  <div onClick={clickHandler} className="person child">
                    <div className="name">{data[4].name} <br />{data[4].illnesses.length > 0 ? data[4].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                  <div onClick={clickHandler} className="person child">
                    <div className="name grandfather">{data[5].name} <br />{data[5].illnesses.length > 0 ? data[5].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                </li>
                <li>
                  <div onClick={clickHandler} className="person child">
                    <div className="name grandmother">{data[6].name} <br />{data[6].illnesses.length > 0 ? data[6].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                  <div onClick={clickHandler} className="person child">
                    <div className="name">{data[7].name} <br />{data[7].illnesses.length > 0 ? data[7].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                </li>
              </ul>

              <ul>
                <li className="fatherBlock" style={{}}>
                  <div onClick={clickHandler} className="person child">
                    <div className="name">{data[9].name} <br />{data[9].illnesses.length > 0 ? data[9].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                  <div onClick={clickHandler} className="person child test1">
                    <div className="name father">{data[2].name} <br />{data[2].illnesses.length > 0 ? data[2].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                </li>
                <li className="motherBlock">
                  <div onClick={clickHandler} className="person child test1">
                    <div className="name mother">{data[3].name} <br />{data[3].illnesses.length > 0 ? data[3].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                  <div onClick={clickHandler} className="person child">
                    <div className="name">{data[10].name} <br />{data[10].illnesses.length > 0 ? data[10].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                </li>
              </ul>

              <ul>
                <div className="family">
                  <div onClick={clickHandler} className="person child clickedColor">
                    <div  className="name">{data[1].name} <br />{data[1].illnesses.length > 0 ? data[1].illnesses.length + ' заболевание' : 'Нет информации'}</div>
                  </div>
                  <div onClick={clickHandler} className="person spouse">
                    <div className="name">{data[8].name} <br />{data[8].illnesses.length > 0 ? data[8].illnesses.length + ' заболевания' : 'Нет информации'}</div>
                  </div>
                </div>
              </ul>

            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
