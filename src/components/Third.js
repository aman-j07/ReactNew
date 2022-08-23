import React, { Component } from 'react'
import style from './Third.module.css'
import picDhamaal from './dhamaal.png'
import piclaptop from './laptop.png'
import picMobile from './mobile.png'
class Third extends Component {
  left="<";
  right=">";
  render() {
    console.log(this.arr)
    return (
        <div id={style.third} className={style.slider}>
            <button id={style.btnLeft}>{this.left}</button><button id={style.btnRight}>{this.right}</button>  
            <div id={style.container}>          
              <img src={picMobile} className={style.slide} />
              <img src={piclaptop} className={style.slide} />
              <img src={picDhamaal} className={style.slide} /></div>
      </div>
    )
  }
}

export default Third