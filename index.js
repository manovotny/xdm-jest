import {promises as fs} from 'fs'
import {compile} from 'xdm';

export default async () => {
    const compiled = await compile(await fs.readFile('example.mdx'))

    console.log(String(compiled));
};

