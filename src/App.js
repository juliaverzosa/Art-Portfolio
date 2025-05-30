// File: App.js
import React, { useEffect, useRef } from 'react';
import './App.css';
import Board from './Board'; 
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';


const sections = ['Home', 'About', 'Portfolio', 'Prices','Terms', 'Commission Queue', 'Contact'];

const FadeInSection = ({ children }) => {
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          domRef.current.classList.add('visible');
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return <div className="fade-in-section" ref={domRef}>{children}</div>;
};

const App = () => {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <h1 className="logo">MONARIA</h1>
          <nav className="nav">
            {sections.map((sec) => (
              <a key={sec} href={`#${sec.toLowerCase().replace(/ /g, '-')}`}>{sec}</a>
            ))}
          </nav>
        </div>
      </header>

      <div className="app">
        <FadeInSection>
          <section id="home" className="section home">
            <div className="hero">
              <h2>Hi, I'm Monaria</h2>
              <p>An illustrator, developer, and maker of delightful things.</p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="about" className="section about-section">
            <div className="about-content">
              <div className="about-text">
                <h2>About Me</h2>
                <p>
                  Hey! I’m an artist who loves turning ideas into art you can feel.
                  From cute commissions to cool concepts, I draw with heart and a bit of chaos (the fun kind).
                  I’ve worked with awesome people from all over, and nothing makes me happier than bringing your vision to life.
                  Got something in mind? Let’s make it happen!
                </p>
              </div>
              <div className="about-image">
                <img src="/images/monaria.jpg" alt="Monaria" />
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="portfolio" className="section">
            <h2>Art Portfolio</h2>
            <div className="portfolio-gallery">
              <img src="/images/art1.jpg" alt="Art 1" className="portfolio-image" />
              <img src="/images/art2.jpg" alt="Art 2" className="portfolio-image" />
              <img src="/images/art3.jpg" alt="Art 3" className="portfolio-image" />
              <img src="/images/art4.jpg" alt="Art 4" className="portfolio-image" />
              <img src="/images/art5.jpg" alt="Art 5" className="portfolio-image" />
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="prices" className="section">
            <h2>Price List</h2>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Bust Up</td><td>$35</td></tr>
                <tr><td>Half Body</td><td>$50</td></tr>
                <tr><td>Full Body</td><td>$80</td></tr>
              </tbody>
            </table>
            <p>Additional Fees and Charges</p>
              <ul>
                <li>Additional Character: +60%</li>
                <li>Commercial Use: x2</li>
                <li>Priority Commission: +50% </li>
              </ul>
          </section>
        </FadeInSection>


        <FadeInSection>
          <section id="terms" className="section">
            <h2>Terms of Service</h2>
            <p><strong>Status:</strong> Open</p>
            <p>By commissioning me, you agree to the Terms of Service.<br />
              Any statement can be bound to change if discussed with me, the artist, prior to the commission.
            </p>

            <h3>I, as the Artist...</h3>
            <ul>
              <li>Maintain the rights to post it to my sites, make videos, and present it in my portfolios or in any form.</li>
              <li>Maintain the right to post commissions to my social media for advertising. However, I will not post artwork upon request.</li>
              <li>I have the right to decline a commission request.</li>
              <li>It may take 3-6 weeks (as of 2025) to finish the commission. Unless it is a priority commission, it will be completed within the agreed deadline.</li>
            </ul>

            <h3>You, as the Client...</h3>
            <ul>
              <li>You cannot claim my art as your own.</li>
              <li>Please be sure to credit me when posting it on other sites.</li>
              <li>You can not use any of my art for NFT nor sell it for NFT purposes.</li>
              <li>Any type of commercial commission must be discussed.</li>
            </ul>

            <h3>Payment</h3>
            <ul>
              <li>I don't allow cancellations or refunds once payment is made.</li>
              <li>I only accept payments through Paypal (USD), Kofi, and GCash (PHP).</li>
              <li>You are expected to pay 50% or full upfront.</li>
              <li>If you paid 50% upfront, you are expected to pay the rest before I send the finished commission.</li>
            </ul>

            <h3>Priority and Commercial Commission</h3>
            <ul>
              <li>You can order a priority commission when you want to skip the waitlist and get the commissions done by a deadline. The priority fee is up to 60% of the base price.</li>
              <li>Commercial Use/Commercial Rights of the artwork will be twice (2x) the cost of the original price.</li>
            </ul>

            <h3>Can Draw / Can’t Draw</h3>
            <table className="terms-table">
              <thead>
                <tr><th>Can Draw</th><th>Can’t Draw</th></tr>
              </thead>
              <tbody>
                <tr><td>Original Character</td><td>Hard NSFW</td></tr>
                <tr><td>Fanart</td><td>Gore</td></tr>
                <tr><td>Ships</td><td>Mecha</td></tr>
                <tr><td>Demi-Human</td><td>Furries</td></tr>
                <tr><td>Soft NSFW</td><td>Complex Background</td></tr>
              </tbody>
            </table>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="commission-queue" className="section">
            <h2>Commission Queue</h2>
            <Board />
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="contact" className="section contact-section">
            <h2>Contact Me</h2>
            <p>Let's connect! You can find me on:</p>
            <div className="contact-links">
                <a href="https://x.com/riria_mona1" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaXTwitter />
  </a>
  <a href="https://www.instagram.com/riria_mona1/" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaInstagram />
  </a>
            </div>
          </section>
        </FadeInSection>
      </div>
    </>
  );
};

export default App;
