import * as React from 'react'
import router from './router'
import {render} from 'react-dom'
import store from './store'
import TodoList from './views/TodoList'

var appContainer

router.on('/todos/:filter', function (ctx) {
	console.log('filter = ',ctx.params.filter)
	render(
		<TodoList state={store.getState()} filter={ctx.params.filter} />
		, appContainer)
})

router.on('/', function () {
	console.log('default view')
	render(
		<TodoList filter='all' />
		, appContainer)
})

store.dispatch({
	type: '__START__'
})

document.addEventListener('DOMContentLoaded', function () {
	appContainer = document.getElementById('app')
	router.resolve()
})
