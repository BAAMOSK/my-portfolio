const greeting = 'Hi! My name is Tee. Like what you see? Contact me @ bunth667@gmail.com.';

$(document).ready(function() {
  console.log(greeting);
});


const main = '<header class="bio">
                <div class="showcase">
                  <h1 class="name">Tee Mak</h1>
                    <nav class="main-nav">
                      <ul>
                        <li class="main-nav-link"><a href="#work">Portfolio</a></li>
                        <li class="main-nav-link"><a href="#contact">Contact</a></li>
                      </ul>
                    </nav>
                    <img class="headshot" src="http://unsplash.it/150/150" alt="J. Random Hacker headshot" />
                      <p class="about" id="about">
                        Hi. My name is Tee. I'm a polymath. Ask me anything about casinos, trading, or programming. I'm a Vim user, so navigate using the arrow keys.
                      </p>
                    <nav class="contact-links">
                      <ul>
                        <li class="contact-link contact-link-email"><a href="mailto:jrandomhacker@example.com">Email</a>
                        <li class="contact-link contact-link-linkedin"><a href="https://www.linkedin.com">LinkedIn</a>
                        <li class="contact-link contact-link-github"><a href="https://www.github.com">GitHub</a>
                      </ul>
                    </nav>
              </header>';


const state = {
  templates: [main, portfolio, contact]
}