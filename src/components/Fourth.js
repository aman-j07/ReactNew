import React, { Component } from 'react'
import style from './Fourth.module.css'
import pic from './ad.png'
class Fourth extends Component {
    left=">"
  render() {
    return (
      <div id={style.fourth}>
        <div id={style.fourthLeft}>
                <div id={style.divDeal}>Deal of the Day <i id={style.iconTimer} class="fa-solid fa-clock"></i><p id={style.paraTimer}>23 : 10 : 50 Left</p><button id={style.btnView}>VIEW ALL</button></div>
                     <div id={style.divDeals}>
                
                <div><img src="https://rukminim1.flixcart.com/image/150/150/kyag87k0/computer/7/r/u/raider-ge66-12ugs-gaming-laptop-msi-original-imagakb9zw7gqzcm.jpeg?q=70"></img><p id={style.dealName}>Laptops</p><p id={style.dealOffer}>Up to 55% off</p><p id={style.dealMessage}>Top Deals</p></div>
                <div><img src="https://rukminim1.flixcart.com/image/150/150/printer/k/r/f/canon-mg2470-original-imadqasfqaktjbz5.jpeg?q=70"></img><p id={style.dealName}>Printers</p><p id={style.dealOffer}>Up to 55% off</p><p id={style.dealMessage}>Top Deals</p></div>
                <div><img src="https://rukminim1.flixcart.com/image/150/150/ks6ef0w0/tripod/tripod/4/d/c/nz-tpd-3110-nainz-original-imag5svcdbqxyas6.jpeg?q=70"></img><p id={style.dealName}>Tripods</p><p id={style.dealOffer}>Up to 55% off</p><p id={style.dealMessage}>Top Deals</p></div>
                <div><img src="https://rukminim1.flixcart.com/image/150/150/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70"></img><p id={style.dealName}>Projectors</p><p id={style.dealOffer}>Up to 55% off</p><p id={style.dealMessage}>Top Deals</p></div>
                <div><img src="https://rukminim1.flixcart.com/image/150/150/l3uhvgw0/cycle/n/z/c/torro-26t-26-16-montra-72-21-gear-original-imagevzncygdd8ah.jpeg?q=70"></img><p id={style.dealName}>Bicycles</p><p id={style.dealOffer}>Up to 55% off</p><p id={style.dealMessage}>Top Deals</p></div>
                <div><img src="https://rukminim1.flixcart.com/image/150/150/ksdjma80/microphone/m/d/d/au-400-maono-original-imag5yh9g9nnz7kz.jpeg?q=70"></img><p id={style.dealName}>Microphones</p><p id={style.dealOffer}>Up to 55% off</p><p id={style.dealMessage}>Top Deals</p></div>
                <div><img src="https://rukminim1.flixcart.com/image/150/150/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70"></img><p id={style.dealName}>Stationary</p><p id={style.dealOffer}>Up to 55% off</p><p id={style.dealMessage}>Top Deals</p></div>
                <button id={style.btnSlide}>{this.left}</button>
                <div><img src="https://rukminim1.flixcart.com/image/150/150/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70"></img><p id={style.dealName}>Gym Equipments</p><p id={style.dealOffer}>Up to 55% off</p><p id={style.dealMessage}>Top Deals</p></div>
                </div>
        </div>
        <div id={style.fourthRight}><img src={pic}></img></div>
      </div>
    )
  }
}

export default Fourth