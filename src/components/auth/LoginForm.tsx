'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { login, type LoginFormState } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LogIn, AlertCircle } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Logging in...' : 'Login'}
      <LogIn />
    </Button>
  );
}

export function LoginForm() {
  const initialState: LoginFormState = { error: null };
  const [state, dispatch] = useActionState(login, initialState);

  return (
    <form action={dispatch} className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          name="username"
          placeholder=""
          required
          autoComplete="username"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder=""
          required
          autoComplete="current-password"
        />
      </div>

      {state.error && (
        <Alert variant="destructive" className="bg-destructive/20">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      <SubmitButton />
    </form>
  );
}
