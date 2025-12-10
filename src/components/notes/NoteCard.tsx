'use client';

import type { Note } from '@/lib/definitions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookText, User, School, Calendar, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type NoteCardProps = {
  note: Note;
  index: number;
};

export function NoteCard({ note, index }: NoteCardProps) {
  const uploadDate = new Date(note.uploadDate);
  const timeAgo = formatDistanceToNow(uploadDate, { addSuffix: true });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="flex h-full flex-col border-primary/20 bg-card/50 transition-all hover:border-primary/60 hover:shadow-primary/20 hover:shadow-lg">
        <CardHeader>
          <div className="flex items-start gap-4">
            <BookText className="h-8 w-8 shrink-0 text-primary" />
            <div>
              <CardTitle className="font-headline text-xl leading-tight">{note.subject}</CardTitle>
              <CardDescription className="flex items-center gap-1.5 pt-1">
                <User className="h-3 w-3" /> {note.professor}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <School className="h-4 w-4 shrink-0 text-primary/70" />
            <span>{note.college}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 shrink-0 text-primary/70" />
            <span>Uploaded {timeAgo} by {note.uploader}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">
                View Note <FileText />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl text-primary">{note.subject}</DialogTitle>
                <DialogDescription>
                  {note.college} - Taught by {note.professor}
                </DialogDescription>
              </DialogHeader>
              <div className="prose prose-sm max-w-none rounded-md border bg-muted/50 p-4 whitespace-pre-wrap">
                {note.content}
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
