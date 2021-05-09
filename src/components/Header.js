import React from 'react'

function Header({ money , total}) {


	return (
		<div>
			{total > 0 ? (
				<> Harcamak icin $ {money - total} paraniz var. </>
			) : (
				<> Hadi Calinti Paralar Ile Eglenelim :D</>
			)}
		</div>
	)
}

export default Header
