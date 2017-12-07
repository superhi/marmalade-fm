import React from 'react';
import Mix from './Mix';

const Home = ({mixes, ...props}) => (
  <div className="flex flex-wrap justify-between mixes ph3 ph4-l">
    {/* here we loop through all of our mixes */}
    {/* we slice the array by starting at 0 and taking the first 6 */}
    {mixes.slice(0, 6).map(mix => (
      <div className="mix mb4">
        {/* here we just pass the props straight through */}
        {/* here we pass through an id for the mix to play with */}
        <Mix {...props} {...mix} id={mix.key} />
      </div>
    ))}
  </div>
);

export default Home;
