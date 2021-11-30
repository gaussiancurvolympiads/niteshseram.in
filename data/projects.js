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
		title: 'Contests name',
		description:
			'Ban Messi from Football :lmao:',
		tools: [next, next, next],
		repo: 'https://mathematicssociety.vercel.app/',
		feature: false,
	},
	{
		id: 2,
		title: 'Contest I named',
		description:
			'Messi is not a good player',
		tools: [next, next, next],
		live: 'https://mathematicssociety.vercel.app/',
		repo: 'https://mathematicssociety.vercel.app/',
		feature: true,
	},
	{
		id: 3,
		title: 'LifeISPhysics',
		description:
			'Life is not physics okay!',
		tools: [next, next, next],
		live: 'https://mathematicssociety.vercel.app/',
		repo: 'https://mathematicssociety.vercel.app/',
		feature: true,
	},
	{
		id: 4,
		title: 'MS',
		description:
			'These boxes are nice right @messi @lifeismath @hooman ?',
		tools: [next, next],
		live: 'https://mathematicssociety.vercel.app/',
		repo: 'https://mathematicssociety.vercel.app/',
		feature: false,
	},
]

export default projects
