import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>

<footer class="footer">
            <div class="footer__bg">
                <div class="footer__container container grid">
                    <div>
                        <h1 class="footer__title">Vicky</h1>
                    </div>

                    <ul class="footer__links">
                        <li>
                            <a href="#about" class="footer__link">About</a>
                        </li>
                        <li>
                            <a href="#portfolio" class="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" class="footer__link">Contactme</a>
                        </li>
                    </ul>

                   
                </div>

                
            </div>
        </footer>

        {/* <!--========== SCROLL TOP ==========--> */}
        <a href="#" class="scrollup" id="scroll-top">
            <i class="uil uil-arrow-up scrollup__icon"></i>
        </a>

        {/* <!--==================== SWIPER JS ====================--> */}
        <script src="swiper-bundle.min.js"></script>

        {/* <!--==================== MAIN JS ====================--> */}
        <script src="main.js"></script>
      
    </div>
  )
}

export default Footer
