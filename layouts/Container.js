import Footer from '@/components/Footer'
import NavBar, { MobileNavMenu } from '@/components/NavBar'
import useToggle from '@/utils/hooks/useToogle'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Container = ({ children, ...customMeta }) => {
	const [isOpen, toggleIsOpen] = useToggle()
	return (
		<div className='bg-light dark:bg-dark w-[92vw] sm:w-[90vw] 2xl:w-[80vw] px-1 md:px-0 mx-auto'>
			<Seo {...customMeta} />
			<NavBar toggleIsOpen={toggleIsOpen} />
			<main className='flex flex-col bg-light dark:bg-dark min-h-[70vh]'>
				{isOpen ? <MobileNavMenu /> : children}
			</main>
			{!isOpen && <Footer />}
		</div>
	)
}

const Seo = ({ ...customMeta }) => {
	const router = useRouter()
	const meta = {
		title: 'MS- Mathematical Society',
		description:
			'About',
		image: 'https://media.discordapp.net/attachments/852527282581012542/914388100409597983/MATHEMATICAL_2-removebg-preview_1.png',
		type: 'website',
		keywords:
			'',
		...customMeta,
	}

	return (
		<Head>
			<title>{meta.title}</title>
			<meta name='robots' content='follow, index' />
			<meta content={meta.description} name='description' />
			<meta
				property='og:url'
				content={`https://mathematicssociety.vercel.app/${router.asPath}`}
			/>
			<link rel='canonical' href={`https://niteshseram.in${router.asPath}`} />
			<meta property='og:type' content={meta.type} />
			<meta property='og:site_name' content='MS' />
			<meta property='og:description' content={meta.description} />
			<meta property='og:title' content={meta.title} />
			<meta property='og:image' content={meta.image} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content='@niteshseram' />
			<meta name='twitter:title' content={meta.title} />
			<meta name='twitter:description' content={meta.description} />
			<meta name='twitter:image' content={meta.image} />
			<meta name='keywords' content={meta.keywords} />
			{meta.date && (
				<meta property='article:published_time' content={meta.date} />
			)}
		</Head>
	)
}

export default Container
