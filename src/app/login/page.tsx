import { LoginForm } from '@/components/auth/LoginForm';
import { GradientSeparator } from '@/components/layout/GradientSeparator';

export default function LoginPage() {
  return (
    <div className="flex flex-col">
      <header className="p-6 md:p-8">
        <h1 className="font-headline text-4xl font-bold text-center text-primary">
          Member Login
        </h1>
      </header>
      <GradientSeparator />
      <div className="p-6 md:p-8">
        <LoginForm />
      </div>
    </div>
  );
}
