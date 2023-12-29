import React, { useEffect } from 'react';

const AdSense = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-2953623903571526"
      data-ad-slot="your-ad-slot-id"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  );
};

export default AdSense;