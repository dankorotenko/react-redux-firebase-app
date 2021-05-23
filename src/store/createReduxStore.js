import { getFirebase } from 'react-redux-firebase';
import { createStore } from 'redux'
import { getFirestore } from 'redux-firestore';
import reducer from './reducers/reducer';

const initialState = {}
const middleware = [
  thunk.withExtraArgument([getFirebase,getFirestore])
]
export default () => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware) // to add other middleware
  )
}