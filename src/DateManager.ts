import {AddS, CleanNumber, ReplaceAll} from './Functions'
import {DigitsNth, ToDigits} from './StringManipulation'

export const DATE_FORMAT_DATE = 'YYYY-MM-DD'
export const DATE_FORMAT_TIME_SECONDS = 'HH:mm:ss'
export const DATE_FORMAT_TIME_NO_SECONDS = 'HH:mm'
export const DATE_FORMAT_DATE_TIME = DATE_FORMAT_DATE + ' ' + DATE_FORMAT_TIME_SECONDS

export const DATE_FORMAT_DATE_DISPLAY = `MMM D, YYYY`
export const DATE_FORMAT_DATE_DISPLAY_DOW = `dd, ${DATE_FORMAT_DATE_DISPLAY}`
export const DATE_FORMAT_TIME_DISPLAY = 'h:mm a'
export const DATE_FORMAT_DATE_TIME_DISPLAY = `${DATE_FORMAT_DATE_DISPLAY}, ${DATE_FORMAT_TIME_DISPLAY}`
export const DATE_FORMAT_DATE_TIME_DISPLAY_DOW = `${DATE_FORMAT_DATE_DISPLAY_DOW}, ${DATE_FORMAT_TIME_DISPLAY}`

export const DATE_FORMAT_DATE_DISPLAY_LONG = `MMMM D, YYYY`
export const DATE_FORMAT_DATE_DISPLAY_DOW_LONG = `dddd, ${DATE_FORMAT_DATE_DISPLAY_LONG}`
export const DATE_FORMAT_DATE_TIME_DISPLAY_LONG = `${DATE_FORMAT_DATE_DISPLAY_LONG}, ${DATE_FORMAT_TIME_DISPLAY}`
export const DATE_FORMAT_DATE_TIME_DISPLAY_DOW_LONG = `${DATE_FORMAT_DATE_DISPLAY_DOW_LONG}, ${DATE_FORMAT_TIME_DISPLAY}`

export type TDuration =
	'year'
	| 'years'
	| 'month'
	| 'months'
	| 'week'
	| 'weeks'
	| 'day'
	| 'days'
	| 'hour'
	| 'hours'
	| 'minute'
	| 'minutes'
	| 'second'
	| 'seconds'
	| 'millisecond'
	| 'milliseconds'

export type TAdjustment = { [key in TDuration]?: number }

/**
 * Current time in ISO string format
 */
export const NowISOString = (): string => new Date().toISOString()
export const CurrentTimeZone = (): string => Intl.DateTimeFormat().resolvedOptions().timeZone

export const IANAOffset = (timeZone?: string): number | null => {
	const timeZoneName = Intl.DateTimeFormat('ia', {
		timeZoneName: 'short',
		timeZone: timeZone ?? CurrentTimeZone()
	})
		.formatToParts()
		.find((i) => i.type === 'timeZoneName')?.value
	const offset = timeZoneName?.slice(3)
	if (!offset) return 0
	
	const matchData = offset.match(/([+-])(\d+)(?::(\d+))?/)
	if (!matchData) {
		console.log(`cannot parse timezone name: ${timeZoneName}`)
		return null
	}
	
	const [, sign, hour, minute] = matchData
	let result = parseInt(hour) * 60
	if (sign === '+') result *= -1
	if (minute) result += parseInt(minute)
	
	return result
}

export const StringHasTimeData = (value: string): boolean => value.includes(':')
export const StringHasDateData = (value: string): boolean => value.includes('-') || /\d{8}/.test(value)
export const StringHasTimeZoneData = (value: string): boolean => value.includes('T') || value.substr(15).includes('Z') || value.includes('+') || value.substr(15).includes('-')

export const IsDateString = (value: any): boolean => {
	if (!value || typeof value !== 'string') return false
	
	if (!StringHasDateData(value))
		return false
	
	return !!DateParseTSInternal(value)
}

export type TDateAny = Date | number | 'now' | 'today' | string | null | undefined

