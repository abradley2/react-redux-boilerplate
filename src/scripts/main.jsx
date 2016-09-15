import * as React from 'react'
import router from './router'
import {render} from 'react-dom'
import store from './store'
import TodoList from './views/TodoList'

var appContainer

router.on('/todos/:filter', function (ctx) {
	render(
		<TodoList state={store.getState()} filter={ctx.filter} />
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

document.addEventListener('click', function(e){
  var from = findParent('a', e.target);
  console.log('parent = ',e.target)
  if (from && from.hasAttribute('data-prevent-default')){
     /* it's a link, actions here */
	  e.preventDefault()
  }
})
//find first parent with tagName [tagname]
function findParent(tagname,el){
  if ((el.nodeName || el.tagName).toLowerCase()===tagname.toLowerCase()){
    return el;
  }
  while (el = el.parentNode){
    if ((el.nodeName || el.tagName).toLowerCase()===tagname.toLowerCase()){
      return el;
    }
  }
  return null;
}

document.addEventListener('DOMContentLoaded', function () {
	appContainer = document.getElementById('app')
	router.resolve()
})
