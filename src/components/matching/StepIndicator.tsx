export function StepIndicator({ current }: { current: number }) {
  return <div className="step-indicator" aria-label={`当前第 ${current} 步，共 3 步`}>
    {[1, 2, 3].map((step) => <span key={step} className={step === current ? 'step-indicator__active' : step < current ? 'step-indicator__done' : ''}>{step}</span>)}
  </div>;
}
