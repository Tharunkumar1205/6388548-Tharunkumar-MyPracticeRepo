import React from 'react';
import CohortDetails from './components/CohortDetails';


function App() {
  return (
    <div>
      <CohortDetails name="React Cohort" duration="6 weeks" status="ongoing" />
      <CohortDetails name="Java Cohort" duration="8 weeks" status="completed" />
    </div>
  );
}

export default App;

