import Immutable from 'seamless-immutable';

const initialState = Immutable({
  genresByUrl : {},
  selectesGenresUrls : []
});

export default function reduce (state = initialState, action = {}){
  switch (action.type) {
    default:
      return state;
  }
}
