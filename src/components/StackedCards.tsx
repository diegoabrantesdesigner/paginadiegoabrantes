
import React from 'react';

export default function StackedCards() {
  const htmlContent = `
    <!-- FPPRO - HEITOR FERREIRA © COMPONENTS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    
    <div class="card-efeitoxpaix">
      <div class="card-efeitoxpai">

        <!-- CARD 1: Gráfico -->    
        <div class="card-efeitox">
          <div class="card-efeitoxcontent">  
            <div class="fp-iconcardwrapperx">
              <div class="fp-icon-fax">
                <i class="fa-solid fa-chart-line"></i>
              </div>
            </div>
            <h3 class="headcard2">Conversão</h3>
            <p class="descriptioncard">Estrutura de conversão<br> testada e validada para<br> maximizar seus lucros.</p>
          </div>
        </div>

        <!-- CARD 2: Escudo -->    
        <div class="card-efeitox">
          <div class="card-efeitoxcontent">  
            <div class="fp-iconcardwrapperx">
              <div class="fp-icon-fax">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
            </div>
            <h3 class="headcard2">Autoridade</h3>
            <p class="descriptioncard">Elementos de autoridade<br> e credibilidade que geram<br> confiança imediata.</p>
          </div>
        </div>

        <!-- CARD 3: Relógio -->    
        <div class="card-efeitox">
          <div class="card-efeitoxcontent">  
            <div class="fp-iconcardwrapperx">
              <div class="fp-icon-fax">
                <i class="fa-solid fa-clock"></i>
              </div>
            </div>
            <h3 class="headcard2">Agilidade</h3>
            <p class="descriptioncard">Entrega no prazo<br> combinado, sem atrasos<br> e com total transparência.</p>
          </div>
        </div>

        <!-- CARD 4: Diamante -->    
        <div class="card-efeitox x">
          <div class="card-efeitoxcontent">  
            <div class="fp-iconcardwrapperx">
              <div class="fp-icon-fax">
                <i class="fa-solid fa-gem"></i>
              </div>
            </div>
            <h3 class="headcard2">Premium</h3>
            <p class="descriptioncard">Páginas ou lojas<br> premium construídas do zero<br> com design exclusivo.</p>
          </div>
        </div>

      </div>
    </div>

    <style>
      :root {
        --fpcardinteractionebordercolor: #656E7C; 
        --fpcardinteractioneblurcolor: #E4F4FF; 
        --fpcardinteractioneheadfont: "Syne", sans-serif;
        --fpcardinteractioneheadcolor: #FFFFFF; 
        --fpcardinteractionedescriptionfont: "Inter Tight", sans-serif;
        --fpcardinteractionedescriptioncolor: #98A7AF; 
        --fpcardinteractioneiconsbackground: #101213;
        --fpcardbackground: #18242F;
      }

      .fp-iconcardwrapperx {
        width: 90px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        background: var(--fpcardinteractioneiconsbackground);
        border: 2px solid var(--fpcardinteractionebordercolor);
        filter: drop-shadow(0px 0px 30px rgba(101, 110, 124, 0.3));
        margin-bottom: 20px;
      }
      .fp-icon-fax {
        font-size: 32px;
        color: var(--fpcardinteractioneheadcolor);
      }

      .headcard2 {
        display: inline-block;
        font-family: var(--fpcardinteractioneheadfont);
        font-weight: 600;
        line-height: 1.2em;
        font-size: 36px;
        text-align: start;
        color: var(--fpcardinteractioneheadcolor);
        margin: 0;
        user-select: none;
        word-break: break-word;
      }
      .descriptioncard {
        display: inline-block;
        font-family: var(--fpcardinteractionedescriptionfont);
        font-weight: 400;
        line-height: 1.2em;
        font-size: 16px;
        text-align: start;
        color: var(--fpcardinteractionedescriptioncolor);
        margin: 0;
        user-select: none;
        word-break: break-word;
      }
      .card-efeitoxpai {
        position: relative;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        width: 100%;
        height: auto;
        padding: 0px;
        justify-content: center;
        align-items: stretch;
        gap: 0px;
        transition: 0.5s;
        align-self: center;
      }
      .card-efeitoxpaix {
        position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 100%;
        height: auto;
        padding: 0px;
        margin: 40px 0px;
        justify-content: center;
        align-items: center;
        gap: 0px;
        padding: 0px 0px;
        z-index: 10;
        -webkit-tap-highlight-color: transparent;
        will-change: filter, box-shadow;
      }
      .x {
        margin-right: 0px !important;
      }
      .card-efeitox {
        position: relative;
        margin-right: -200px;
        width: 400px !important;
        overflow: hidden;
        border-radius: 20px;
        background: var(--fpcardbackground);
        box-shadow: -20px 20px 35px 20px rgba(0,0,0,0.85);
        transition: 0.5s !important;
        will-change: filter, box-shadow;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .card-efeitoxcontent {
        overflow: hidden;
        padding: 80px 40px;
        will-change: filter, box-shadow;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .card-efeitox:hover {
        margin-right: -20px;
        transform: rotate(-5deg) translatey(-50px);
        z-index: 20;
      }
      .card-efeitoxcontent::after {
        content: "";
        position: absolute;
        top: 0%;
        left: 50%;
        opacity: 0.4;
        width: 300px;
        height: 200px;
        transform: translate(-50%, -50%);
        background: var(--fpcardinteractioneblurcolor);
        border-radius: 100%;
        filter: blur(40px);
        transition: 1s;
        will-change: filter, opacity;
      }
      .card-efeitoxcontent:hover:after {
        opacity: 0.7;
      }
      .card-efeitox::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 2px;
        border-radius: inherit;
        background: linear-gradient(to bottom, var(--fpcardinteractionebordercolor), #101213);
        -webkit-mask: linear-gradient(var(--fpcardinteractionebordercolor) 0 0) content-box, linear-gradient(var(--fpcardinteractionebordercolor) 0 0);
        mask: linear-gradient(var(--fpcardinteractionebordercolor) 0 0) content-box, linear-gradient(var(--fpcardinteractionebordercolor) 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      }
      @media(max-width: 1024px) {
        .card-efeitox {
          width: 300px !important;
          margin-right: 0px;
          margin-bottom: -230px;
        }
        .x {
          margin-bottom: 0px !important;
        }
        .card-efeitoxcontent {
          padding: 60px 30px;
          padding-top: 40px;
        }
        .card-efeitox:hover {
          margin-right: 0px;
          transform: rotate(0deg) translatey(-250px);
          z-index: 50;
        }
        .x:hover {
          margin-right: 0px;
          transform: rotate(0deg) translatey(0px);
        }
        .card-efeitoxpai {
          flex-direction: column;
          align-items: center;
        }
        .fp-iconcardwrapperx {
          width: 80px;
          height: 80px;
          border-radius: 15px;
          margin-bottom: 20px;
        }
        .fp-icon-fax {
          font-size: 32px;
        }
      }
    </style>
  `;

  return (
    <section className="bg-bg-dark py-20 overflow-hidden">
      <div className="container-max px-4">
        <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-white text-center mb-12">
          O que você recebe
        </h2>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </section>
  );
}
