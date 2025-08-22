import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import AuthLayout from '@/components/layouts/AuthLayout';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Loader2, CheckCircle } from 'lucide-react';

const forgotPasswordSchema = z.object({
  email: z.string().email('Email inválido'),
});

type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordForm) => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setEmailSent(true);
    setLoading(false);
    
    toast({
      title: 'Email enviado!',
      description: 'Verifique sua caixa de entrada para redefinir sua senha.',
    });
  };

  if (emailSent) {
    return (
      <AuthLayout
        title="Email enviado"
        subtitle="Verifique sua caixa de entrada"
      >
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-success" />
          </div>
          
          <div className="space-y-2">
            <p className="text-foreground">
              Enviamos um link para redefinir sua senha para:
            </p>
            <p className="font-medium text-gold-primary">
              {getValues('email')}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-foreground-muted">
              Se você não receber o email em alguns minutos, verifique sua pasta de spam ou tente novamente.
            </p>
            
            <Button
              onClick={() => setEmailSent(false)}
              variant="outline"
              className="w-full"
            >
              Tentar outro email
            </Button>
          </div>

          <div className="text-center">
            <Link
              to="/login"
              className="inline-flex items-center text-sm text-gold-primary hover:text-gold-dark transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o login
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Esqueceu sua senha?"
      subtitle="Digite seu email para receber instruções de redefinição."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

        <Button
          type="submit"
          className="w-full"
          variant="hero"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            'Enviar instruções'
          )}
        </Button>

        <div className="text-center">
          <Link
            to="/login"
            className="inline-flex items-center text-sm text-gold-primary hover:text-gold-dark transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o login
          </Link>
        </div>

        <Alert>
          <AlertDescription>
            Você receberá um email com instruções para redefinir sua senha. 
            O link será válido por 1 hora.
          </AlertDescription>
        </Alert>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;