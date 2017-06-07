const greeting = 'Hi! My name is Tee. Like what you see? Contact me @ bunth667@gmail.com.';

$(document).ready(function() {
  console.log(greeting);
  $('#root').html(state.templates[3]);
});


const main = `<header class="bio">
                <div class="showcase">
                  <h1 class="name">
                    Tee Mak
                  </h1>
                  <nav class="main-nav">
                    <ul>
                      <li class="main-nav-link"><a href="#work">Portfolio</a></li>
                      <li class="main-nav-link"><a href="#contact">Contact</a></li>
                    </ul>
                  </nav>
                  <img class="headshot" src="http://unsplash.it/150/150" alt="J. Random Hacker headshot">
                    <p class="about" id="about">
                      Hi. My name is Tee. I'm a polymath. Ask me anything about casinos, trading, or programming. I'm a Vim user, so navigate using the arrow keys.
                    </p>
                  <nav class="contact-links">
                    <ul>
                      <li class="contact-link contact-link-email"><a href="mailto:jrandomhacker@example.com">Email</a></li>
                      <li class="contact-link contact-link-linkedin"><a href="https://www.linkedin.com">LinkedIn</a></li>
                      <li class="contact-link contact-link-github"><a href="https://www.github.com">GitHub</a></li>
                    </ul>
                  </nav>
                </div>
              </header>`;

const portfolio = `<section class="work" id="work">
                    <h2>Portfolio</h2>
                    <div class="primary-projects">
                      <section class="project">
                        <h3>Regulator</h3>
                          <div class="images">
                            <img class="project-image" src="http://unsplash.it/350/150?random&amp;bust=1" alt="Frobnicator screenshot">
                          </div>
                        <p class="project-description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                          specimen book.
                        </p>
                        <ul class="project-stack">
                          <li class="project-stack-item">
                            React
                          </li>
                          <li class="project-stack-item">
                          Redux
                          </li>
                          <li class="project-stack-item">
                          Node.js
                          </li>
                        </ul>
                        <nav class="project-links">
                          <ul>
                            <li class="project-link project-link-live">
                              <a href="#">Live demo</a>
                            </li>
                            <li class="project-link project-link-github">
                              <a href="#">Source code</a>
                            </li>
                          </ul>
                        </nav>
                      </section>
                      <section class="project">
                        <h3>FooBar</h3>
                          <div class="images">
                            <img class="project-image" src="http://unsplash.it/350/150?random&amp;bust=2" alt="FooBar screenshot">
                          </div>
                          <p class="project-description">
                            A foo which allows you to bar other bazes.
                          </p>
                          <ul class="project-stack">
                            <li class="project-stack-item">
                              React
                            </li>
                            <li class="project-stack-item">
                              Redux
                            </li>
                            <li class="project-stack-item">
                              Node.js
                            </li>
                          </ul>
                        <nav class="project-links">
                          <ul>
                            <li class="project-link project-link-live">
                              <a href="#">Live demo</a>
                            </li>
                            <li class="project-link project-link-github">
                              <a href="#">Source code</a>
                            </li>
                          </ul>
                        </nav>
                      </section>
                    </div>
                    <div class="ancillary-projects">
                      <section class="project">
                        <h3>AliceBob</h3>
                        <div class="images">
                          <img class="project-image" src="http://unsplash.it/350/150?random&amp;bust=3" alt="AliceBob screenshot">
                        </div>
                        <p class="project-description">
                          An Alice which allows you to Bob other Eves.
                        </p>
                        <ul class="project-stack">
                          <li class="project-stack-item">
                            React
                          </li>
                          <li class="project-stack-item">
                            Redux
                          </li>
                          <li class="project-stack-item">
                            Node.js
                          </li>
                        </ul>
                        <nav class="project-links">
                          <ul>
                          <li class="project-link project-link-live">
                              <a href="#">Live demo</a>
                          </li>
                          <li class="project-link project-link-github">
                              <a href="#">Source code</a>
                          </li>
                          </ul>
                        </nav>
                      </section>
                    <section class="project">
                      <h3>Wibble</h3>
                        <div class="images">
                          <img class="project-image" src="http://unsplash.it/350/150?random&amp;bust=4" alt="Wibble screenshot">
                        </div>
                        <p class="project-description">
                          A wibble which allows you to wobble other wubbles.
                        </p>
                      <ul class="project-stack">
                        <li class="project-stack-item">
                          React
                        </li>
                        <li class="project-stack-item">
                          Redux
                        </li>
                        <li class="project-stack-item">
                          Node.js
                        </li>
                      </ul>
                      <nav class="project-links">
                        <ul>
                          <li class="project-link project-link-live">
                            <a href="#">Live demo</a>
                          </li>
                          <li class="project-link project-link-github">
                            <a href="#">Source code</a>
                          </li>
                        </ul>
                      </nav>
                    </section>
                  </div>
                </section>`;

const contact = `<section class="contact" id="contact">
                  <h2>Contact me</h2>
                    <nav class="contact-links">
                      <ul>
                        <li class="contact-link contact-link-email"><a href="mailto:jrandomhacker@example.com">Email</a>
                        <li class="contact-link contact-link-linkedin"><a href="https://www.linkedin.com">LinkedIn</a>
                        <li class="contact-link contact-link-github"><a href="https://www.github.com">GitHub</a>
                      </ul>
                    </nav>
                </section>`;

const state = {
  templates: [main, portfolio, contact]
}