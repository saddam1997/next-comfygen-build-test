// components/YouTubeTestimonials.tsx
import { Play, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useCallback } from 'react';
import JSON_DATA from "./stories.json";
import styles from './index.module.css';

// Helper function to extract YouTube video ID from various URL formats
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtu\.be\/)([^?]+)/,
    /(?:youtube\.com\/embed\/)([^/]+)/
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export default function YouTubeTestimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleVideoClose = useCallback(() => {
    setActiveVideo(null);
  }, []);

  const handleVideoPlay = useCallback((videoId: string) => {
    setActiveVideo(videoId);
  }, []);

  return (
    <div className={styles.container}>
      {/* Testimonials Section */}
      <section className={styles.section}>
        <h2 className={styles.title}>
          Client Success Stories
        </h2>
        <p className={styles.subtitle}>
          Hear what our clients have to say about their experience working with us
        </p>
        
        <div className={styles.grid}>
          {JSON_DATA?.testimonialsData.testimonials.map((testimonial, index) => {
            const videoId = testimonial.videoId || getYouTubeVideoId(testimonial.videoUrl);
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            
            return (
              <div
                key={index}
                className={styles.card}
                data-testimonial-index={index}
                data-client-name={testimonial.clientName}
                data-video-url={testimonial.videoUrl}
                data-thumbnail-url={testimonial.thumbnail}
              >
                {/* Video URL visible in source code - prominently displayed for SEO/visibility */}
                <div className={styles.seoData}>
                  <p className={styles.seoText}>
                    <span className={styles.seoLabel}>📹 Video URL:</span> {testimonial.videoUrl}
                  </p>
                  <p className={styles.seoSubtext}>
                    <span className={styles.seoLabel}>🖼️ Thumbnail URL:</span> {testimonial.thumbnail}
                  </p>
                </div>
                
                {/* Video Player Section */}
                {activeVideo === testimonial.videoId ? (
                  <div className={styles.videoPlayerContainer}>
                    <div className={styles.videoWrapper}>
                      <iframe
                        src={embedUrl}
                        title={`${testimonial.clientName} testimonial video`}
                        className={styles.videoIframe}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                    <button
                      onClick={handleVideoClose}
                      className={styles.closeButton}
                      aria-label="Close video"
                    >
                      <X className={styles.closeIcon} />
                    </button>
                  </div>
                ) : (
                  /* Video Thumbnail with Play Button */
                  <button
                    onClick={() => handleVideoPlay(testimonial.videoId)}
                    className={styles.thumbnailButton}
                    aria-label={`Play ${testimonial.clientName} testimonial video from ${testimonial.company}`}
                  >
                    <Image
                      width={800}
                      height={450}
                      src={testimonial.thumbnail}
                      alt={`${testimonial.clientName} from ${testimonial.company} testimonial video`}
                      className={styles.thumbnailImage}
                      loading="lazy"
                    />
                    <div className={styles.playOverlay}>
                      <div className={styles.playButton}>
                        <Play className={styles.playIcon} />
                      </div>
                    </div>
                  </button>
                )}
                
                {/* Client Info */}
                <div className={styles.clientInfo}>
                  <h3 className={styles.clientName}>
                    {testimonial.clientName}
                  </h3>
                  <p className={styles.companyName}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.footerSEO}>
          <div className={styles.footerContent}>
            <p className={styles.footerLabel}>📋 All Video URLs (Visible in Page Source):</p>
            {JSON_DATA?.testimonialsData.testimonials.map((t, i) => (
              <p key={i} className={styles.footerUrl}>
                {i + 1}. {t.clientName} ({t.company}): <span className={styles.urlLink}>{t.videoUrl}</span>
              </p>
            ))}
          </div>
          <p className={styles.footerNote}>
            This component is server-side rendered. All URLs are embedded in the HTML source for maximum visibility.
          </p>
        </div>
      </section>
    </div>
  );
}