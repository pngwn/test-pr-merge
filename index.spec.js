import { test, expect } from 'vitest';
import util from './index.js'

test('should be true', () => {
  const val = util();
  expect(val).toBe(true);
});