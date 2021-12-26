const { default: Container } = require('@/layouts/Container')
const { default: ContentWrapper } = require('@/layouts/ContentWrapper')
import React from 'react'

const About = () => (
	<Container title='About | MS'>
		<ContentWrapper className='self-center max-w-full sm:max-w-[30rem] md:max-w-[42rem]'>
			<Intro />
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
  <br></br>
		<p className='mb-2 md:mb-4'>
  <p>Do you love non routine mathematics, do you have a spark of problem solving , do you love to be engaged in problem solving
<br></br>
 Do you want to be a part of the best mathematical society?
<br></br>
Then JOIN the mathematical society! We're an inviting Discord server and  ready to help YOU succeed in the world of logics , mathematics and improve your problem solving skills and thinking capability.
<br></br>
We have tons of resources to help you :
- challenges (potd, potw,qotd which are daily basis problems that make you ready for the best problems to face)
- bot with commands ranging from isl marabot to question bot
- a welcoming and friendly community
- resources to help you to actually be productive
- live solve and marathons that are held by our admins , that deliver you quality content LIVE!
- contests like MSO and MSO(2.0)  that challenges you make you exam ready!
- our own made handouts that are probably best material for olympiads ( that is also  proven as our problem came nmtc stage1 and 2 both!!)                                                                                                                                                                                                   - a welcoming group of students that will solve your every academic doubts
 - and many more that you will get by exploring our server , basically we are a group of students that wants  to spread the light of mathematics in the darks to enlight the kingdom of knowledge!                                                                                                                 We hope you join us and enjoy the art of problem solving!
<br></br>
Links:
Discord Server: <p href="https://discord.gg/PFETTeZ9rk"> Server Link </p>
</p>		
		</p>
		<p>
			
		</p>
	</section>
)







export default About
