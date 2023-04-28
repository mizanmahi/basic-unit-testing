import { it, expect, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';
import { encryptMessage, encryptMessagePromise } from './async';
import CryptoJS from 'crypto-js';


beforeAll(() => {
   console.log('Before all')
})


beforeEach(() => {
   console.log('Before each test')
})
afterEach(() => {
   console.log('After each test')
})

afterAll(() => {
   console.log('After all')
})

it('should encrypt a message', async () => {
   const message = {
      name: 'Mizan',
      password: '11223344',
   };

   const secretKey = 'gh#M0CL4ADe%IO59jZ83xuNv';

   const encryptedMessage = await new Promise((resolve, reject) => {
      encryptMessage(JSON.stringify(message), secretKey, (message) => {
         resolve(message);
      });
   });
   expect(encryptedMessage).toBeDefined();
   // expect(encryptedMessage).toBe(2); // will fail in this case
});

// for promise example
it('should encrypt the message', async () => {
   const message = 'hello world';
   const key = 'secret';
   const encryptedMessage = await encryptMessagePromise(message, key);
   expect(encryptedMessage).toBeDefined();
});
// it('should encrypt the message correctly', async () => {
//    const message = 'hello world';
//    const key = 'secret';
//    const encryptedMessage = await encryptMessagePromise(message, key);
//    expect(encryptedMessage).toBeDefined();

//    const decryptedMessage = CryptoJS.AES.decrypt(
//       encryptedMessage,
//       key
//    ).toString(CryptoJS.enc.Utf8);
//    expect(decryptedMessage).toBe(message);
// });
