import { it, expect, beforeEach, describe, beforeAll } from 'vitest';

import { User } from './hooks';

const testEmail = 'test@test.com';
let user;

beforeEach(() => {
   user = new User(testEmail);
});

beforeAll();

describe('test', () => {
   beforeAll();

   it('should have an email property', () => {
      expect(user).toHaveProperty('email');
   });

   it('should update the email', () => {
      const newTestEmail = 'test2@test.com';

      user.updateEmail(newTestEmail);

      expect(user.email).toBe(newTestEmail);
   });
});

it('should store the provided email value', () => {
   expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
   user.clearEmail();

   expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
   user.clearEmail();

   expect(user).toHaveProperty('email');
});
