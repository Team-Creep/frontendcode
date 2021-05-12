import React from "react";

import "../../styles/connect.scss"



export default function Connect() {

  return (
    <div className="targetSlides"> 
        <h2 className="title">Creep on us.</h2>
        <div className="grid_container">
            <section className="grid__child-one">
            <a href="https://www.linkedin.com/in/audrenavacirca"><img alt="" className="avatar audrena" src="./assets/audrena.png"></img></a>
                <img alt="" className="qr" src="./assets/audrenaQR.png"></img>
                <p className="title">Audrena Vacirca</p>
            </section>
            <section className="grid__child-two">
                <a href="https://www.linkedin.com/in/graciechoi"><img alt="" className="avatar grace" src="./assets/grace.png"></img></a>
                <img alt="" className="qr" src="./assets/graceQR.png"></img>
                <p className="title">Grace Choi</p>
            </section>
            <section className="grid__child-three">
                <a href="https://www.linkedin.com/in/nebiyu-kifle"><img alt="" className="avatar nebiyu" src="./assets/nebiyu.png"></img></a>
                <img alt="" className="qr" src="./assets/nebiyuQR.png"></img>
                <p className="title">Nebiyu Kifel</p>
            </section>
            <section className="grid__child-four">
            <a href="https://www.linkedin.com/in/sianculligan"><img alt="" className="avatar sian" src="./assets/sian.png"></img></a>
                <img alt="" className="qr" src="./assets/sianQR.png"></img>
                <p className="title">Sian Cullian</p>
            </section>

        </div>
    </div>
  );
}