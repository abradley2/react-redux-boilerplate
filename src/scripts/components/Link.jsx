import * as React from 'react'
import router from '../router'

export default function Link (props) {
	return <a
		{...props}
		onClick={e => {
			debugger
			router.navigate(props.href)
			e.nativeEvent.preventDefault()
		}}
	>
		{props.children}
	</a>
}
