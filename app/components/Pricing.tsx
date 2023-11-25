// components/Pricing.tsx

import React from 'react';
import Card from './Card';
import styles from './Pricing.module.css';



const Pricing: React.FC = () => {
  return (
    <div className={styles.grid1}>
      <Card title="Basic" icon="fa-paper-plane" price={25} features={['10 GB Space', '3 Domain Names', '20 Email Address', 'Live Support']} />
      <Card title="Standard" icon="fa-plane" price={50} features={['50 GB Space', '5 Domain Names', 'Unlimited Email Address', 'Live Support']} />
      <Card title="Premium" icon="fa-rocket" price={100} features={['Unlimited GB Space', '30 Domain Names', 'Unlimited Email Address', 'Live Support']} />
    </div>
  );
};

export default Pricing;
