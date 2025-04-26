import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    const content = 'I am fresh and young';

    try {
        await fs.access(filePath);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code !== 'ENOENT') throw err;
    }

    const dirPath = path.join(__dirname, 'files');
    await fs.mkdir(dirPath, { recursive: true });

    await fs.writeFile(filePath, content);
};

await create();