const DateParseTSInternal = (date: TDateAny, timezoneSource?: string): number | null => {
	if (!date) return null // new Date().valueOf() // Date.parse(new Date().toString())
	
	if (typeof date === 'number') return date
	
	if (typeof date === 'object') return date.valueOf()
	
	if (date.toLowerCase() === 'now' || date.toLowerCase() === 'today') return new Date().valueOf()
	
	try {
		const result: any = Date.parse(date.toString())
		
		if (isNaN(result)) {
			const check = new Date(date)
			
			if (!check) {
				const regexp = '([0-9]{4})(-([0-9]{2})(-([0-9]{2})' +
					'(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\\.([0-9]+))?)?' +
					'(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?'
				
				const d = date.match(new RegExp(regexp))
				
				if (d === null) {
					return null
				}
				
				let offset = 0
				let dateObj = new Date(CleanNumber(d[1]), 0, 1)
				
				if (d[3]) {
					dateObj.setMonth(CleanNumber(d[3]) - 1)
				}
				
				if (d[5]) {
					dateObj.setDate(CleanNumber(d[5]))
				}
				
				if (d[7]) {
					dateObj.setHours(CleanNumber(d[7]))
				}
				
				if (d[8]) {
					dateObj.setMinutes(CleanNumber(d[8]))
				}
				
				if (d[10]) {
					dateObj.setSeconds(CleanNumber(d[10]))
				}
				
				if (d[12]) {
					dateObj.setMilliseconds((CleanNumber(d[12])) * 1000)
				}
				
				if (d[14]) {
					offset = (CleanNumber(d[16]) * 60) + parseInt(d[17], 10)
					offset *= ((d[15] === '-') ? 1 : -1)
				}
				
				offset -= dateObj.getTimezoneOffset()
				const time = dateObj.getTime() + offset * 60 * 1000
				
				let newDateObj = new Date(time)
				
				if (!newDateObj) return null
				
				return newDateObj.valueOf()
			}
			
			let otherDateObj = Date.parse(check.toString())
			
			if (!otherDateObj) return null
			
			return otherDateObj.valueOf()
		}
		
		// Set a time string with no other timezone data to the current timezone
		if (!StringHasTimeZoneData(date)) {
			// console.log('Processing', date, timezoneSource, DateISO(result), DateISO(result + (((IANAOffset(timezoneSource) ?? 0) - (IANAOffset() ?? 0)) * 60 * 1000)))
			return result + (((IANAOffset(timezoneSource) ?? 0) - (IANAOffset() ?? 0)) * 60 * 1000)
		}
		
		return result
	} catch {
		return null
	}
}

export type TDateParseOptions = TAdjustment & {timezoneSource?: string}

export const DateParseTS = (date: TDateAny, adjustements?: TDateParseOptions): number | null => {
	let newDate = DateParseTSInternal(date, adjustements?.timezoneSource)
	
	if (!newDate || !adjustements) return newDate
	
	return DateAdjustTS(newDate, adjustements)
}

export const DateISO = (date: TDateAny, adjustements?: TDateParseOptions): string | null => {
	const parsed = DateParseTS(date, adjustements)
	
	if (!parsed) return null
	
	return new Date(parsed).toISOString()
}
export const DateObject = (date: TDateAny, adjustements?: TDateParseOptions): Date | null => {
	const parsed = DateParseTS(date, adjustements)
	
	if (!parsed) return null
	
	return new Date(parsed)
}

export const DateICS = (date: TDateAny, adjustements?: TDateParseOptions): string | null => {
	const dateISO = DateISO(date, adjustements)
	
	if (!dateISO) return null
	
	let dateICS = dateISO
	
	let decimal = dateICS.indexOf('.')
	let zed = dateICS.indexOf('Z')
	
	if (decimal > 0 && zed > decimal) {
		dateICS = dateICS.substring(0, decimal) + dateICS.substring(zed)
	}
	
	dateICS = ReplaceAll('-', '', dateICS)
	dateICS = ReplaceAll(':', '', dateICS)
	
	return dateICS
}

export type TDateFormat =
	'Local'
	| 'Date'
	| 'DisplayDate'
	| 'DisplayTime'
	| 'DisplayDateDoW'
	| 'DisplayDateTime'
	| 'DisplayDateDoWTime'
	| 'DisplayDateLong'
	| 'DisplayDateDoWLong'
	| 'DisplayDateTimeLong'
	| 'DisplayDateDoWTimeLong'

