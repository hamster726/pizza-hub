import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingPizzaBlock() {
  return (
    <ContentLoader
      speed={2}
      width={270}
      height={600}
      viewBox="0 0 270 550"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="142" cy="152" r="130" />
      <rect x="0" y="355" rx="6" ry="6" width="270" height="110" />
      <rect x="0" y="495" rx="6" ry="6" width="91" height="31" />
      <rect x="137" y="495" rx="25" ry="25" width="130" height="38" />
    </ContentLoader>
  );
}

export default LoadingPizzaBlock;
