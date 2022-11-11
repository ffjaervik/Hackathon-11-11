import React from 'react'
import Navbar from './Navbar'
import Channels from './Channels'
import CommentForm from './CommentForm'
import PostList from './PostList'

const Layout = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className='flex '>
				<Channels />
				<div className='flex flex-col w-full justify-between'>
					<PostList />
					

						<CommentForm />
				
				</div>
			</main>
		</>
	)
}

export default Layout
