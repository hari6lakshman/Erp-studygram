import { getNotes } from '@/lib/data';
import { NoteBrowser } from '@/components/notes/NoteBrowser';
import { GradientSeparator } from '@/components/layout/GradientSeparator';

export default async function Home() {
  const notes = await getNotes();
  const colleges = [...new Set(notes.map((note) => note.college))];
  const subjects = [...new Set(notes.map((note) => note.subject))];

  return (
    <div className="flex flex-col">
      <header className="p-6 md:p-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-center text-primary">
          Erp - Studygram
        </h1>
        <p className="mt-2 text-center text-lg text-muted-foreground">
          Browse and download notes from top colleges.
        </p>
      </header>
      <GradientSeparator />
      <div className="p-6 md:p-8">
        <NoteBrowser notes={notes} colleges={colleges} subjects={subjects} />
      </div>
    </div>
  );
}
