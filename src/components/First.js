import styles from './First.module.css'
const First=()=>{
    return (
      <div className={styles.first}>
        <div id={styles.header}>
            <div id={styles.headerLeft}><i className="fa-brands fa-spotify" id={styles.iconSpotify}></i>
            <a href='#'  className={styles.navbarItems} id={styles.aSpotify}>Spotify</a></div>
          <div id={styles.headerRight}>  <a href='#'  className={styles.navbarItems}>Premium</a>
            <a href='#'  className={styles.navbarItems}>Support</a>
            <a href='#'  className={styles.navbarItems}>Download</a>
            <p id={styles.pipe}>|</p>
            <a href='#'  className={styles.navbarItems}>Sign Up</a>
            <a href='#'  className={styles.navbarItems}>Log In</a></div>
        </div>
        <div id={styles.offers}>
            <h1>Get Premium free or 1 month.</h1>
            <p>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
            <div id={styles.offersButtons}><button id={styles.btnStarted}>GET STARTED</button><button id={styles.btnPlans}>SEE OTHER PLANS</button></div>
            <div id={styles.tAndC}><a href='#'>Terms and conditions apply.</a><p> 1 month free not available for users who have already tried Premium</p></div>
        </div>
        <div id={styles.miniPlan}>
            <h1>Introducing Premium Mini</h1>
            <p>₹7 for 1 day.</p>
            <p>₹25 for 1 week.</p>
            <button id={styles.btnMini}>GET MINI</button>
            <a href='#' id={styles.aTAndC}>Terms and conditions apply</a>
        </div>
      </div>
    )
  }

export default First