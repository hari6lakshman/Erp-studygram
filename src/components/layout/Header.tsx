import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getSession } from '@/lib/session';
import { logout } from '@/actions/auth';
import { BookCopy, LogIn, LogOut, Upload } from 'lucide-react';

async function AuthButton() {
  const session = await getSession();

  return session ? (
    <form action={logout}>
      <Button variant="ghost" type="submit">
        Logout <LogOut />
      </Button>
    </form>
  ) : (
    <Button asChild variant="ghost">
      <Link href="/login">
        Login <LogIn />
      </Link>
    </Button>
  );
}

export async function Header() {
  const session = await getSession();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 max-w-6xl items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <BookCopy className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">Classroom Central</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          {session && (
            <Button asChild variant="ghost">
                <Link href="/upload">Upload <Upload /></Link>
            </Button>
          )}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <AuthButton />
        </div>
      </div>
    </header>
  );
}
