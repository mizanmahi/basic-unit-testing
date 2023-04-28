import { vi } from 'vitest';

const path = {
   join: vi.fn((...args) => args[args.length]),
};

export default path;