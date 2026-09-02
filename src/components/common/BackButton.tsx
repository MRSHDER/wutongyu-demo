import { Button } from './Button';

export function BackButton({ onClick, label = '返回' }: { onClick: () => void; label?: string }) {
  return <Button variant="quiet" onClick={onClick}>← {label}</Button>;
}