export const DateFormatAny = (format: TDateFormat | string, date: TDateAny, timezoneDisplay?: string, timezoneSource?: string): string | null => {
	const noTZInfo = typeof date === 'string' && !StringHasTimeZoneData(date)
	
	let dateObject = DateObject(DateParseTSInternal(date, noTZInfo ? (timezoneSource ?? timezoneDisplay) : undefined))
	
	if (timezoneDisplay) {
		try {
			if (!dateObject || dateObject.valueOf() === 0) return null
			
			const sourceOffset = IANAOffset(timezoneSource) ?? 0 // Chic 5
			const displayOffset = IANAOffset(timezoneDisplay) ?? 0 // Chic 6
			const offset = noTZInfo ? !timezoneSource ? (displayOffset - sourceOffset) - (displayOffset - sourceOffset) : ((IANAOffset() ?? 0) - sourceOffset) - (displayOffset - sourceOffset) : (sourceOffset - displayOffset)
			
			// if (timezoneDisplay === 'America/Los_Angeles' && timezoneSource === 'America/Chicago')
			// console.log('---')
			// 	console.log(noTZInfo, date, dateObject, sourceOffset/60, displayOffset/60, (IANAOffset() ?? 0) / 60, offset / 60)
			
			dateObject = DateObject(dateObject, {minutes: offset})
			// dateObject = DateObject(dateObject, {minutes: toOffset})
		} catch (err) {
			console.log('Invalid Timezone', err)
			return null
		}
	}
	
	if (!dateObject || dateObject.valueOf() === 0) return null
	
	const applyCommand = (command: string, dateApply: Date): string => {
		switch (command) {
			case 'YYYY':
				return dateApply.getFullYear().toString()
			case 'YY':
				return dateApply.getFullYear().toString().substr(2)
			case 'Q':
				return (Math.ceil((dateApply.getMonth() + 1) / 3)).toString()
			case 'Qo':
				return DigitsNth((Math.ceil((dateApply.getMonth() + 1) / 3))) ?? ''
			case 'MMMM':
				return MonthNames[dateApply.getMonth()] ?? ''
			case 'MMM':
				return (MonthNames[dateApply.getMonth()] ?? '').substr(0, 3)
			case 'MM':
				return (dateApply.getMonth() + 1).toString().padStart(2, '0')
			case 'Mo':
				return DigitsNth(dateApply.getMonth() + 1) ?? ''
			case 'M':
				return (dateApply.getMonth() + 1).toString()
			/**
			 * Week of Year	w	1 2 ... 52 53
			 * wo	1st 2nd ... 52nd 53rd
			 * ww	01 02 ... 52 53
			 * Week of Year (ISO)	W	1 2 ... 52 53
			 * Wo	1st 2nd ... 52nd 53rd
			 * WW	01 02 ... 52 53
			 */
			/**
			 * Day of Year	DDD	1 2 ... 364 365
			 * DDDo	1st 2nd ... 364th 365th
			 * DDDD	001 002 ... 364 365
			 */
			case 'DD':
				return dateApply.getDate().toString().padStart(2, '0')
			case 'Do':
				return DigitsNth(dateApply.getDate()) ?? ''
			case 'D':
				return dateApply.getDate().toString()
			case 'd':
				return dateApply.getDay().toString()
			case 'do':
				return DigitsNth(dateApply.getDay()) ?? ''
			case 'dd':
				return (WeekDays[dateApply.getDay()] ?? '').substr(0, 2)
			case 'ddd':
				return (WeekDays[dateApply.getDay()] ?? '').substr(0, 3)
			case 'dddd':
				return (WeekDays[dateApply.getDay()] ?? '')
			case 'HH':
				return dateApply.getHours().toString().padStart(2, '0')
			case 'H':
				return dateApply.getHours().toString()
			case 'hh':
				return (dateApply.getHours() > 12 ? dateApply.getHours() - 12 : dateApply.getHours()).toString().padStart(2, '0')
			case 'h':
				return (dateApply.getHours() > 12 ? dateApply.getHours() - 12 : dateApply.getHours()).toString()
			case 'mm':
				return dateApply.getMinutes().toString().padStart(2, '0')
			case 'm':
				return dateApply.getMinutes().toString()
			case 'ss':
				return dateApply.getSeconds().toString().padStart(2, '0')
			case 's':
				return dateApply.getSeconds().toString()
			case 'A':
				return dateApply.getHours() > 12 ? 'PM' : 'AM'
			case 'a':
				return dateApply.getHours() > 12 ? 'pm' : 'am'
			default:
				return command
		}
	}
	
	let useFormat: string
	
	switch (format) {
		case 'Local':
			useFormat = 'MM/DD/YYYY'
			break
		case 'Date':
			useFormat = DATE_FORMAT_DATE
			break
		case 'DisplayDate':
			useFormat = DATE_FORMAT_DATE_DISPLAY
			break
		case 'DisplayDateDoW':
			useFormat = DATE_FORMAT_DATE_DISPLAY_DOW
			break
		case 'DisplayTime':
			useFormat = DATE_FORMAT_TIME_DISPLAY
			break
		case 'DisplayDateTime':
			useFormat = DATE_FORMAT_DATE_TIME_DISPLAY
			break
		case 'DisplayDateDoWTime':
			useFormat = DATE_FORMAT_DATE_TIME_DISPLAY_DOW
			break
		case 'DisplayDateLong':
			useFormat = DATE_FORMAT_DATE_DISPLAY_LONG
			break
		case 'DisplayDateDoWLong':
			useFormat = DATE_FORMAT_DATE_DISPLAY_DOW_LONG
			break
		case 'DisplayDateTimeLong':
			useFormat = DATE_FORMAT_DATE_TIME_DISPLAY_LONG
			break
		case 'DisplayDateDoWTimeLong':
			useFormat = DATE_FORMAT_DATE_TIME_DISPLAY_DOW_LONG
			break
		default:
			useFormat = format ?? 'YYYY-MM-DD HH:mm:ss a'
			break
	}
	
	const formatArray = useFormat.split('')
	let result = ''
	
	let previousChar = ''
	let command = ''
	let inEscape = false
	
	const patterns = ['Mo', 'Qo', 'Do', 'do']
	
	for (const formatChar of formatArray) {
		if (inEscape) {
			if (formatChar === ']') {
				inEscape = false
			} else {
				result += formatChar
			}
		} else if (formatChar === '[') {
			result += applyCommand(command, dateObject)
			
			command = ''
			
			previousChar = ''
			
			inEscape = true
		} else {
			if (formatChar === previousChar || previousChar === '' || (command.length > 0 &&
				patterns.some(pattern => pattern.startsWith(command) && formatChar === pattern.substr(command.length, 1)))) {
				command += formatChar
			} else {
				result += applyCommand(command, dateObject)
				
				command = formatChar
			}
			
			previousChar = formatChar
		}
	}
	
	result += applyCommand(command, dateObject)
	
	return result
}

