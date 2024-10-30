import React from 'react';
import Link from 'next/link';

const VideoBanner = ({ videoLink }) => {
  if (!videoLink) {
    console.error("Video link is undefined. Please provide a valid link.");
    return null;
  }

  return (
    <div className="video-banner-container">
        <div
          className="overflow-hidden relative flex justify-center items-center w-full h-96 -mb-20 sm:my-7"
        >
          <video
            className="video-banner"
            width="100%"
            height="100%"
            src="/ytb.mp4"
            autoPlay
            loop
            muted={true}
            playsInline
            style={{ objectFit: 'cover' }}
          />
          <div className="video-overlay"></div>
        </div>
    </div>
  );
};

export default VideoBanner;
