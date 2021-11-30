import ContactForm from '@/components/ContactForm'
import ProjectCard from '@/components/ProjectCard'
import projects from '@/data/projects'
import Container from '@/layouts/Container'
import ContentWrapper from '@/layouts/ContentWrapper'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Image from 'next/image'
import Link from 'next/link'

export default function Home {
	return (
		<Container>
			<ContentWrapper>
				<Hero />
				<FeaturedProjects />
				<ContactSection />
			</ContentWrapper>
		</Container>
	)
}

const Hero = () => (
	<div className='flex items-center justify-evenly lg:justify-between flex-col-reverse lg:flex-row w-full min-h-[90vh]'>
		<div className='flex lg:flex-1 items-center lg:items-start justify-center flex-col max-w-xl'>
			<h1 className='font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight text-dark dark:text-light'>
			
				<span className='text-primary dark:text-secondary'> Mathematical Society</span>
			</h1>
			<h2 className='font-bold text-md md:text-xl lg:text-2xl mb-4 lg:mb-8'>
				Mathematics Organisation
			</h2>
			<p className='text-center lg:text-left text-lg lg:text-xl pb-4 lg:pb-8'>
				Welcome to the world of MS
			</p>
			<Link href='#contact' passHref>
				<button className='btn btn-themed uppercase'>Know More?</button>
			</Link>
		</div>
		<div className='flex items-center justify-center flex-none lg:flex-1'>
			<div className='w-[200px] lg:w-[400px] h-[200px] lg:h-[400px] p-1 lg:p-2 border-2 lg:border-4 border-solid border-primary dark:border-secondary rounded-full'>
				<Image
					src="https://imgur.com/Ei9HV47"
					width={400}
					height={400}
					alt='Profile Picture'
				/>
			</div>
		</div>
	</div>
)



const FeaturedProjects = () => (
	<div className='flex flex-col w-full m-auto'>
		<h2 className='text-center heading'>Contests and Handouts</h2>
		<div className='flex flex-col xl:flex-row justify-evenly w-full'>
			<Projects />
		</div>
		<Link href='/projects' passHref>
			<a className='btn btn-secondary-themed capitalize text-center self-center'>
				See everything
			</a>
		</Link>
	</div>
)

const Projects = () => (
	<div className='mx-auto justify-between block 2xl:flex'>
		{projects
			.filter((project) => project.feature)
			.map((project) => (
				<ProjectCard
					role='listitem'
					title={project.title}
					description={project.description}
					tools={project.tools}
					live={project.live}
					repo={project.repo}
					key={project.id}
				/>
			))}
	</div>
)

const ContactSection = () => (
	<div className='flex flex-col w-full m-auto pt-10' id='contact'>
		<h2 className='text-center heading'>Get In Touch</h2>
		<div className='flex flex-col lg:flex-row w-full items-center justify-around'>
			<div className='mb-16 xl:mr-16 flex-1 max-w-full md:max-w-[70%]'>
				<h3 className='font-bold text-xl md:text-lg mb-2'>!</h3>
				<p className='mb-8'>
					Contact
				</p>
				<p>
					Or if you would prefer to, you can also reach us on 
					<a
						className='link'
						href=' '
						target='_blank'
						rel='noreferrer noopener'
					>
						Twitter
					</a>
					.
				</p>
			</div>
			<ContactForm />
		</div>
	</div>
)

export const getStaticProps = async () => {
	const posts = await getAllFilesFrontMatter('blog')
	posts
		.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
		.slice(0, 4)
	return {
		props: { posts },
	}
}