export const DateFormat = (format: TDateFormat, date: TDateAny, timezoneDisplay?: string, timezoneSource?: string): string | null => DateFormatAny(format, date, timezoneDisplay, timezoneSource)

export const YYYYMMDDHHmmss = (date: TDateAny): string => {
	const dateObject = DateObject(date) ?? new Date()
	return `${dateObject.getFullYear()}${(dateObject.getMonth() + 1).toString().padStart(2, '0')}${dateObject.getDate().toString().padStart(2, '0')}${dateObject.getHours().toString().padStart(2, '0')}${dateObject.getMinutes().toString().padStart(2, '0')}${dateObject.getSeconds().toString().padStart(2, '0')}`
}
export const YYYY_MM_DD_HH_mm_ss = (date: TDateAny): string => {
	const dateObject = DateObject(date) ?? new Date()
	return `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')}_${dateObject.getHours().toString().padStart(2, '0')}-${dateObject.getMinutes().toString().padStart(2, '0')}-${dateObject.getSeconds().toString().padStart(2, '0')}`
}
export const YYYYsMMsDDsHHcmmcss = (date: TDateAny): string => {
	const dateObject = DateObject(date) ?? new Date()
	return `${dateObject.getFullYear()}/${(dateObject.getMonth() + 1).toString().padStart(2, '0')}/${dateObject.getDate().toString().padStart(2, '0')} ${dateObject.getHours().toString().padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}:${dateObject.getSeconds().toString().padStart(2, '0')}`
}
export const YYYYsMMsDD = (date: TDateAny): string => {
	const dateObject = DateObject(date) ?? new Date()
	return `${dateObject.getFullYear()}/${(dateObject.getMonth() + 1).toString().padStart(2, '0')}/${dateObject.getDate().toString().padStart(2, '0')}`
}
export const HHcmmcss = (date: TDateAny): string => {
	const dateObject = DateObject(date) ?? new Date()
	return `${dateObject.getHours().toString().padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}:${dateObject.getSeconds().toString().padStart(2, '0')}`
}

