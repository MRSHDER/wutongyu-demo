import { useState } from 'react';
import { Button } from '../common/Button';

const EXAMPLES = [
  '我周末想带孩子做点南京传统文化相关的活动',
  '我是退休老人，想找一个轻松一点的活动',
  '我下班以后有空，想参加志愿服务',
];

export function SmartSearchForm({ onSubmit }: { onSubmit: (query: string) => void }) {
  const [query, setQuery] = useState('');
  const canSubmit = query.trim().length > 0;

  return <form className="smart-search" onSubmit={(event) => { event.preventDefault(); if (canSubmit) onSubmit(query); }}>
    <label htmlFor="search-query">告诉我你想参加什么活动</label>
    <textarea id="search-query" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="例如：我周末想带孩子做点南京传统文化相关的活动" rows={4} autoFocus />
    <Button type="submit" disabled={!canSubmit}>开始智能检索</Button>
    <div className="search-examples"><p>也可以点按示例：</p>{EXAMPLES.map((example) => <button key={example} type="button" onClick={() => setQuery(example)}>{example}</button>)}</div>
  </form>;
}
