import style from './Sixth.module.css'
const Sixth=()=>{
    return (
      <div id={style.sixth}>
        <div id={style.footerTop}>
        <div id={style.footerIcon}><i className="fa-brands fa-spotify" id={style.iconSpotify}></i><a>Spotify</a></div>
        <div id={style.links}>
            <ul>
                <li>COMPANY</li>
                <li>About</li>
                <li>Jobs</li>
                <li>For the Record</li>
            </ul>
            <ul>
                <li>COMMUNITIES</li>
                <li>For Artist</li>
                <li>Developers</li>
                <li>Advertising</li>
                <li>Investors</li>
                <li>Vendors</li>
            </ul>
            <ul>
                <li>USEFUL LINKS</li>
                <li>Support</li>
                <li>Web Player</li>
                <li>Free Mobile App</li>
            </ul>
        </div>
        <div id={style.socialMediaIcons}>
        <i id={style.socialMediaIcon} class="fa-brands fa-instagram"></i>
        <i id={style.socialMediaIcon} class="fa-brands fa-twitter"></i>
        <i id={style.socialMediaIcon} class="fa-brands fa-facebook"></i>
        </div>
       </div>
       <div id={style.footerBottom}>
           <div id={style.footerBottomLeft}>
           <a href='#'>Legal</a>
           <a href='#'>Privacy Center</a>
           <a href='#'>Privacy Policy</a>
           <a href='#'>Cookies</a>
           <a href='#'>About Ads</a></div>
           <div id={style.footerBottomRight}><a href="#"><i class="fa-solid fa-earth-asia"></i> India [English]</a><p>© 2022 Spotify All</p></div>
        </div>
      </div>
    )
}

export default Sixth