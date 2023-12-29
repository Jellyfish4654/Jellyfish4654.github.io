import React from 'react';
import { Helmet } from 'react-helmet';

const GoogleTag = () => {
  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZW1M1VG099"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZW1M1VG099');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleTag;