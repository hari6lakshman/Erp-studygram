'use server';

import { addNote } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export type CreateNoteState = {
  error: string | null;
  success: boolean;
};

const NoteSchema = z.object({
  college: z.string().min(1, 'College is required.'),
  subject: z.string().min(1, 'Subject is required.'),
  professor: z.string().min(1, 'Professor is required.'),
  uploader: z.string(),
});

export async function createNote(
  prevState: CreateNoteState,
  formData: FormData
): Promise<CreateNoteState> {
  const validatedFields = NoteSchema.safeParse({
    college: formData.get('college'),
    subject: formData.get('subject'),
    professor: formData.get('professor'),
    uploader: formData.get('uploader'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.college?.[0] || 'Invalid data provided.',
      success: false,
    };
  }

  // File handling is omitted as per project scope
  // In a real app, you would upload the file and extract text content here.

  try {
    await addNote(validatedFields.data);
  } catch (e) {
    return { error: 'Failed to save note to the database.', success: false };
  }

  revalidatePath('/');
  return { error: null, success: true };
}
