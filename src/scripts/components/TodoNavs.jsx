import * as React from 'react'
import Link from './Link'

export default function TodoNavs (props) {
	return <div className='row'>
		<div className='col-xs-12'>
			<ul className='nav nav-pills'>
			{[
				{label: 'All', link: 'todos/all'},
				{label: 'Completed', link: 'todos/completed'},
				{label: 'Incompleted', link: 'todos/incompleted'}
			].map((nav, idx) => {
				return <li key={idx}>
					<Link href={nav.link}>
						{nav.label}
					</Link>
				</li>
			})}
			</ul>
		</div>
	</div>
}
