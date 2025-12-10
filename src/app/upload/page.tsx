import { UploadForm } from '@/components/notes/UploadForm';
import { GradientSeparator } from '@/components/layout/GradientSeparator';
import { getSession } from '@/lib/session';

export default async function UploadPage() {
    const session = await getSession();

  return (
    <div className="flex flex-col">
      <header className="p-6 md:p-8">
        <h1 className="font-headline text-4xl font-bold text-center text-primary">
          Upload Notes
        </h1>
        <p className="mt-2 text-center text-lg text-muted-foreground">
          Share your knowledge with the community.
        </p>
      </header>
      <GradientSeparator />
      <div className="p-6 md:p-8">
        <UploadForm uploader={session?.username ?? ''}/>
      </div>
    </div>
  );
}
