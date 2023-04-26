import { it, expect } from 'vitest';
import { encryptMessage, encryptMessagePromise } from './async';

it('should encrypt a message', async () => {
   const message = 'Programming Hero';
   const secretKey = '458963';

   const encryptedData = await new Promise((resolve, reject) => {
      encryptMessage(message, secretKey, (message) => {
         resolve(message);
      });
   });

   expect(encryptedData).toBeDefined();
});

it('should also just pass', async () => {
   const message = 'Programming Hero';
   const secretKey = '458963';
   const encryptedData = await encryptMessagePromise(message, secretKey);
   expect(encryptedData).toBeDefined();
});



