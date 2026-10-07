export type MyJob = {
  id: string;
  title: string;
  company: string;
  status: string;
};

export const myJobs: MyJob[] = [
  {
    id: '1',
    title: 'Software Developer',
    company: 'ABC Technologies',
    status: 'Applied',
  },
  {
    id: '2',
    title: 'Junior Software Developer',
    company: 'Tech Solutions Inc.',
    status: 'Interviewing',
  },
  {
    id: '3',
    title: 'Web Developer',
    company: 'Creative Technologies',
    status: 'Saved',
  },
];