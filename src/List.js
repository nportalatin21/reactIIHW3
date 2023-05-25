import React from 'react'
//import './People.scss'

export const List = ({data}) => {

	return (
	<div className="People">
		<table>
			<tead></tead>
			<tbody>
				{
					data.map(p => (
						<tr key={p.id}>
							<td>{p.Picture}</td>
                            <td>{p.Animal}</td>
						</tr>))
				}	
			</tbody>
		</table>
	</div>
	)
}