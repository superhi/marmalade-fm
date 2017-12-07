import React from 'react';
import Mix from './Mix';

const Home = props => (
  <div className="flex flex-wrap justify-between mixes ph3 ph4-l">
    {/* here we loop through all of our mixes */}

    {props.mix && (
      <div className="mix mb4">
        {/* here we just pass the props straight through */}
        <Mix {...props} {...props.mix} />
      </div>
    )}
  </div>
);

export default Home;
