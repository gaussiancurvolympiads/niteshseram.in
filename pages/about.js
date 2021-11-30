const { default: Container } = require('@/layouts/Container')
const { default: ContentWrapper } = require('@/layouts/ContentWrapper')
import React from 'react'

const About = () => (
	<Container title='About | MS'>
		<ContentWrapper className='self-center max-w-full sm:max-w-[30rem] md:max-w-[42rem]'>
			<Intro />
			<TimelineContainer />
		</ContentWrapper>
	</Container>
)
const Intro = () => (
	<section className='mt-4 md:mt-8'>
		<h1 className='heading'>About Us</h1>
		<p className='mb-2 md:mb-4'>
			
		</p>
		<p className='mb-2 md:mb-4'>
			
		</p>
		<p>
			
		</p>
		<h2 className='heading text-xl md:text-2xl mt-8 mb-4'>What we do?</h2>
		<p className='mb-2 md:mb-4'>
		
		</p>
		<p>
			
		</p>
	</section>
)







export default About
