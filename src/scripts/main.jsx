import * as React from 'react'
import router from './router'
import {render} from 'react-dom'
import store from './store'
import TodoList from './views/TodoList'

var appContainer

router.on({
	'/': function (ctx) {
		render(
			<TodoList filter='all' />
			, appContainer
		)
	},
	'/todos/:filter': function (ctx) {
		render(
			<TodoList state={store.getState()} filter={ctx.filter} />
			, appContainer
		)
	}
})

store.dispatch({
	type: '__START__'
})

document.addEventListener('DOMContentLoaded', function () {
	appContainer = document.getElementById('app')
	router.resolve()
})

document.addEventListener('click', function (e) {
	var from = findParent('A', e.target)

	if (from && from.hasAttribute('data-prevent-default')) {
		e.preventDefault()
	}
})

function findParent (tagName, el) {
	if (el.tagName === tagName){
		return el
	} else if (el.parentNode) {
		return findParent(tagName, el.parentNode)
	} else {
		return null
	}
}