export const MonthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]

export const WeekDays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
]

export const TSYearsEstimate = (ts: number): number => Math.floor(ts / 365 / 24 / 60 / 60 / 1000)
export const TSMonthsEstimate = (ts: number, withinYear?: boolean): number => Math.floor((ts - (withinYear ? (TSYearsEstimate(ts) * 365 * 24 * 60 * 60 * 1000) : 0)) / 30 / 24 / 60 / 60 / 1000)
export const TSWeeks = (ts: number): number => Math.floor(ts / 7 / 24 / 60 / 60 / 1000)
export const TSDays = (ts: number, withinMonth?: boolean): number => Math.floor((ts - (withinMonth ? (TSMonthsEstimate(ts) * 30 * 24 * 60 * 60 * 1000) : 0)) / 24 / 60 / 60 / 1000)
export const TSHours = (ts: number, withinDay?: boolean): number => Math.floor((ts - (withinDay ? (TSDays(ts) * 24 * 60 * 60 * 1000) : 0)) / 60 / 60 / 1000)
export const TSMinutes = (ts: number, withinHour?: boolean): number => Math.floor((ts - (withinHour ? (TSHours(ts) * 60 * 60 * 1000) : 0)) / 60 / 1000)
export const TSSeconds = (ts: number, withinMinute?: boolean): number => Math.floor((ts - (withinMinute ? (TSMinutes(ts) * 60 * 1000) : 0)) / 1000)

const DateIsLeapYear = (year: number): boolean => (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))

