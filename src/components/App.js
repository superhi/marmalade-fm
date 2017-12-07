/*global Mixcloud*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import FeaturedMix from './FeaturedMix';
import Header from './Header';
import Home from './Home';

const Archive = () => <h1>Archive</h1>;
const About = () => <h1>About</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // whether a mix is currently playing
      playing: false,
      // the id of the current mix
      currentMix: '',
      mix: null
    };
  }

  fetchMixes = async () => {
    console.log('fetchMixes');
    try {
      // always remember await when using fetch in an async function
      const response = await fetch(
        'https://api.mixcloud.com/yazcine/bal-dambiances-ruh-special-guests-collab-by-skyecatcher-and-neon-jesus/'
      );
      const data = await response.json();
      // put the mix into our state
      this.setState({
        mix: data
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  mountAudio = async () => {
    // when we use the this keyword, our widget is now accessible
    // anywhere inside the component
    this.widget = Mixcloud.PlayerWidget(this.player);
    // here we wait for our widget to be ready before continuing
    await this.widget.ready;

    // using the mixcloud widget events we can detect when our
    // audio has been paused, set playing state to false
    this.widget.events.pause.on(() =>
      this.setState({
        playing: false
      })
    );
    // audio is playing again, set playing state to true
    this.widget.events.play.on(() =>
      this.setState({
        playing: true
      })
    );

    console.log(this.widget);
  };

  componentDidMount() {
    // when our app component is all loaded onto the page
    // our componentDidMount gets called and we can be sure
    // everything is ready, so we then run our mountAudio()
    // method
    this.mountAudio();
    this.fetchMixes();
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
      // router wraps our whole page and lets us use react-router
      <Router>
        <div>
          {/* this div contians our page (excluding audio player) */}
          <div className="flex-l justify-end">
            {/* FeaturedMix (needs styling and updating) */}
            <FeaturedMix />
            <div className="w-50-l relative z-1">
              {/* Header (needs styling and updating)  */}
              <Header />
              {/* Routed page */}
              {/* here we pass our state and our actions down into the
              home component so that we can use them */}
              <Route exact path="/" component={() => <Home {...this.state} {...this.actions} />} />
              <Route path="/archive" component={Archive} />
              <Route path="/about" component={About} />
            </div>
          </div>
          {/* AudioPlayer */}
          <iframe
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffloating-points-jamie-xx-18th-august-2016%2F"
            frameBorder="0"
            className="db fixed bottom-0 z-5"
            // this allows us to get the actual html element inside react
            ref={player => (this.player = player)}
          />
        </div>
      </Router>
    );
  }
}

export default App;
