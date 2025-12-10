'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { logout } from '@/actions/auth';
import { BookCopy, LogIn, LogOut, Upload } from 'lucide-react';
import type { getSession } from '@/lib/session';

type Session = Awaited<ReturnType<typeof getSession>>;

function AuthButton({ session }: { session: Session }) {
  return session ? (
    <form action={logout}>
      <Button variant="ghost" type="submit">
        Logout <LogOut />
      </Button>
    </form>
  ) : (
    <Button asChild variant="ghost">
      <Link href="/login">
        College Login <LogIn />
      </Link>
    </Button>
  );
}

export function HeaderClient({ session }: { session: Session }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 max-w-6xl items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <BookCopy className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">
            Erp Studygram
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          {session && (
            <Button asChild variant="ghost">
              <Link href="/upload">
                Upload <Upload />
              </Link>
            </Button>
          )}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <AuthButton session={session} />
        </div>
      </div>
    </header>
  );
}
