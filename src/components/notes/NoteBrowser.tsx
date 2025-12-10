'use client';

import { useState, useMemo } from 'react';
import type { Note } from '@/lib/definitions';
import { NoteCard } from '@/components/notes/NoteCard';
import { NoteFilters } from '@/components/notes/NoteFilters';
import { AnimatePresence, motion } from 'framer-motion';

type NoteBrowserProps = {
  notes: Note[];
  colleges: string[];
  subjects: string[];
};

export function NoteBrowser({ notes, colleges, subjects }: NoteBrowserProps) {
  const [selectedCollege, setSelectedCollege] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const collegeMatch = selectedCollege === 'all' || note.college === selectedCollege;
      const subjectMatch = selectedSubject === 'all' || note.subject === selectedSubject;
      const searchMatch =
        searchQuery === '' ||
        note.professor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.subject.toLowerCase().includes(searchQuery.toLowerCase());
      return collegeMatch && subjectMatch && searchMatch;
    });
  }, [notes, selectedCollege, selectedSubject, searchQuery]);

  return (
    <div className="space-y-8">
      <NoteFilters
        colleges={colleges}
        subjects={subjects}
        selectedCollege={selectedCollege}
        onCollegeChange={setSelectedCollege}
        selectedSubject={selectedSubject}
        onSubjectChange={setSelectedSubject}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <AnimatePresence>
        {filteredNotes.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredNotes.map((note, index) => (
              <NoteCard key={note.id} note={note} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 py-20 text-center"
          >
            <h3 className="text-xl font-semibold text-muted-foreground">No Notes Found</h3>
            <p className="mt-2 text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
