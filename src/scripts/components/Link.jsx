import * as React from 'react'
import router from '../router'

export default function Link (props) {
	return <a
		{...props}
		data-prevent-default='true'
		onClick={e => {
			router.navigate(props.href)
		}}
	>
		<div style={{padding:'20px'}}>
		{props.children}
		</div>
	</a>
}
