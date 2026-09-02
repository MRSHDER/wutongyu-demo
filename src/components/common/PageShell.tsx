import type { ReactNode } from 'react';

export function PageShell({ children, compact = false }: { children: ReactNode; compact?: boolean }) {
  return <main className={`page-shell ${compact ? 'page-shell--compact' : ''}`}>{children}</main>;
}
