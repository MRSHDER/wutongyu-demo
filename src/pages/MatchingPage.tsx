import { useState } from 'react';
import { BackButton } from '../components/common/BackButton';
import { Button } from '../components/common/Button';
import { PageShell } from '../components/common/PageShell';
import { OptionGrid } from '../components/matching/OptionGrid';
import { StepIndicator } from '../components/matching/StepIndicator';
import { AUDIENCE_OPTIONS, TIME_OPTIONS, TOPIC_OPTIONS } from '../data/categories';
import { useApp } from '../hooks/useApp';
import type { AudienceTag, TimePreference, TopicTag } from '../types/domain';

export function MatchingPage() {
  const { navigate, submitQuickMatch } = useApp();
  const [step, setStep] = useState(1);
  const [audience, setAudience] = useState<AudienceTag[]>([]);
  const [topics, setTopics] = useState<TopicTag[]>([]);
  const [timePreferences, setTimePreferences] = useState<TimePreference[]>([]);

  const toggleTopic = (topic: TopicTag) => setTopics((current) => current.includes(topic) ? current.filter((item) => item !== topic) : [...current, topic]);
  const canContinue = step === 1 ? audience.length > 0 : step === 2 ? topics.length > 0 : timePreferences.length > 0;
  const question = step === 1 ? '你是？' : step === 2 ? '你想参加什么？' : '什么时候方便？';
  const hint = step === 2 ? '可选择多个感兴趣的主题' : '请选择最符合你目前情况的一项';

  return <PageShell compact>
    <header className="page-header"><BackButton onClick={() => step === 1 ? navigate('home') : setStep((current) => current - 1)} label={step === 1 ? '返回首页' : '上一步'} /><StepIndicator current={step} /></header>
    <section className="matching-page">
      <p className="eyebrow">快速匹配 · 第 {step} 步</p>
      <h1>{question}</h1><p className="page-lead">{hint}</p>
      {step === 1 && <OptionGrid options={AUDIENCE_OPTIONS} selected={audience} onChange={(value) => setAudience([value])} />}
      {step === 2 && <OptionGrid options={TOPIC_OPTIONS} selected={topics} multiSelect onChange={toggleTopic} />}
      {step === 3 && <OptionGrid options={TIME_OPTIONS} selected={timePreferences} onChange={(value) => setTimePreferences([value])} />}
      <div className="page-actions">
        <Button disabled={!canContinue} onClick={() => step < 3 ? setStep((current) => current + 1) : submitQuickMatch({ audience, topics, timePreferences })}>{step < 3 ? '下一步' : '查看推荐结果'}</Button>
      </div>
    </section>
  </PageShell>;
}
