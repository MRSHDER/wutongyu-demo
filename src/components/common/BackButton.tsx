import { Button } from './Button';

export function BackButton({ onClick, label = '返回' }: { onClick: () => void; label?: string }) {
  return <Button variant="secondary" className="back-button" onClick={onClick}>← {label}</Button>;
}
