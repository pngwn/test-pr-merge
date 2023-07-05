import { test, expect } from 'vitest';
import util, { util_two } from './index.js'

test('should be true', () => {
  const val = util();
  expect(val).toBe(true);
});

test('should be false', () => {
  const val = util_two();
  expect(val).toBe(false);
});

test('should not be true', () => {
  const val = util_two();
  expect(val).not.toBe(true);
});