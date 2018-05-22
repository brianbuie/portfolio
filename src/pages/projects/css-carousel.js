import React from 'react';
import styled from 'styled-components';
import theme from '@parts/theme';
import ProjectPage from '@parts/layouts/ProjectPage';
import Video from '@parts/ui/Video';
import Image from '@parts/ui/Image';
import Hero from '@parts/ui/Hero';

const Headline = styled.h1`
  color: white;
  text-shadow: 0 0 20px black;
`;

export default ({ location }) => (
  <ProjectPage location={location}>
    <Hero image="carousel-background_mdjz8x">
      <Headline>CSS Carousel</Headline>
    </Hero>
    <section>
      <h3>Background</h3>
      <p>
        When building out the content pages on AMCTheatres.com, we needed a way to display the movie poster carousel found on
        other parts of the site, but with custom content under each film.
      </p>
      <p>
        The homegrown CMS at AMC was designed to allow us to manage the content on Marketing pages using HTML instead of React
        Components. Since the HTML would eventually be converted to React Components to display on the site, we couldn't include
        any custom javascript.
      </p>
    </section>
    <section>
      <h3>CSS To the Rescue!</h3>
      <figure>
        <Video id="css-carousel-demo_pfefp3" width={640} height={480} />
        <figcaption>
          The CSS Carousel being used on the{' '}
          <a href="https://www.amctheatres.com/amc-educates" target="_blank">
            AMC Educates page
          </a>.
        </figcaption>
      </figure>
      <p>
        By using hidden radio buttons, the carousel position and active item styles are determined by which radio button was
        selected. Each movie poster was wrapped in a label for the corresponding radio input, so when a poster was clicked, that
        radio button would be selected and trigger CSS transitions between states.{' '}
        <a href="https://github.com/brianbuie/cssCarousel/blob/master/csscarousel.css" target="_blank">
          Check out the CSS →
        </a>
      </p>
    </section>
    <section>
      <h2>The Pros and Cons</h2>
      <h3>Responsiveness</h3>
      <p>
        <strong>Pro:</strong> The sizes for everything were based on aspect ratios and percentages, so the carousel scales down
        nicely on mobile.
      </p>
      <figure>
        <Video id="responsive-demo_tpba5c" width={1080} height={664} transforms={['e_accelerate:35', 'eo_11', 'so_2']} />
        <figcaption>Wow, so responsive</figcaption>
      </figure>
      <p>
        <strong>Con:</strong> CSS Touch events can't be used to change selected inputs, so swiping on mobile to advance the
        carousel doesn't work.
      </p>
    </section>
    <section>
      <h3>Flexibility</h3>
      <p>
        <strong>Pro:</strong> Since the sizes are fluid, we've been able to use it for other items that aren't the same size as
        movie posters.
      </p>
      <figure>
        <Image id="amc-history_x1gemx" width={850} height={468} alt="AMC History" />
        <figcaption>
          A different aspect ratio for the content on the{' '}
          <a href="https://www.amctheatres.com/corporate/amc-history" target="_blank">
            AMC History page
          </a>.
        </figcaption>
      </figure>
      <p>
        <strong>Con:</strong> By using a lot of "nth-type" pseudo-selectors, the HTML is extremely rigid. It's really easy to
        accidentally misplace an element and break the whole carousel.
      </p>
    </section>
    <section>
      <h3>Compatibility</h3>
      <p>
        <strong>Pro:</strong> Since there's no Javascript involved, we didn't run into many issues with browser support. Although,
        the whole site uses React, so older versions of IE aren't supported anyways.
      </p>
      <p>
        <strong>Con:</strong> Using radio buttons is a bit of a hack, so the markup is probably confusing for crawlers and
        screenreaders.
      </p>
    </section>
    <section>
      <h2>Final Thoughts</h2>
      <p>
        I tend to reach for javascript at the first sign of complexity or interactivity, so it was really fun and challenging to
        come up with a pure CSS solution for this. While I wouldn't use radio buttons like this again in the future, I'm really
        proud of how flexible and responsive the carousel is. Only using percentages meant no pixels were harmed in the making of
        this project!
      </p>
    </section>
  </ProjectPage>
);
