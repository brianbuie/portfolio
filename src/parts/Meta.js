import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, imageId }) => {
  const previewImage = `https://res.cloudinary.com/brianbuie/image/upload/c_crop,f_auto,g_center,w_1200,h_630/w_500,c_scale,g_north_west,l_preview-badge_nlqo8g/v1526932723/${imageId}.jpg`;
  return (
    <React.Fragment>
      {title && (
        <Helmet>
          <title>{`${title} | Brian Buie`}</title>
          <meta property="og:title" content={`${title} | Brian Buie`} />
          <meta property="twitter:title" content={`${title} | Brian Buie`} />
        </Helmet>
      )}
      {description && (
        <Helmet>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </Helmet>
      )}
      {imageId && (
        <Helmet>
          <meta property="og:image" content={previewImage} />
        </Helmet>
      )}
      <Helmet>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@brian_buie" />
      </Helmet>
    </React.Fragment>
  );
};

export default Meta;
