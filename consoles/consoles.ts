import {ESTTodayDateTimeLabel} from '../src/DateManager'
import {FormatTaxID} from '../src/StringManipulation'

require('source-map-support').install()

console.log('Starting', ESTTodayDateTimeLabel())
console.time('Consoles')

// const dates = ['1960-01-01', '1970-01-01', 'blah', 'Not a date']
//
// dates.forEach((date) => console.log(date, '=', DateOnlyNull(date)))

console.log(FormatTaxID('112222223'))
console.log(FormatTaxID('11-2222223'))

console.timeEnd('Consoles')
