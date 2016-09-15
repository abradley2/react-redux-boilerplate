import * as React from 'react'

export default function Todo (props) {
	return <div className='input-group'>
		<span className='input-group-btn'>
			<button
				className={props.completed ? 'btn btn-success' : 'btn btn-disabled'}
				onClick={props.onToggleCompleted}
			>
				<i
					className='fa fa-check'
				/>
			</button>
		</span>
		<input
			className='form-control'
			type='text'
			value={props.title}
			onChange={e => {
				props.onEditTitle(e.target.value)
			}}
		/>
		<span className='input-group-btn'>
			<button
				className='btn btn-danger'
				onClick={props.onRemoveClicked}
			>
				X
			</button>
		</span>
	</div>
}
