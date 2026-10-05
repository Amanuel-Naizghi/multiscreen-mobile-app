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
    title: 'Software Developer',
    company: 'ABC Technologies',
    location: 'Calgary, AB',
    salary: '$60,000–$75,000 a year',
  },
  {
    id: '2',
    title: 'Junior Software Developer',
    company: 'Tech Solutions Inc.',
    location: 'Calgary, AB',
    salary: '$55,000–$70,000 a year',
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: 'Digital Solutions',
    location: 'Calgary, AB',
    salary: '$65,000–$85,000 a year',
  },
  {
    id: '4',
    title: 'Web Developer',
    company: 'Creative Technologies',
    location: 'Calgary, AB',
    salary: '$50,000–$65,000 a year',
  },
];