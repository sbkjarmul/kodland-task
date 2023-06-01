import "./style.css";

import amongUs from "./assets/images/amongus.png";
import round from "./assets/images/round.png";
import square from "./assets/images/square.png";
import photo from "./assets/images/photo.jpg";

document.querySelector("#app").innerHTML = `
  <div>
    <header class="header">
      <div class="container header__content">
        <span class="header__logo">NOT_A_BUBBLE.COM</span>
        <nav>
          <ul class="header__menu">
            <li class="header__menu-item"><a class="header__menu-link" href="#">About</a></li>
            <li class="header__menu-item"><a class="header__menu-link" href="#">Sale</a></li>
            <li class="header__menu-item"><a class="header__menu-link" href="#">Contacts</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="container hero__content">
          <article class="hero__caption">
            <h1 class="hero__caption__h1">POP IT!</h1>
            <p class="hero__caption__p">Best Antistress Toy is the Endless toy bubble wrap!</p>
            <button class="hero__caption__button">Buy</button>
          </article>
        </div>
      </section>

        <section class="about">
          <div class="container about__content">
            <h1 class="about__h1">What is Pop it exactly?</h1>
            <p class="about__p">This is a child's game, in which the process can be compared to the bursting of a bubble wrap. But unlike film, pop-it can be pressed with the same characteristic sensations and sounds "endlessly": dozens of silicone bubbles are simplu squeezed out in the other direction.</p> 
          </div>
        </section>

        <section class="choose">
          <div class="container choose__content">
            <h1 class="choose__h1">Choose your Pop-it!</h1>
            <div class="choose__products">
              <article class="choose__product">
                <img class="choose__product__image" id="square" alt="Multicolored square" />
                <h2 class="choose__product__title">Multicolored square</h2>
                <button class="choose__product__button">Buy</button>
              </article>
              <article class="choose__product">
                <img class="choose__product__image" id="amongUs" alt="Among us, marbled" />
                <h2 class="choose__product__title">Among us, marbled</h2>
                <button class="choose__product__button">Buy</button>
              </article>
              <article class="choose__product">
                <img class="choose__product__image" id="round" alt="Multicolored round" />
                <h2 class="choose__product__title">Multicolored round</h2>
                <button class="choose__product__button">Buy</button>
              </article>
            </div>
          </div>
        </section>

        <section class="rules">
          <div class="container rules__content">
            <article class="rules__description">
              <h1 class="rules__description__h1">Rules of the game</h1>
              <p class="rules__description__p">Players take turns and click on the bumbps. It is imperative to finish the row that you started. You can press a maximum of 3 bubbles at the same time (they must be near, you cannot press several pimples at once, if they are not close to each other). The task is to make the opponent go last. Who went last - he lost!)</p>
            </article>
            <img class="rules__photo" src="" id="photo" alt="Rules of the game" />
          </div>
        </section>
      </div>
    </main>

    <footer class="footer">
      <div class="container footer__content">
        <ul class="footer__menu">
          <span class="footer__logo">NOT_A_BUBBLE.COM</span>
          <li class="footer__menu-item"><a class="footer__menu-link" href="#">Payment Methods</a></li>
          <li class="footer__menu-item"><a class="footer__menu-link" href="#">Delivery</a></li>
          <li class="footer__menu-item"><a class="footer__menu-link" href="#">Wholesale</a></li>
          <li class="footer__menu-item"><a class="footer__menu-link" href="#">Contacts</a></li>
        </ul>
      </div>
    </footer>
  </div>
`;

document.querySelector("#amongUs").src = amongUs;
document.querySelector("#square").src = square;
document.querySelector("#round").src = round;
document.querySelector("#photo").src = photo;

document
  .querySelector(".hero__caption__button")
  .addEventListener("mouseover", () => {
    document.querySelector(".hero").classList.add("hero--hover");
  });

document
  .querySelector(".hero__caption__button")
  .addEventListener("mouseout", () => {
    document.querySelector(".hero").classList.remove("hero--hover");
  });

document.querySelector(".rules").addEventListener("mouseover", () => {
  document
    .querySelector(".rules__content")
    .classList.add("rules__content--hover");
});

document.querySelector(".rules").addEventListener("mouseout", () => {
  document
    .querySelector(".rules__content")
    .classList.remove("rules__content--hover");
});
