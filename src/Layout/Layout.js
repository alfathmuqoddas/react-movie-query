import React from 'react';

const Layout = ({children}) => {
	return (
		<div>
			<div className="container px-md-5" style={{minHeight: "81vh"}}>{children}</div>
			<div className="py-5 bg-light">
				<div className="container px-md-5 text-center">Alfath Muqoddas ©2021</div>
			</div>
		</div>
	)
}

export default Layout;
