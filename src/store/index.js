const initialState = {
  mixes: [],
  currentMix: 'groovy disco bangers!',
  playing: false,
  fromMixcloud: false
};

function mixesApp(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case 'PLAY_MIX':
      const {playing, currentMix, fromMixcloud} = payload;
      return {
        ...state,
        // spread out the payload rather than listing them out
        // explicitly, it stops them from overwriting
        ...payload,
        // when a user wants to play the mix that is currently playing
        // it means they want to pause it, otherwise play the new mix
        playing: currentMix === state.currentMix ? !playing : playing,
        fromMixcloud
      };
    case 'ADD_MIX':
      return {
        ...state,
        mixes: [...state.mixes, {...payload, id: payload.key}]
      };
    default:
      return state;
  }
}

export default mixesApp;
