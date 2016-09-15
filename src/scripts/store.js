import {combineReducers, createStore} from 'redux'
import Todos from './reducers/Todos'

const app = combineReducers({
	Todos: Todos
})

const store = createStore(app,
	window.devToolsExtension && window.devToolsExtension()
)

export default store
