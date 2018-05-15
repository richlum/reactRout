import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { initContact, updateMeta } from './actions'

const metaReducer = (state,action) => {
	switch(action.type) {
		case 'UPDATE_META':
			return action.payload;
		case 'PAGE_FWD':
			return {...action.payload,  page: action.payload.page+1  }
	}
}


const rootReducer = combineReducers({
	form: formReducer,
	formmeta: updateMeta
})

const store = createStore(rootReducer);

export default store
