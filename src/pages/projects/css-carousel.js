import React from 'react';
import styled from 'styled-components';
import ProjectPage from '../../parts/layouts/ProjectPage';
import Video from '../../parts/ui/Video';
import Image from '../../parts/ui/Image';

const Header = styled.header`
  background-color: #ccc;
`;

export default () => (
  <ProjectPage>
    <Header>
      <h1>CSS Carousel</h1>
    </Header>
    <section>
      <h3>Background</h3>
      <p>When building out the content pages on AMCTheatres.com, we needed a way to display the movie poster carousel found on other parts of the site, but with custom content under each film.</p>
      <p>The homegrown CMS at AMC was designed to allow us to manage the content on Marketing pages using HTML instead of React Components. Since the HTML would eventually be converted to React Components to display on the site, we couldn't include any custom javascript.</p>
    </section>
    <section>
      <h3>CSS To the Rescue!</h3>
      <figure>
        <Video publicId="css-carousel-demo_pfefp3" />
        <figcaption>The CSS Carousel being used on the <a href="https://www.amctheatres.com/amc-educates" target="_blank">AMC Educates page</a>.</figcaption>
      </figure>
      <p>By using hidden radio buttons, the carousel position and active item styles are determined by which radio button was selected. Each movie poster was wrapped in a label for the corresponding radio input, so when a poster was clicked, that radio button would be selected and trigger CSS transitions between states.</p>
    </section>
    <section>
      <h2>The Pros and Cons</h2>
      <h3>Responsiveness</h3>
      <p><strong>Pro:</strong> The sizes for everything were based on aspect ratios and percentages, so the carousel scales down nicely on mobile.</p>
      <p><strong>Con:</strong> CSS Touch events can't be used to change selected inputs, so swiping on mobile to advance the carousel doesn't work. This is the main reason we don't use the carousel in more areas, since the main React-based carousel does support swiping.</p>
    </section>
    <section>
      <h3>Flexibility</h3>
      <p><strong>Pro:</strong> Since the sizes are fluid, we've been able to use it for other items that aren't the same size as movie posters.</p>
      <figure>
        <Image publicId="amc-history_x1gemx" alt="AMC History" />
        <figcaption>A different aspect ratio for the content on the <a href="https://www.amctheatres.com/corporate/amc-history" target="_blank">AMC History page</a>.</figcaption>
      </figure>
      <p><strong>Con:</strong> By using a lot of "nth-type" pseudo-selectors, the HTML is extremely rigid. It's really easy to accidentally misplace an element and break the whole carousel.</p>
    </section>
    <section>
      <h3>Compatibility</h3>
      <p><strong>Pro:</strong> Since there's no Javascript involved, we didn't run into many issues with browser support. Although, the whole site uses React, so older versions of IE aren't supported anyways.</p>
      <p><strong>Con:</strong> Using radio buttons is a bit of a hack, so the markup is probably confusing for scrapers and screenreaders.</p>
    </section>
  </ProjectPage>
);