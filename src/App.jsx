import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className='site'>
      <nav className='navbar'>
        <div className='container nav-content'>
          <a href='#home' className='nav-logo'>
            Rincon Web Studio<span className='logo-sub'>Web Design</span>
          </a>

          <button
            className='menu-toggle'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href='#about'>About Me</a>
            <a href='#services'>Services</a>
            <a href='#projects'>Projects</a>
            <a href='#contact' className='nav-cta'>
              Get a Free Quote
            </a>
          </div>
        </div>
      </nav>
      <section className='hero' id='home'>
        <div className='container hero-grid'>
          <div className='hero-copy'>
            <p className='eyebrow'>Web Design • Development • Bilingual</p>
            <h1> Websites that help local businesses get more customers.</h1>
            <p className='hero-text'>
              I design and build modern websites that make your business look
              professional, rank better on Google, and turn visitors into
              customers.
            </p>
            <p className='hero-location'>
              Based in Northern California • Serving local businesses
            </p>
            <div className='hero-actions'>
              <a href='#projects' className='btn btn-primary'>
                View Work
              </a>
              <a href='#contact' className='btn btn-secondary'>
                Start a Project
              </a>
            </div>
          </div>

          <div className='hero-card'>
            <div className='card-window'>
              <div className='card-dots'>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className='card-content'>
                <p className='card-label'>What I help with</p>
                <p className='card-highlight'>
                  Designed to turn visitors into customers.
                </p>
                <ul>
                  <li>Business websites</li>
                  <li>Landing pages</li>
                  <li>Website redesigns</li>
                  <li>Local business presence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='trust'>
        <div className='container trust-content'>
          <p>
            Helping local businesses improve their online presence and attract
            more customers.
          </p>
        </div>
      </section>
      <section className='about section-alt' id='about'>
        <div className='container about-grid'>
          <div>
            <h2>About Me</h2>
            <p>
              I&apos;m Keith Rincon, a web developer based in Northern
              California. I enjoy helping businesses create modern websites that
              represent their brand and make it easy for customers to connect
              online.
            </p>

            <p>
              With experience in both design and development, I focus on
              building websites that are fast, clean, and easy to use. My goal
              is simple: create websites that help businesses look professional
              and grow.
            </p>

            <p>
              I come from a background working with people and local businesses,
              so I understand what actually matters — clarity, trust, and
              results.
            </p>

            <p className='about-highlight'>Bilingual — English &amp; Spanish</p>
          </div>
        </div>
      </section>
      <section className='services section-glow' id='services'>
        <div className='container'>
          <div className='section-heading'>
            <p className='eyebrow'>Services</p>
            <h2>What I can help your business with</h2>
            <p className='section-text'>
              Simple, modern website solutions designed to help your business
              look professional and connect with more customers online.
            </p>
          </div>

          <div className='services-grid'>
            <article className='service-card'>
              <div className='service-number'>01</div>
              <h3>Business Websites</h3>
              <p>
                Professional websites for local businesses that want a strong
                online presence and a clean first impression.
              </p>
            </article>

            <article className='service-card'>
              <div className='service-number'>02</div>
              <h3>Landing Pages</h3>
              <p>
                Focused pages built to highlight a service, promotion, or offer
                and guide visitors toward taking action.
              </p>
            </article>

            <article className='service-card'>
              <div className='service-number'>03</div>
              <h3>Website Redesign</h3>
              <p>
                Refresh outdated websites with a cleaner, more modern look that
                feels more trustworthy and easier to use.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className='pricing'>
        <div className='container pricing-container'>
          <p className='eyebrow'>Pricing</p>
          <h2>Simple, transparent pricing</h2>

          <p className='pricing-text'>
            Most websites for local businesses fall between $400 and $800
            depending on what you need. I keep things simple, clean, and focused
            on helping your customers find you and contact you easily.
          </p>

          <p className='pricing-sub'>
            Optional monthly management is available if you’d like ongoing
            updates and support.
          </p>
        </div>
      </section>
      <section className='projects section-alt' id='projects'>
        <div className='container'>
          <div className='section-heading'>
            <p className='eyebrow'>Selected Work</p>
            <h2>Projects that show what I can build</h2>
            <p className='section-text'>
              A mix of real business work and original projects that reflect my
              design and development style.
            </p>
          </div>

          <div className='projects-grid'>
            <article className='project-card'>
              <div className='project-image-wrap'>
                <img
                  src='/guadalajara-preview.png'
                  alt='Guadalajara Mexican Restaurant website preview'
                  className='project-image'
                />
              </div>
              <div className='project-content'>
                <h3>Guadalajara Mexican Restaurant</h3>
                <p>
                  A full restaurant website built with React to replace an
                  outdated site and better represent the restaurant’s brand. The
                  site integrates the menu, location mapping, and contact forms
                  while providing a mobile-optimized experience with
                  click-to-call functionality so customers can easily find
                  information and connect with the restaurant.
                </p>
                <a
                  href='https://guadalajara-rest.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                  className='project-link'
                >
                  View Site
                </a>
              </div>
            </article>

            <article className='project-card'>
              <div className='project-image-wrap'>
                <img
                  src='/picklebookie-preview.png'
                  alt='DNA Tennis & Pickleball Club website preview'
                  className='project-image'
                />
              </div>
              <div className='project-content'>
                <h3>DNA Tennis & Pickleball Club</h3>
                <p>
                  A complete website redesign for a growing tennis and
                  pickleball club built using Squarespace with custom CSS
                  enhancements. The project focused on modernizing the club’s
                  online presence with responsive design, improved navigation,
                  and SEO optimization to make it easier for players and
                  visitors to learn about the club, programs, and events.
                </p>
                <a
                  href='https://dnatennisclub.com/'
                  target='_blank'
                  rel='noreferrer'
                  className='project-link'
                >
                  View Site
                </a>
              </div>
            </article>

            <article className='project-card'>
              <div className='project-image-wrap'>
                <img
                  src='/lanuevanovedad-preview.png'
                  alt='La Nueva Novedad website preview'
                  className='project-image'
                />
              </div>
              <div className='project-content'>
                <h3>La Nueva Novedad</h3>
                <p>
                  A music band website built with React to showcase the band’s
                  identity, connect fans through social media integration, and
                  highlight performances. The site features an event calendar,
                  tour dates, media player, and a clean layout designed to
                  promote the band’s music and upcoming shows.
                </p>
                <a
                  href='https://lanuevanuvedad.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                  className='project-link'
                >
                  View Site
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className='process'>
        <div className='container'>
          <div className='section-heading'>
            <p className='eyebrow'>Process</p>
            <h2>Simple and clear process</h2>
          </div>

          <div className='process-grid'>
            <div>1. We talk about your business</div>
            <div>2. I design and build your site</div>
            <div>3. You go live and get customers</div>
          </div>
        </div>
      </section>

      <section className='contact section-glow' id='contact'>
        <div className='container contact-container'>
          <div className='contact-card'>
            <p className='eyebrow'>Start a Project</p>
            <h2>Let’s build your website.</h2>

            <p className='contact-text'>
              If you&apos;re a business looking for a clean, modern website or
              want to improve your current one, feel free to reach out. I&apos;d
              be happy to hear about your project and see how I can help.
            </p>

            <div className='contact-actions'>
              <a
                href='mailto:keithrt3008@gmail.com'
                className='btn btn-primary'
              >
                Email Me
              </a>

              <a
                href='https://www.linkedin.com/in/keithrincon/'
                target='_blank'
                rel='noreferrer'
                className='btn btn-secondary'
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <div className='container footer-content'>
          <p className='footer-brand'>Rincon Web Studio</p>

          <div className='footer-links'>
            <a href='#about'>About</a>
            <a href='#services'>Services</a>
            <a href='#projects'>Projects</a>
            <a href='mailto:keithrt3008@gmail.com'>Email</a>
          </div>

          <p className='footer-copy'>
            © {new Date().getFullYear()} Rincon Web Studio
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
