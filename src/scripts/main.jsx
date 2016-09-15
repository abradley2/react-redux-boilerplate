import * as React from 'react'
import Navigo from 'navigo'
import {render} from 'react-dom'
import store from './store'
import TodoList from './views/TodoList'

var appContainer, router = new Navigo()

router.on('/', function () {
	render(
		<TodoList filter='all' />
		, appContainer)
})

router.on('/todos/:filter', function (ctx) {
	render(
		<TodoList state={store.getState()} filter={ctx.params.filter} />
		, appContainer)
})

store.dispatch({
	type: '__START__'
})

document.addEventListener('DOMContentLoaded', function () {
	appContainer = document.getElementById('app')
	router.resolve()
})
