import { throws } from 'node:assert'
import main from './event.throws.js'

throws(() => main(true))