import { describe, it, expect, vi } from 'vitest';
import { generateToken, storeToken } from './app';
import { saveTokenToFile } from './utils/io';
import { promises as fs } from 'fs';




describe('generateToken()', () => {
   it('should execute the logger function if passed', () => {
      const loggerFn = vi.fn();

      loggerFn.mockImplementationOnce(() => {})

      generateToken(loggerFn);

      expect(loggerFn).toBeCalled()
   });
});

