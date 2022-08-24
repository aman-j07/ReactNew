import style from "./Second.module.css";
const Second=()=>{
    return (
      <div id={style.second}>
        <h1>The power of Premium</h1>
        <div id={style.powers}>
          <div><i id={style.icons} className="fa-solid fa-comment-slash"></i><h3>Ad-free music listening.</h3><p>Enjoy Uninterrupted music.</p></div>
          <div><i id={style.icons} className="fa-solid fa-music"></i> <h3>Offline playback.</h3><p>Save your data by listening offline.</p></div>
          <div><i id={style.iconsS} className="fa-solid fa-house-laptop"></i><h3>Play everywhere.</h3><p>Listen on your speakers, </p><p>TVs and other favorite devices</p></div>
          <div><i id={style.icons} className="fa-solid fa-circle-play"></i><h3>Pay your way.</h3><p>Prepay with PayTM, UPI and more.</p></div>
        </div>
      </div>
    )
}

export default Second;
