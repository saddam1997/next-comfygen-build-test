'use client';

import { useEffect, useState } from 'react';

const stickyStyles = {
  whatsapp: {
    position: 'fixed' as const,
    bottom: '24px',
    right: '24px',
    width: '56px',
    height: '56px',
    background: '#25D366',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '28px',
    boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
    zIndex: 99,
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  mobileBar: {
    display: 'none',
    position: 'fixed' as const,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'white',
    borderTop: '1px solid #E8E2DD',
    padding: '12px 16px',
    zIndex: 99,
    gap: '8px',
    boxShadow: '0 -4px 20px rgba(0,0,0,0.06)',
  },
  callBtn: {
    flex: 1,
    padding: '14px',
    borderRadius: '100px',
    textAlign: 'center' as const,
    fontWeight: 700,
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    background: '#FF5A3C',
    color: 'white',
    textDecoration: 'none',
  },
  waBtn: {
    flex: 1,
    padding: '14px',
    borderRadius: '100px',
    textAlign: 'center' as const,
    fontWeight: 700,
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    background: '#25D366',
    color: 'white',
    textDecoration: 'none',
  },
};

export default function StickyElements() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 968);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const keyframes = `
    @keyframes pulse {
      0% { box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.5); }
      70% { box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4), 0 0 0 18px rgba(37, 211, 102, 0); }
      100% { box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <a
        href="https://wa.me/919587867258"
        style={{
          ...stickyStyles.whatsapp,
          animation: 'pulse 2s infinite',
          ...(isMobile ? { bottom: '90px' } : {}),
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

      {isMobile && (
        <div style={stickyStyles.mobileBar}>
          <a href="tel:+919587867258" style={stickyStyles.callBtn}>
            📞 Call Now
          </a>
          <a href="https://wa.me/919587867258" style={stickyStyles.waBtn}>
            💬 WhatsApp
          </a>
        </div>
      )}
    </>
  );
}