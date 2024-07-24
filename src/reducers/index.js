/* import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form
});

export default rootReducer; */


import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;