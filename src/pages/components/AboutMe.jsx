import React from 'react';

class Footer extends React.Component {

  render() {
    return (<div id="aboutme" className="modal">
      <div className="modal-container">
        <a className="cancel" href="#">Close ×</a>
        <section className="experience">
          <p>Multi-disciplinary product designer living in New York experienced in creating digital strategies, products, and services across a dozen industries. In my free time I'll be exploring machine learning 🤖🎓, cryptocurrencies 💰, front-end wizardry ✨, startups ideas 📈, and fly fishing 🎣.</p>
          <div className="clientlist grid-list">
            <ul>
              <li className="list-header">UxD @ AREA 17</li>
              <li>ESPN</li>
              <li>Quartz</li>
              <li>Charlie Rose</li>
              <li>Style.com</li>
              <li>Advertising Age</li>
              <li>Billboard</li>
              <li>The Webby Awards</li>
              <li>Samsung</li>
              <li>Facebook</li>
              <li>Google</li>
              <li>...</li>
            </ul>
            <ul>
              <li className="list-header buzzword" data-buzzword="Now">Sr. IxD @ IDEO</li>
              <li className="redacted" data-char-count="########"></li>
              <li className="redacted" data-char-count="################"></li>
              <li>FloodHelpNY.org</li>
              <li>The U.S. State Dept.</li>
              <li className="redacted" data-char-count="####"></li>
              <li className="redacted" data-char-count="##############"></li>
              <li>...</li>
            </ul>
          </div>
        </section>
      </div>
    </div>);
  }
}

export default Footer;
