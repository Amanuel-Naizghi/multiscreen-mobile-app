export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
};

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Accounting Clerk',
    company: 'Harpreet Parmar Professional Corporation',
    location: 'Calgary, AB',
    salary: '$16–$18 an hour',
  },
  {
    id: '2',
    title: 'Intermediate Accountant',
    company: 'Mohammad H Khatri Professional Corporation',
    location: 'Calgary, AB T2E 7E4',
    salary: '$20–$25 an hour',
  },
  {
    id: '3',
    title: 'Software Developer',
    company: 'Helm Operations Software Inc',
    location: 'Remote',
    salary: '$60,000–$75,000 a year',
  },
  {
    id: '4',
    title: 'Junior Software Developer',
    company: 'Tech Solutions Inc.',
    location: 'Calgary, AB',
    salary: '$55,000–$70,000 a year',
  },
];