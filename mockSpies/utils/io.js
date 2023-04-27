import { promises as fs } from 'fs';
import path from 'path';


export function saveTokenToFile(data, filename) {
    const storagePath = path.join(process.cwd(), 'data', filename);
    return fs.writeFile(storagePath, data);
 }