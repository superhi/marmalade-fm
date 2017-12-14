import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import actions from '../store/actions';

// this component wraps around anything that when we click
// will start playing a mix for us. it provides us functioanlity
// rather than any design
const PlayMix = ({playMix, currentMix, playing, children, className, id, fromMixcloud}) => (
  // when our currently playing mix equals the id of the mix
  // that this component refers to, we will add a class name
  // of 'playing'
  <div
    className={classNames({
      // it’s going to add our custom classNames only when they’re present
      [className]: className,
      // className on the left, true/false on the right (here we test things
      // from our redux state)

      // mixcloud takes control of actually playing a mix, and the
      // event and playstate will both come from there
      playing: id === currentMix && playing && fromMixcloud,
      // when we request to play a mix, things are not loaded yet, so
      // we need to show a loading state, and we do this by seeing
      // where the event has come from
      loading: id === currentMix && !playing && !fromMixcloud
    })}
    onClick={() => playMix({currentMix: id, fromMixcloud: false})}
  >
    {children}
  </div>
);

export default connect(state => state, actions)(PlayMix);
