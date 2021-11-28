const { default: Container } = require('@/layouts/Container')
const { default: ContentWrapper } = require('@/layouts/ContentWrapper')
import Timeline from '@/components/Timeline'
import * as tools from '@/data/tools'
import React from 'react'

const About = () => (
	<Container title='About | MS'>
		<ContentWrapper className='self-center max-w-full sm:max-w-[30rem] md:max-w-[42rem]'>
			<Intro />
			<Skills />
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
		<h2 className='heading text-xl md:text-2xl mt-8 mb-4'>Interests</h2>
		<p className='mb-2 md:mb-4'>
		
		</p>
		<p>
			
		</p>
	</section>
)

const Skills = () => {
	const skills = Object.values(tools).filter((tool) => tool.include)
	return (
		<section>
			<h1 className='heading'>Tools & Technologies</h1>
			<p className='mb-4'>
				
		
		</section>
	)
}

const Skill = ({ name, icon }) => (
	<li className='flex flex-col text-center justify-center items-center m-2 2xl:m-4'>
		{React.createElement(icon, {
			className: 'h-8 w-8 lg:h-12 lg:w-12 2xl:h-16 2xl:w-16 mb-2',
		})}
		{name}
	</li>
)

const TimelineContainer = () => (
	<section>
		<h1 className='heading'>Timeline</h1>
		<Timeline />
	</section>
)

export default About
