import { it, expect, vi} from 'vitest'
import { saveTokenToFile } from './io';
import { promises as fs } from 'fs';

vi.mock('fs')

vi.mock('path')


it('should store the token to the file',() => {
    const data = 'dummy token';
    const fileName = 'token.txt'

    saveTokenToFile(data, fileName)
    // expect(saveTokenToFile(data, fileName)).resolves.toBeUndefined()
    expect(fs.writeFile).toBeCalledWith(fileName, data)
})