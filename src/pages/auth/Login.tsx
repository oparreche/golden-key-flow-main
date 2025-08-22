import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import AuthLayout from '@/components/layouts/AuthLayout';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  rememberMe: z.boolean().optional(),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, loading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setError('');
    
    const success = await login(data.email, data.password);
    
    if (success) {
      toast({
        title: 'Login realizado com sucesso!',
        description: 'Redirecionando para o dashboard...',
      });
      navigate(from, { replace: true });
    } else {
      setError('Email ou senha incorretos. Tente: demo@example.com / demo123');
    }
  };

  return (
    <AuthLayout
      title="Entrar na sua conta"
      subtitle="Bem-vindo de volta! Faça login para continuar."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            {...register('email')}
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              {...register('password')}
              className={errors.password ? 'border-destructive pr-10' : 'pr-10'}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
          {errors.password && (
            <p className="text-sm text-destructive">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="rememberMe"
              {...register('rememberMe')}
            />
            <Label htmlFor="rememberMe" className="text-sm">
              Lembrar de mim
            </Label>
          </div>
          <Link
            to="/forgot-password"
            className="text-sm text-gold-primary hover:text-gold-dark transition-colors"
          >
            Esqueceu a senha?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full"
          variant="hero"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Entrando...
            </>
          ) : (
            'Entrar'
          )}
        </Button>

        <div className="text-center">
          <p className="text-sm text-foreground-muted">
            Não tem uma conta?{' '}
            <Link
              to="/register"
              className="text-gold-primary hover:text-gold-dark font-medium transition-colors"
            >
              Cadastre-se
            </Link>
          </p>
        </div>

        {/* Demo credentials info */}
        <div className="mt-8 p-4 bg-background-secondary rounded-lg border">
          <h4 className="text-sm font-medium mb-2">Credenciais de demonstração:</h4>
          <p className="text-xs text-foreground-muted">
            Email: <code className="bg-gray-100 px-1 rounded">joao@example.com</code> ou <code className="bg-gray-100 px-1 rounded">maria@example.com</code>
          </p>
          <p className="text-xs text-foreground-muted">
            Senha: <code className="bg-gray-100 px-1 rounded">demo123</code>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;