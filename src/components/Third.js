import style from './Third.module.css'
import bollywood from './img/bollywoodbutter.png'
import punjabi from './img/punjabi101.png'
import tollywood from './img/tollywoodpearls.png'
import hothits from './img/hothits.png'
const Third=()=>{
    return (
      <div id={style.third}>
         <h1>Connect with music culture</h1>
        <div id={style.playlists}>
          <div><img alt="null" src={bollywood}></img><h3>Bollywood Butter</h3><p>The finest quality bollywood music</p></div>
          <div><img alt="null" src={punjabi}></img><h3>Punjabi 101</h3><p>The Ultimate Punjabi Hits</p></div>
          <div><img alt="null" src={tollywood}></img><h3>Tollywood Pearls</h3><p>The finest music from Telugu films</p></div>
          <div><img alt="null" src={hothits}></img><h3>Hot Hits India</h3><p>50 hottest hits from acros the globe</p></div>
        </div>
      </div>
    )
}

export default Third