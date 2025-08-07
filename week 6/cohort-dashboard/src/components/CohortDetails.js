import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ name, duration, status }) {
  const statusColor = status === 'ongoing' ? 'green' : 'blue';

  return (
    <div className={styles.box}>
      <h3 style={{ color: statusColor }}>{name}</h3>
      <dl>
        <dt>Duration:</dt>
        <dd>{duration}</dd>
        <dt>Status:</dt>
        <dd>{status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
