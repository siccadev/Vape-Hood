import React from 'react';
import Link from 'next/link';
import Video from 'next-video';
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
        {/* <Video
          className="video-banner"
          width="100%"
          height="100%"
          src="/ytb3.mp4"
          autoPlay
          loop
          muted={true}
          playsInline
          style={{ objectFit: 'cover' }}
        /> */}

        <Video
          className="video-banner"
          width="100%"
          height="100%"
          src="/ytb3.mp4"
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
