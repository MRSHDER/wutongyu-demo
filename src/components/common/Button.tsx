import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'quiet';
}

export function Button({ children, variant = 'primary', className = '', type = 'button', ...props }: ButtonProps) {
  return <button className={`button button--${variant} ${className}`} type={type} {...props}>{children}</button>;
}
