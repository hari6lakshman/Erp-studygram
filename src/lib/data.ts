import type { Note } from '@/lib/definitions';

// In-memory store acting as a local database
let notes: Note[] = [
  {
    id: '1',
    college: 'St. Joseph\'s College',
    subject: 'Advanced Calculus',
    professor: 'Dr. Evelyn Reed',
    uploader: 'stjosephs',
    uploadDate: '2023-10-26T10:00:00Z',
    content: `An introduction to Advanced Calculus, focusing on limits and continuity.
A limit is the value that a function or sequence "approaches" as the input or index approaches some value.
Continuity is a property of a function that can be informally described as "a function that can be drawn without lifting your pen from the paper".`,
  },
  {
    id: '2',
    college: 'IIT Madras',
    subject: 'Quantum Mechanics',
    professor: 'Dr. Arjun Varma',
    uploader: 'iitm',
    uploadDate: '2023-10-25T14:30:00Z',
    content: `This lecture covers the basics of Quantum Mechanics, including wave-particle duality and the Schrödinger equation.
Wave-particle duality posits that all particles exhibit both wave and particle properties.
The Schrödinger equation is a mathematical equation that describes the changes over time of a physical system in which quantum effects, such as wave-particle duality, are significant.`,
  },
  {
    id: '3',
    college: 'Saveetha University',
    subject: 'Data Structures',
    professor: 'Prof. Meena Kumari',
    uploader: 'saveetha',
    uploadDate: '2023-10-24T09:15:00Z',
    content: `An overview of fundamental data structures.
Arrays: A collection of items stored at contiguous memory locations.
Linked Lists: A linear collection of data elements whose order is not given by their physical placement in memory.
Stacks: A linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).
Queues: A linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO).`,
  },
  {
    id: '4',
    college: 'IIT Madras',
    subject: 'Advanced Calculus',
    professor: 'Dr. Priya Sharma',
    uploader: 'iitm',
    uploadDate: '2023-10-23T16:45:00Z',
    content: `This note covers differentiation and integration in multiple dimensions.
Partial derivatives are derivatives of a function of several variables with respect to one variable, with the others held constant.
Multiple integrals are definite integrals of functions of more than one real variable.`,
  },
  {
    id: '5',
    college: 'St. Joseph\'s College',
    subject: 'Literary Theory',
    professor: 'Dr. Samuel Chen',
    uploader: 'stjosephs',
    uploadDate: '2023-10-22T11:00:00Z',
    content: `An introduction to major schools of literary theory.
Formalism: A school of literary criticism and literary theory having mainly to do with structural purposes of a particular text.
Structuralism: Relates literary texts to a larger structure, which may be a particular genre, a range of intertextual connections, a model of a universal narrative structure, or a system of recurrent patterns or motifs.`,
  },
];

// The server actions that use these functions are revalidated, so we don't need to worry about caching.
export const getNotes = async (): Promise<Note[]> => {
  // In a real app, you'd fetch this from a database.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(notes);
    }, 500); // Simulate network delay
  });
};

export const addNote = async (note: Omit<Note, 'id' | 'uploadDate' | 'content'>): Promise<Note> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newNote: Note = {
        ...note,
        id: (notes.length + 1).toString(),
        uploadDate: new Date().toISOString(),
        // In a real app, you would handle file upload and get content.
        content: 'This is a newly uploaded note. The content would appear here.',
      };
      notes.unshift(newNote);
      resolve(newNote);
    }, 500);
  });
};
