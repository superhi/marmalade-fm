import React, {Component} from 'react';
import {connect} from 'react-redux';
import differenceInDays from 'date-fns/difference_in_days';
import Stat from './Stat';

const Tag = ({name, url}) => (
  <div className="mr2 mb2 o-70">
    <a
      className="block f6 link blue b ba bw1 b--blue br2 pv1 ph2 lh-title"
      href={url}
      target="_blank"
    >
      {name}
    </a>
  </div>
);

// takes in a tags array and loops over them
const Tags = ({tags = []}) => (
  <div className="tags flex flex-wrap">{tags.map(tag => <Tag {...tag} />)}</div>
);

const Show = ({mix}) => (
  <div className="ph3 ph4-l pad-bottom">
    <div className="measure center lh-copy">
      <Tags tags={mix.tags} />

      <p>{mix.description}</p>

      <Stat statName="Plays" statNumber={mix.play_count || 0} statWord="times" />

      {/* new Date() creates a date/time stamp from the current time */}
      {/* differenceInDays(new Date(), mix.created_time) */}

      <Stat
        statName="Uploaded"
        statNumber={differenceInDays(new Date(), mix.created_time)}
        statWord="days ago"
      />

      <Stat statName="Lasting for" statNumber={mix.audio_length / 60} statWord="minutes" />
    </div>
  </div>
);

// this is what we call a selector, it grabs a certain
// piece of data from our state
const getMix = (mixes, slug) => {
  // here we grab the mix that has a slug that matches
  // our params from the url
  const [mix = {}] = mixes.filter(mix => mix.slug === slug);
  return mix;
};

export default connect((state, props) => ({
  mix: getMix(state.mixes, props.match.params.slug)
}))(Show);
