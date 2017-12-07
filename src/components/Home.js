import React from 'react';
import Mix from './Mix';

const Home = props => (
  <div className="flex flex-wrap justify-between mixes ph3 ph4-l">
    {/* here we loop through all of our mixes */}
    <div className="mix mb4">
      {/* here we just pass the props straight through */}
      <Mix name="This Is The Blues" id="/adamkvasnica3/this-is-the-blues/" {...props} />
    </div>

    <div className="mix mb4">
      {/* here we just pass the props straight through */}
      <Mix
        name="Ambient treasures"
        id="/salvatore-muscat/ambient-treasures-vol1-towards-the-dream/"
        {...props}
      />
    </div>

    <div className="mix mb4">
      {/* here we just pass the props straight through */}
      <Mix
        name="#WavyWednesdays MIX 017"
        id="/djmattrichards/wavywednesdays-mix-017-quavo-djmattrichards/"
        {...props}
      />
    </div>
  </div>
);

export default Home;
