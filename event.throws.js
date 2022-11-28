import { EventEmitter } from 'node:events';
import { fileURLToPath } from 'node:url';
import process from 'process';

const main = (silent) => {

    const e = new EventEmitter();

    e.on('error', (err) => {

        silent ? '' : console.log('caught err, will rethrow', err)

        throw err

    })

    e.emit('error', new Error('Firing error'))

}

export default main

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    main()
}