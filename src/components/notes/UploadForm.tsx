'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createNote, type CreateNoteState } from '@/actions/notes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { UploadCloud, AlertCircle, CheckCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Uploading...' : 'Upload Note'}
      <UploadCloud />
    </Button>
  );
}

export function UploadForm({ uploader }: { uploader: string }) {
  const initialState: CreateNoteState = { error: null, success: false };
  const [state, dispatch] = useFormState(createNote, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={dispatch} className="mx-auto max-w-xl space-y-6">
      <input type="hidden" name="uploader" value={uploader} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="college">College</Label>
          <Input id="college" name="college" placeholder="e.g., St. Joseph's College" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" placeholder="e.g., Advanced Calculus" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="professor">Professor</Label>
        <Input id="professor" name="professor" placeholder="e.g., Dr. Evelyn Reed" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="file">Note File (PDF)</Label>
        <Input id="file" name="file" type="file" required accept=".pdf" />
        <p className="text-sm text-muted-foreground">File upload is for demonstration only.</p>
      </div>
      
      {state.error && (
        <Alert variant="destructive" className="bg-destructive/20">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Upload Failed</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state.success && (
        <Alert variant="default" className="bg-green-500/20 border-green-500 text-foreground">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>Your note has been uploaded successfully. It is now available for others to browse.</AlertDescription>
        </Alert>
      )}

      <SubmitButton />
    </form>
  );
}
