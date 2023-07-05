import { test, expect } from 'vitest';
import { add } from './index_two.js';

test('should add numbers', () => {
  const val = add(1, 1);
  expect(val).toBe(2);
});