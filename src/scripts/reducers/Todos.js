import {List, Map} from 'immutable'
import {generate as genId} from 'shortid'
import {
	CREATE,
	EDIT_TITLE,
	TOGGLE_COMPLETED,
	REMOVE
} from '../actions/TodoActions'

export default function (state = List([]), action) {

	switch (action.type) {

		case CREATE:
			return state.push(Map({
				uid: genId(),
				title: 'New Todo',
				completed: false
			}))

		case EDIT_TITLE:
			var idx = state.findIndex(todo => todo.get('uid') === action.uid)
			
			return state.set(
				idx,
				state.get(idx).set('title', action.title)
			)

		case TOGGLE_COMPLETED:
			var idx = state.findIndex(todo => todo.get('uid') === action.uid)

			return state.set(
				idx,
				state.get(idx).set(
					'completed', !state.get(idx).get('completed')
				)
			)

		case REMOVE:
			return state.filter(todo => todo.get('uid') !== action.uid)

		default:
			return state

	}

}
