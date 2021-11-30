import {
	hsql,
	MDX,
	monogdb,
	next,
	node,
	react,
	springboot,
	styledcomponents,
	tailwind,
} from '@/data/tools'

const projects = [
	{
		id: 1,
		title: 'Contests',
		description:
			'MS',
		tools: [next, tailwind, MDX],
		repo: 'https://mathematicssociety.vercel.app/',
		feature: false,
	},
	{
		id: 2,
		title: 'Contest I name',
		description:
			'Messi is not a good player',
		tools: [react, node, monogdb],
		live: 'https://mathematicssociety.vercel.app/',
		repo: 'https://mathematicssociety.vercel.app/',
		feature: true,
	},
	{
		id: 3,
		title: 'LifeISPhysics',
		description:
			'Life is not physics okay!',
		tools: [react, springboot, hsql],
		live: 'https://mathematicssociety.vercel.app/',
		repo: 'https://mathematicssociety.vercel.app/',
		feature: true,
	},
	{
		id: 4,
		title: 'MS',
		description:
			'MS',
		tools: [next, styledcomponents],
		live: 'https://mathematicssociety.vercel.app/',
		repo: 'https://mathematicssociety.vercel.app/',
		feature: false,
	},
]

export default projects
