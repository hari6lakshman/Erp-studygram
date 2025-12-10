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
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: '2',
    college: 'IIT Madras',
    subject: 'Quantum Mechanics',
    professor: 'Dr. Arjun Varma',
    uploader: 'iitm',
    uploadDate: '2023-10-25T14:30:00Z',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: '3',
    college: 'Saveetha University',
    subject: 'Data Structures',
    professor: 'Prof. Meena Kumari',
    uploader: 'saveetha',
    uploadDate: '2023-10-24T09:15:00Z',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: '4',
    college: 'IIT Madras',
    subject: 'Advanced Calculus',
    professor: 'Dr. Priya Sharma',
    uploader: 'iitm',
    uploadDate: '2023-10-23T16:45:00Z',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: '5',
    college: 'St. Joseph\'s College',
    subject: 'Literary Theory',
    professor: 'Dr. Samuel Chen',
    uploader: 'stjosephs',
    uploadDate: '2023-10-22T11:00:00Z',
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
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

export const addNote = async (note: Omit<Note, 'id' | 'uploadDate' | 'downloadUrl'>): Promise<Note> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newNote: Note = {
        ...note,
        id: (notes.length + 1).toString(),
        uploadDate: new Date().toISOString(),
        // In a real app, you would handle file upload and get a URL.
        downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      };
      notes.unshift(newNote);
      resolve(newNote);
    }, 500);
  });
};