const DateDaysInMonth = (year: number, month: number): number => {
	let monthCalc = month
	let yearCalc = year
	
	while (monthCalc < 0) {
		monthCalc += 12
		yearCalc -= 1
	}
	
	while (monthCalc > 11) {
		monthCalc -= 12
		yearCalc += 1
	}
	
	return [31, (DateIsLeapYear(yearCalc) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][monthCalc]
}

const DateAdjustMonthTS = (date: TDateAny, months: number): number | null => {
	let dateTS = DateParseTSInternal(date)
	
	if (!dateTS) return null
	
	const isNegative = months < 0
	
	const originalDateObject = DateObject(date) ?? new Date()
	const originalDate = originalDateObject.getUTCDate()
	const isLastDayOfMonth = originalDate === DateDaysInMonth(originalDateObject.getUTCFullYear(), originalDateObject.getUTCMonth())
	
	for (let i = 0; i < Math.abs(months); i++) {
		const dateObj = DateObject(dateTS) ?? new Date()
		const year = dateObj.getUTCFullYear()
		const month = dateObj.getUTCMonth()
		
		if (isLastDayOfMonth) {
			if (isNegative) {
				dateTS -= 24 * 60 * 60 * 1000 * DateDaysInMonth(year, month)
			} else {
				dateTS += 24 * 60 * 60 * 1000 * DateDaysInMonth(year, month + 1)
			}
		} else {
			if (isNegative) {
				dateTS -= 24 * 60 * 60 * 1000 * DateDaysInMonth(year, month - 1)
			} else {
				dateTS += 24 * 60 * 60 * 1000 * DateDaysInMonth(year, month)
			}
			
			let currentDate = DateObject(dateTS) ?? new Date()
			if (currentDate.getUTCDate() < 15 && currentDate.getUTCDate() < originalDate)
				dateTS -= 24 * 60 * 60 * 1000 * currentDate.getUTCDate()
			
			currentDate = DateObject(dateTS) ?? new Date()
			const currentDaysInMonth = DateDaysInMonth(currentDate.getUTCFullYear(), currentDate.getUTCMonth())
			if (currentDate.getUTCDate() > 15 && currentDate.getUTCDate() < originalDate && currentDate.getUTCDate() < currentDaysInMonth)
				dateTS += 24 * 60 * 60 * 1000 * ((currentDaysInMonth > originalDate ? originalDate : currentDaysInMonth) - currentDate.getUTCDate())
		}
	}
	
	return dateTS
}

export const DateAdjustTS = (date: TDateAny, adjustments: TAdjustment): number | null => {
	let dateTS = DateParseTSInternal(date)
	
	for (const key of Object.keys(adjustments)) {
		if (!dateTS) return null
		
		switch (key) {
			case 'year':
			case 'years':
				dateTS = DateAdjustMonthTS(dateTS, CleanNumber(adjustments[key]) * 12)
				break
			case 'month':
			case 'months':
				dateTS = DateAdjustMonthTS(dateTS, CleanNumber(adjustments[key]))
				break
			default:
				if (!dateTS) return null
				
				switch (key) {
					case 'week':
					case 'weeks':
						dateTS += CleanNumber(adjustments[key]) * 7 * 24 * 60 * 60 * 1000
						break
					case 'day':
					case 'days':
						dateTS += CleanNumber(adjustments[key]) * 24 * 60 * 60 * 1000
						break
					case 'hour':
					case 'hours':
						dateTS += CleanNumber(adjustments[key]) * 60 * 60 * 1000
						break
					case 'minute':
					case 'minutes':
						dateTS += CleanNumber(adjustments[key]) * 60 * 1000
						break
					case 'second':
					case 'seconds':
						dateTS += CleanNumber(adjustments[key]) * 1000
						break
					case 'millisecond':
					case 'milliseconds':
						dateTS += CleanNumber(adjustments[key])
						break
				}
				break
		}
	}
	
	return dateTS
}

export const DateDiff = (dateFrom: TDateAny, dateTo: TDateAny, duration: TDuration): number | null => {
	const date1 = DateParseTSInternal(dateFrom)
	const date2 = DateParseTSInternal(dateTo)
	
	if (!date1 || !date2) return null
	
	if (date1 === date2) return 0
	
	switch (duration) {
		case 'year':
		case 'years':
		case 'month':
		case 'months':
			const isNegative = date1 < date2
			const increment = (['year', 'years'].includes(duration) ? 12 : 1) * (isNegative ? -1 : 1)
			let count = 0
			let newTS = DateAdjustMonthTS(date2, increment) ?? 0
			
			while (isNegative ? date1 <= newTS : date1 >= newTS) {
				count -= isNegative ? -1 : 1
				newTS = DateAdjustMonthTS(newTS, increment) ?? 0
			}
			
			return count
		default: {
			const diff = date2 - date1
			switch (duration) {
				case 'week':
				case 'weeks':
					return diff < 0 ? TSWeeks(diff * -1) * -1 : TSWeeks(diff)
				case 'day':
				case 'days':
					return diff < 0 ? TSDays(diff * -1) * -1 : TSDays(diff)
				case 'hour':
				case 'hours':
					return diff < 0 ? TSHours(diff * -1) * -1 : TSHours(diff)
				case 'minute':
				case 'minutes':
					return diff < 0 ? TSMinutes(diff * -1) * -1 : TSMinutes(diff)
				case 'second':
				case 'seconds':
					return diff < 0 ? TSSeconds(diff * -1) * -1 : TSSeconds(diff)
				case 'millisecond':
				case 'milliseconds':
					return diff
			}
		}
	}
	
	return null
}

export const DateDiffComponents = (dateFrom: TDateAny, dateTo: TDateAny): {
	year: number
	month: number
	day: number
	hour: number
	minute: number
	second: number
	millisecond: number
} => {
	let returnComponents = {
		year: 0,
		month: 0,
		day: 0,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	}
	
	const dateFromTS = DateParseTSInternal(dateFrom) ?? 0
	let checkTo = DateParseTSInternal(dateTo) ?? 0
	
	returnComponents.year = DateDiff(dateFromTS, checkTo, 'year') ?? 0
	if (returnComponents.year) checkTo = DateParseTS(checkTo, {year: returnComponents.year * -1}) ?? 0
	
	returnComponents.month = DateDiff(dateFromTS, checkTo, 'month') ?? 0
	if (returnComponents.month) checkTo = DateParseTS(checkTo, {month: returnComponents.month * -1}) ?? 0
	
	returnComponents.day = DateDiff(dateFromTS, checkTo, 'day') ?? 0
	if (returnComponents.day) checkTo = DateParseTS(checkTo, {day: returnComponents.day * -1}) ?? 0
	
	returnComponents.hour = DateDiff(dateFromTS, checkTo, 'hour') ?? 0
	if (returnComponents.hour) checkTo = DateParseTS(checkTo, {hour: returnComponents.hour * -1}) ?? 0
	
	returnComponents.minute = DateDiff(dateFromTS, checkTo, 'minute') ?? 0
	if (returnComponents.minute) checkTo = DateParseTS(checkTo, {minute: returnComponents.minute * -1}) ?? 0
	
	returnComponents.second = DateDiff(dateFromTS, checkTo, 'second') ?? 0
	if (returnComponents.second) checkTo = DateParseTS(checkTo, {second: returnComponents.second * -1}) ?? 0
	
	returnComponents.millisecond = DateDiff(dateFromTS, checkTo, 'millisecond') ?? 0
	
	return returnComponents
}

export const DateDiffLongDescription = (dateFrom: TDateAny, dateTo: TDateAny, tripToSecondsOrTwo = false, abbreviated = false): string => {
	const components = DateDiffComponents(dateFrom, dateTo)
	
	let text = ''
	
	if (components.year) {
		text += ` ${ToDigits(components.year)}${abbreviated ? 'Y' : AddS(' Year', components.year)}`
		text += ` ${ToDigits(components.month)}${abbreviated ? 'Mo' : AddS(' Month', components.month)}`
		if (components.day && !tripToSecondsOrTwo) {
			text += ` ${ToDigits(components.day)}${abbreviated ? 'D' : AddS(' Day', components.day)}`
		}
	} else if (components.month) {
		text += ` ${ToDigits(components.month)}${abbreviated ? 'Mo' : AddS(' Month', components.month)}`
		
		if (components.day) {
			text += ` ${ToDigits(components.day)}${abbreviated ? 'D' : AddS(' Day', components.day)}`
		}
	} else if (components.day) {
		text += ` ${ToDigits(components.day)}${abbreviated ? 'D' : AddS(' Day', components.day)}`
		if (components.hour) {
			text += ` ${ToDigits(components.hour)}${abbreviated ? 'h' : AddS(' Hour', components.hour)}`
		}
		if (components.minute && !tripToSecondsOrTwo) {
			text += ` ${ToDigits(components.minute)}${abbreviated ? 'm' : AddS(' Minute', components.minute)}`
		}
	} else if (components.hour) {
		text += ` ${ToDigits(components.hour)}${abbreviated ? 'h' : AddS(' Hour', components.hour)}`
		if (components.minute) {
			text += ` ${ToDigits(components.minute)}${abbreviated ? 'm' : AddS(' Minute', components.minute)}`
		}
	} else {
		if (components.minute || (!text && tripToSecondsOrTwo)) {
			text += ` ${ToDigits(components.minute)}${abbreviated ? 'm' : AddS(' Minute', components.minute)}`
		}
		if (!text || (!tripToSecondsOrTwo && components.second)) {
			text += ` ${ToDigits(components.second)}${abbreviated ? 's' : AddS(' Second', components.second)}`
		}
	}
	
	return text.trim()
}

/**
 * Displays a simplified duration format from seconds.
 *
 * @example
 * MomentDurationShortText((30 * 60) + 20) // result: 30 Minutes 20 Seconds
 */
export const DurationLongDescription = (seconds: number, tripToSecondsOrTwo = false, abbreviated = false): string => {
	const durationTS = seconds * 1000
	
	let text = ''
	
	if (TSYearsEstimate(durationTS)) {
		text += ` ${ToDigits(TSYearsEstimate(durationTS), 0)}${abbreviated ? 'Y' : AddS(' Year', TSYearsEstimate(durationTS))}`
		text += ` ${ToDigits(TSMonthsEstimate(durationTS, true), 0)}${abbreviated ? 'Mo' : AddS(' Month', TSMonthsEstimate(durationTS, true))}`
		if (TSDays(durationTS, true) && !tripToSecondsOrTwo) {
			text += ` ${ToDigits(TSDays(durationTS, true), 0)}${abbreviated ? 'D' : AddS(' Day', TSDays(durationTS, true))}`
		}
	} else if (TSMonthsEstimate(durationTS, true)) {
		text += ` ${ToDigits(TSMonthsEstimate(durationTS, true), 0)}${abbreviated ? 'Mo' : AddS(' Month', TSMonthsEstimate(durationTS, true))}`
		
		if (TSDays(durationTS, true)) {
			text += ` ${ToDigits(TSDays(durationTS, true), 0)}${abbreviated ? 'D' : AddS(' Day', TSDays(durationTS, true))}`
		}
	} else if (TSDays(durationTS, true)) {
		text += ` ${ToDigits(TSDays(durationTS, true), 0)}${abbreviated ? 'D' : AddS(' Day', TSDays(durationTS, true))}`
		if (TSHours(durationTS, true)) {
			text += ` ${ToDigits(TSHours(durationTS, true), 0)}${abbreviated ? 'h' : AddS(' Hour', TSHours(durationTS, true))}`
		}
		if (TSMinutes(durationTS, true) && !tripToSecondsOrTwo) {
			text += ` ${ToDigits(TSMinutes(durationTS, true), 0)}${abbreviated ? 'm' : AddS(' Minute', TSMinutes(durationTS, true))}`
		}
	} else if (TSHours(durationTS, true)) {
		text += ` ${ToDigits(TSHours(durationTS, true), 0)}${abbreviated ? 'h' : AddS(' Hour', TSHours(durationTS, true))}`
		if (TSMinutes(durationTS, true)) {
			text += ` ${ToDigits(TSMinutes(durationTS, true), 0)}${abbreviated ? 'm' : AddS(' Minute', TSMinutes(durationTS, true))}`
		}
	} else {
		if (TSMinutes(durationTS, true) || (!text && tripToSecondsOrTwo)) {
			text += ` ${ToDigits(TSMinutes(durationTS, true), 0)}${abbreviated ? 'm' : AddS(' Minute', TSMinutes(durationTS, true))}`
		}
		if (!text || (!tripToSecondsOrTwo && TSSeconds(durationTS, true))) {
			text += ` ${ToDigits(TSSeconds(durationTS, true), 0)}${abbreviated ? 's' : AddS(' Second', TSSeconds(durationTS, true))}`
		}
	}
	
	return text.trim()
}

export const DateCompare = (date1: TDateAny, evalType: 'IsSame' | 'IsBefore' | 'IsAfter' | 'IsSameOrBefore' | 'IsSameOrAfter', date2: TDateAny, minInterval?: TDuration): boolean => {
	const components = DateDiffComponents(date2 ?? null, date1)
	
	const checkType = (evalCheck: 'IsSame' | 'IsBefore' | 'IsAfter' | 'IsSameOrBefore' | 'IsSameOrAfter', diff: number): boolean => {
		if (diff === 0) return ['IsSame', 'IsSameOrBefore', 'IsSameOrAfter'].includes(evalCheck)
		
		if (diff > 0) return ['IsAfter', 'IsSameOrAfter'].includes(evalCheck)
		
		return ['IsBefore', 'IsSameOrBefore'].includes(evalCheck)
	}
	
	if (!minInterval || ['millisecond', 'milliseconds'].includes(minInterval)) return checkType(evalType, (DateParseTSInternal(date1) ?? 0) - (DateParseTSInternal(date2) ?? 0))
	
	if (['year', 'years'].includes(minInterval) || components.year !== 0) return checkType(evalType, components.year)
	
	if (['month', 'months'].includes(minInterval) || components.month !== 0) return checkType(evalType, components.month)
	
	if (['week', 'weeks'].includes(minInterval) || Math.abs(components.day) >= 7) return checkType(evalType, components.day)
	
	if (['day', 'days'].includes(minInterval) || components.day !== 0) return checkType(evalType, components.day)
	
	if (['hour', 'hours'].includes(minInterval) || components.hour !== 0) return checkType(evalType, components.hour)
	
	if (['minute', 'minutes'].includes(minInterval) || components.minute !== 0) return checkType(evalType, components.minute)
	
	if (['second', 'seconds'].includes(minInterval) || components.second !== 0) return checkType(evalType, components.second)
	
	return checkType(evalType, (DateParseTSInternal(date1) ?? 0) - (DateParseTSInternal(date2) ?? 0))
}
