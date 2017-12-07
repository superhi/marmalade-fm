import React from 'react';
import PlayButton from './PlayButton';
import PlayMix from './PlayMix';

const Archive = ({mixes, ...props}) => (
  <ul className="list pl0 archive mv0 pad-bottom">
    {mixes.map(mix => (
      <li className="ph3 ph4-l">
        <PlayMix {...props} id={mix.key}>
          <div className="pv3 bb b--light-gray flex justify-between items-center">
            <h1 className="f6 mv0 black ttu biryani pr2">{mix.name}</h1>
            <PlayButton />
          </div>
        </PlayMix>
      </li>
    ))}
  </ul>
);

export default Archive;
