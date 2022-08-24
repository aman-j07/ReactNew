import style from './Third.module.css'
import picDhamaal from './dhamaal.png'
import piclaptop from './laptop.png'
import picMobile from './mobile.png'
const Third=()=>{
  const left="<";
  const right=">";
    return (
        <div id={style.third} className={style.slider}>
            <button id={style.btnLeft}>{left}</button><button id={style.btnRight}>{right}</button>  
            <div id={style.container}>          
              <img src={picMobile} className={style.slide} />
              <img src={piclaptop} className={style.slide} />
              <img src={picDhamaal} className={style.slide} /></div>
      </div>
    )
}

export default Third