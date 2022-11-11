import React from 'react'

const Navbar = () => {
	return (
		<div className='bg-gray-800 h-12 w-screen flex justify-center items-center '>
			<div className='flex  h-4 w-8'>
				<input type='text' />
				SearchBar
			</div>
			<div className='justify-end'>Profile</div>
		</div>
	)
}

export default Navbar
