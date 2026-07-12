import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

test('app contains core curriculum and simulations', async () => {
  const html = await readFile('index.html', 'utf8');
  for (const term of ['Feedback', 'PID', 'Model Predictive Control', 'Reinforcement learning', 'Embodied AI', 'Rehabilitation robots', 'Shower feedback', 'Drone PID', 'Robot grip']) {
    assert.ok(html.includes(term), term);
  }
});

test('app is local-first and offline capable', async () => {
  const html = await readFile('index.html', 'utf8');
  const sw = await readFile('service-worker.js', 'utf8');
  assert.ok(html.includes('localStorage'));
  assert.ok(html.includes('serviceWorker'));
  assert.ok(sw.includes('caches.open'));
});
