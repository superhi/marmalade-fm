/*global Mixcloud*/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions';

class Player extends Component {
  // every time the props change we can get access to them here
  componentWillReceiveProps(nextProps) {
    // if there is a new mix in the props
    async () => {
      await this.widget.ready;
      if (nextProps.currentMix !== this.props.currentMix) {
        // start playing the mix
        this.widget.load(nextProps.currentMix, true);
      } else if (!nextProps.fromMixcloud) {
        this.widget.togglePlay();
      }
    };
  }

  mountAudio = async () => {
    const {playMix} = this.props;
    // when we use the this keyword, our widget is now accessible
    // anywhere inside the component
    this.widget = Mixcloud.PlayerWidget(this.player);
    // here we wait for our widget to be ready before continuing
    await this.widget.ready;

    // using the mixcloud widget events we can detect when our
    // audio has been paused, set playing state to false
    this.widget.events.pause.on(() =>
      playMix({
        playing: false,
        fromMixcloud: true
      })
    );
    // audio is playing again, set playing state to true
    this.widget.events.play.on(() =>
      playMix({
        playing: true,
        fromMixcloud: true
      })
    );
  };

  componentDidMount() {
    // when our app component is all loaded onto the page
    // our componentDidMount gets called and we can be sure
    // everything is ready, so we then run our mountAudio()
    // method
    this.mountAudio();
  }

  actions = {
    // we group our methods together inside of an object
    // called actions
    togglePlay: () => {
      // we want to togglePlay() on our widget
      this.widget.togglePlay();
    },
    playMix: mixName => {
      // if the mixName is the same as the currently
      // playing mix, we want to pause it instead
      const {currentMix} = this.state;
      if (mixName === currentMix) {
        // when our code sees a return statement it will
        // stop running here and exit
        return this.widget.togglePlay();
      }
      // update the currentMix in our state
      // with the the mixName
      this.setState({
        currentMix: mixName
      });
      // load a new mix by its name and then
      // start playing it immediately
      this.widget.load(mixName, true);
    }
  };
  render() {
    return (
      <iframe
        width="100%"
        height="60"
        src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffloating-points-jamie-xx-18th-august-2016%2F"
        frameBorder="0"
        className="db fixed bottom-0 z-5"
        // this allows us to get the actual html element inside react
        ref={player => (this.player = player)}
      />
    );
  }
}

export default connect(state => state, actions)(Player);
