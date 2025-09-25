import React from 'react';
import { useRouter } from 'next/router';

import dynamic from 'next/dynamic';
import ContactFrom from './ContactFrom';

const YourClassComponentWithNavigation = (props) => {
  const router = useRouter(); // Using Next.js router
  const navigate = (path) => {
    router.push(path); // Use router.push for navigation
  };

  return <ContactFrom {...props} navigate={navigate} />;
};

export default YourClassComponentWithNavigation;
