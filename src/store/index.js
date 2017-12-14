const initialState = {
  mixes: [],
  currentMix: null,
  widgetReady: false,
  playing: false,
  fromMixcloud: false,
  featuredMix: null
};

function mixesApp(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case 'PLAY_MIX':
      const {currentMix, playing} = payload;
      return {
        ...state,
        // spread out the payload rather than listing them out
        // explicitly, it stops them from overwriting
        ...payload,
        playing: currentMix === state.currentMix ? !playing : playing
      };
    case 'ADD_MIX':
      return {
        ...state,
        mixes: [...state.mixes, {...payload, id: payload.key}]
      };
    case 'SET_WIDGET_READY':
      return {
        ...state,
        widgetReady: true
      };
    case 'SET_FEATURED_MIX':
      return {
        ...state,
        featuredMix: payload
      };
    default:
      return state;
  }
}

export default mixesApp;
