import React from 'react'
import { formatter } from "../Format";

function Header({ money , total}) {

	return (
		<>
			{total > 0 ? (
				<div className="header"> HARCAMAK İÇİN <span className="money">{formatter.format(money - total)} </span>PARANIZ VAR. </div>
			) : (
				<div className="header"> HADİ ÇALINTI PARALAR İLE EĞLENELİM :D</div>
			)}

		</>
	)
}

export default Header
