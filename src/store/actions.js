const playMix = payload => ({
  type: 'PLAY_MIX',
  payload
});

const addMix = payload => ({
  type: 'ADD_MIX',
  payload
});

const setWidgetReady = payload => ({
  type: 'SET_WIDGET_READY',
  payload
});

const setFeaturedMix = payload => ({
  type: 'SET_FEATURED_MIX',
  payload
});

// export all of our action creators
export default {
  setFeaturedMix,
  setWidgetReady,
  playMix,
  addMix
};
