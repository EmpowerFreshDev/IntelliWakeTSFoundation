import {MomentFormatString, NowISOString} from '../src/Moment'
import {ConsoleColor} from '../src/ConsoleLogTable'

const moment = require('moment-timezone')

require('source-map-support').install()

console.log(NowISOString())

console.log('Console test', ConsoleColor.fg.Blue, 'Blue', ConsoleColor.Reset)
console.log('Console test', ConsoleColor.fg.Green, 'Green', ConsoleColor.Reset)
console.log('Console test', ConsoleColor.fg.Yellow, 'Yellow', ConsoleColor.Reset)
console.log('Console test', ConsoleColor.fg.Black, 'Black', ConsoleColor.Reset)
console.log('Console test', ConsoleColor.fg.Red, 'Red', ConsoleColor.Reset)

console.log(MomentFormatString('2020-10-03', 'l'))
