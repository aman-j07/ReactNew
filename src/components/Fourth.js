import style from './Fourth.module.css'
const Fourth=()=>{
    return (
      <div id={style.fourth}>
        <h1>Pick your Premium</h1>
        <p>Listen without limits on your phone, speaker and other devices.</p>
        <div id={style.paymentMethods}>
             <img alt="null" src="https://i0.wp.com/financebuddha.com/blog/wp-content/uploads/2016/12/23155635/UPI1.jpg?fit=945%2C709&ssl=1"></img>
             <img alt="null" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png"></img>
             <img alt="null" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png"></img>
             <img alt="null" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"></img>
             <img alt="null" src="https://cdn-icons-png.flaticon.com/512/179/179431.png"></img>
             <img alt="null" src="https://1000logos.net/wp-content/uploads/2021/05/Diners-Club-International-logo.png"></img></div>
        <div id={style.cards}>
            <div className={style.card}><div id={style.oneTime}>One-time plans available</div>
              <h3>Mini</h3>
              <p>From ₹7/day</p><p style={{marginBottom:"14%"}}>1 account</p>
              <hr></hr>
              <div className={style.divList}><div className={style.checkList}><i id={style.checkIcon} class="fa-solid fa-check"></i><p>Ad-free music listening on mobile</p></div></div>
              <button id={style.viewPlans}>VIEW PLANS</button>
              <a id={style.tAndC}>Terms and conditions apply.</a>
            </div>
            <div className={style.card}><div id={style.monthFree}>1 month free</div><div id={style.oneTime}>One-time plans available</div>
              <h3>Individual</h3>
              <p>From ₹119/month after offer period</p><p>1 account</p>
              <hr></hr>
              <div className={style.divList}>
                <div className={style.checkList}><i id={style.checkIcon} class="fa-solid fa-check"></i><p>Ad-free music listening</p></div>
                <div className={style.checkList}><i id={style.checkIcon} class="fa-solid fa-check"></i><p>Group Session</p></div>
                <div className={style.checkList}><i id={style.checkIcon} class="fa-solid fa-check"></i><p>Download 10K songs/devices on 5 devices</p></div>
              </div>
              <button id={style.viewPlans}>VIEW PLANS</button>
              <div id={style.divTAndC}><a id={style.tAndC}>Terms and conditions apply.</a><p>1 month free not available for users who have already tried Premium</p></div>
            </div>
            <div className={style.card}>
            <div id={style.monthFree}>1 month free</div><div id={style.oneTime}>One-time plans available</div>
              <h3>Duo</h3>
              <p>From ₹149/month after offer period</p><p>2 accounts</p>
              <hr></hr>
              <div className={style.divList}>
                <div className={style.checkList}><i id={style.checkIcon} class="fa-solid fa-check"></i><p>For couples who live together</p></div>
                <div className={style.checkList}><i id={style.checkIcon} class="fa-solid fa-check"></i><p>Ad-free music listening</p></div>
                <div className={style.checkList}><i id={style.checkIcon} class="fa-solid fa-check"></i><p>Group Session</p></div>
                <div className={style.checkList}><i id={style.checkIcon} class="fa-solid fa-check"></i><p>Download 10K songs/devices on 5 devices</p></div>
              </div>
              <button id={style.viewPlans}>VIEW PLANS</button>
              <div id={style.divTAndC}><a id={style.tAndC}>Terms and conditions apply.</a><p>1 month free not available for users who have already tried Premium</p></div>
            </div>
            <div className={style.card}>
            <div id={style.monthFree}>1 month free</div><div id={style.oneTime}>One-time plans available</div>
              <h3>Family</h3>
              <p>From ₹179/month after offer period</p><p>6 accounts</p>
              <hr></hr>
              <div className={style.divList}>
                <div className={style.checkList}><i id={style.checkIcon} class="fa-solid fa-check"></i><p>For family who live together</p></div>
                <div className={style.checkList}><i id={style.checkIcon} class="fa-solid fa-check"></i><p>Block explicit music</p></div>
                <div className={style.checkList}><i id={style.checkIcon} class="fa-solid fa-check"></i><p>Ad-free music listening</p></div>
                <div className={style.checkList}><i id={style.checkIcon} class="fa-solid fa-check"></i><p>Group Session</p></div>
                <div className={style.checkList}><i id={style.checkIcon} class="fa-solid fa-check"></i><p>Download 10K songs/devices on 5 devices</p></div>
              </div>
              <button id={style.viewPlans}>VIEW PLANS</button>
              <div id={style.divTAndC}><a id={style.tAndC}>Terms and conditions apply.</a><p>1 month free not available for users who have already tried Premium</p></div>
            </div>
        </div>
        <div id={style.spldiscount}>Special discount for eligible students in university<button id={style.btnLearnMore}>LEARN MORE</button></div>
      </div>
    )
  }

export default Fourth