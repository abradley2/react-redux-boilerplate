import * as React from 'react'
import {bindActionCreators} from 'redux'
import View from '../utils/View'
import store from '../store'
import {
	creators,
	CREATE,
	REMOVE,
	EDIT_TITLE,
	TOGGLE_COMPLETED
} from '../actions/TodoActions'

import Todo from '../components/Todo'
import TodoNavs from '../components/TodoNavs'

class TodoList extends View {
	constructor (props) {
		super(props)
		this.actions = bindActionCreators(creators, store.dispatch)
	}
	render () {
		return <div className='container'>
			<TodoNavs />
			<div className='col-sm-6'>
				<div className='col-xs-12'>
					<button
						className='btn btn-primary'
						onClick={this.actions[CREATE]}
					>
						Create Todo
					</button>
				</div>
				<div className='todos col-xs-12'>
				{this.state.Todos.toJS()
					.filter(todo => {
						switch (this.props.filter) {
							case 'completed':
								return todo.completed
							case 'incompleted':
								return !todo.completed
							default:
								return true
						}
					})
					.map(todo => {
						return <Todo
							{...todo}
							key={todo.uid}
							onEditTitle={title => {
								this.actions[EDIT_TITLE](todo.uid, title)
							}}
							onToggleCompleted={this.actions[TOGGLE_COMPLETED].bind(todo, todo.uid)}
							onRemoveClicked={this.actions[REMOVE].bind(todo, todo.uid)}
						/>
					})
				}
				</div>
			</div>
		</div>
	}
}

export default TodoList
