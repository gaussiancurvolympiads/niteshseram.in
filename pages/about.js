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
 Do you love non routine mathematics, do you have a spark of problem solving , do you love to be engaged in problem solving
<br></br><br></br>
 Do you want to be a part of the best mathematical society?
<br></br><br></br>
Then JOIN the mathematical society! We are an inviting Discord server and  ready to help YOU succeed in the world of logics , mathematics and improve your problem solving skills and thinking capability.
<br></br><br></br>
We have tons of resources to help you : <br></br><br></br>
- challenges (potd, potw,qotd which are daily basis problems that make you ready for the best problems to face)<br></br><br></br>
- bot with commands ranging from isl marabot to question bot<br></br><br></br>
- a welcoming and friendly community <br></br><br></br>
- resources to help you to actually be productive<br></br><br></br>
- live solve and marathons that are held by our admins , that deliver you quality content LIVE!<br></br><br></br>
- contests like MSO and MSO(2.0)  that challenges you make you exam ready!<br></br><br></br>
- our own made handouts that are probably best material for olympiads ( that is also  proven as our problem came nmtc stage 1 and 2 both!!)   <br></br>      <br></br>                                                                                                                                                                                          - a welcoming group of students that will solve your every academic doubts
 - and many more that you will get by exploring our server , basically we are a group of students that wants  to spread the light of mathematics in the darks to enlight the kingdom of knowledge!                                                                                                                 We hope you join us and enjoy the art of problem solving!
<br></br><br></br>
Links: <br></br>
Discord Server: <a href="https://discord.gg/PFETTeZ9rk"> Server Link </a>	
		</p>
		<p>
			
		</p>
	</section>
)







export default About
