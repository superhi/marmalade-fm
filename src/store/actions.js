const playMix = payload => ({
  type: 'PLAY_MIX',
  payload
});

const addMix = payload => ({
  type: 'ADD_MIX',
  payload
});

// export all of our action creators
export default {
  playMix,
  addMix
};
