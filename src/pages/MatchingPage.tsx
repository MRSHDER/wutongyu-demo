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
  const { navigate, submitQuickMatch, criteria, goHome } = useApp();
  const [step, setStep] = useState(() => {
    if (!criteria) return 1;
    if (criteria.timePreferences.length > 0) return 3;
    if (criteria.topics.length > 0) return 2;
    return 1;
  });
  const [audience, setAudience] = useState<AudienceTag[]>(() => criteria?.audience ?? []);
  const [topics, setTopics] = useState<TopicTag[]>(() => criteria?.topics ?? []);
  const [timePreferences, setTimePreferences] = useState<TimePreference[]>(() => criteria?.timePreferences ?? []);

  const toggleTopic = (topic: TopicTag) => setTopics((current) => current.includes(topic) ? current.filter((item) => item !== topic) : [...current, topic]);
  const canContinue = step === 1 ? audience.length > 0 : step === 2 ? topics.length > 0 : timePreferences.length > 0;
  const question = step === 1 ? '谁来参加？' : step === 2 ? '想参加哪类活动？' : '什么时间方便？';
  const hint = step === 1
    ? '先选择最符合你的人群，便于匹配适合的公益文化活动'
    : step === 2
      ? '可多选便民、文化、亲子、健康等主题'
      : '选一个你更方便的时段';

  return <PageShell compact>
    <header className="page-header">
      <BackButton onClick={() => step === 1 ? navigate('home') : setStep((current) => current - 1)} label={step === 1 ? '返回首页' : '上一步'} />
      <div className="page-header__actions">
        <StepIndicator current={step} />
        <Button variant="quiet" onClick={goHome}>回到首页</Button>
      </div>
    </header>
    <section className="matching-page">
      <p className="eyebrow">便民匹配 · 第 {step} 步</p>
      <h1>{question}</h1><p className="page-lead">{hint}</p>
      {step === 1 && <OptionGrid options={AUDIENCE_OPTIONS} selected={audience} onChange={(value) => setAudience([value])} />}
      {step === 2 && <OptionGrid options={TOPIC_OPTIONS} selected={topics} multiSelect onChange={toggleTopic} />}
      {step === 3 && <OptionGrid options={TIME_OPTIONS} selected={timePreferences} onChange={(value) => setTimePreferences([value])} />}
      <div className="page-actions">
        <Button disabled={!canContinue} onClick={() => step < 3 ? setStep((current) => current + 1) : submitQuickMatch({ audience, topics, timePreferences })}>{step < 3 ? '下一步' : '查看推荐活动'}</Button>
      </div>
    </section>
  </PageShell>;
}
