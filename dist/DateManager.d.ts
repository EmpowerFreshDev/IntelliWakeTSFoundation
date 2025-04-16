/**
 *
 */
export declare const DATE_FORMAT_DATE = "YYYY-MM-DD";
/**
 *
 */
export declare const DATE_FORMAT_TIME_SECONDS = "HH:mm:ss";
/**
 *
 */
export declare const DATE_FORMAT_TIME_NO_SECONDS = "HH:mm";
/**
 *
 */
export declare const DATE_FORMAT_DATE_TIME: string;
/**
 *
 */
export declare const DATE_FORMAT_DATE_DISPLAY = "MMM D, YYYY";
/**
 *
 */
export declare const DATE_FORMAT_DATE_DISPLAY_DOW: string;
/**
 *
 */
export declare const DATE_FORMAT_TIME_DISPLAY = "h:mm a";
/**
 *
 */
export declare const DATE_FORMAT_DATE_TIME_DISPLAY: string;
/**
 *
 */
export declare const DATE_FORMAT_DATE_TIME_DISPLAY_DOW: string;
/**
 *
 */
export declare const DATE_FORMAT_DATE_DISPLAY_LONG = "MMMM D, YYYY";
/**
 *
 */
export declare const DATE_FORMAT_DATE_DISPLAY_DOW_LONG: string;
/**
 *
 */
export declare const DATE_FORMAT_DATE_TIME_DISPLAY_LONG: string;
/**
 *
 */
export declare const DATE_FORMAT_DATE_TIME_DISPLAY_DOW_LONG: string;
/**
 *
 */
export type TDateOnlyDuration = 'year' | 'years' | 'quarter' | 'quarters' | 'month' | 'months' | 'week' | 'weeks' | 'day' | 'days';
/**
 *
 */
export type TTimeOnlyDuration = 'hour' | 'hours' | 'minute' | 'minutes' | 'second' | 'seconds' | 'millisecond' | 'milliseconds';
/**
 *
 */
export type TDuration = TDateOnlyDuration | TTimeOnlyDuration;
/**
 *
 */
export type TDateOnlyAdjustment = {
    [key in TDateOnlyDuration]?: number | 'StartOf' | 'EndOf';
} | {
    week?: number | 'StartOf' | 'StartOfMon' | 'EndOf';
} | {
    weeks?: number | 'StartOf' | 'StartOfMon' | 'EndOf';
};
/**
 *
 */
export type TTimeOnlyAdjustment = {
    [key in TTimeOnlyDuration]?: number | 'StartOf' | 'EndOf';
};
/**
 *
 */
export type TAdjustment = {
    [key in TDuration]?: number | 'StartOf' | 'EndOf';
} | {
    week?: number | 'StartOf' | 'StartOfMon' | 'EndOf';
} | {
    weeks?: number | 'StartOf' | 'StartOfMon' | 'EndOf';
};
/**
 * Current time in ISO string format
 * @returns {string} String of the date/time in ISO format.
 */
export declare const NowISOString: (adjustment?: TDateParseOptions) => string;
/**
 *
 * @constructor
 */
export declare const CurrentTimeZone: () => string;
/**
 *
 * @param timeZone
 * @param sourceDate
 * @constructor
 */
export declare const IANAOffset: (timeZone?: string | null, sourceDate?: TDateAny) => number | null;
/**
 *
 * @param value
 * @constructor
 */
export declare const StringHasTimeData: (value: string) => boolean;
/**
 *
 * @param value
 * @constructor
 */
export declare const StringHasDateData: (value: string) => boolean;
/**
 * Determines if the string provided likely includes information about what timezone should be addressed, such as the '+4' in '2023-01-01 10:00:00 +4'
 * @param value
 * @constructor
 */
export declare const StringHasTimeZoneData: (value: string) => boolean;
/**
 * Determines if the string provided is likely an IANA timezone reference, by checking if it has a / and is otherwise all alpha non-numeric
 * @param value
 * @constructor
 */
export declare const StringIsIANA: (value: string | null | undefined) => boolean;
/**
 * Check if a string includes an IANA code.
 *
 * @param {string | null | undefined} value - The string value to check.
 * @returns {boolean} - True if the string includes an IANA code, false otherwise.
 */
export declare const StringIncludesIANA: (value: string | null | undefined) => boolean;
/**
 * Check if the given value is a valid date string.
 *
 * @param {any} value - The value to be checked.
 * @returns {boolean} - Returns true if the value is a valid date string, false otherwise.
 */
export declare const IsDateString: (value: any) => boolean;
/**
 * Represents a flexible date type that can be either a Date object, a number representing milliseconds, a string representing a specific date, or special keywords 'now' or 'today'.
 * This type can also be null or undefined.
 *
 * @typedef {(Date | number | 'now' | 'today' | string | null | undefined)} TDateAny
 */
export type TDateAny = Date | number | 'now' | 'today' | string | null | undefined;
/**
 * Function to add seconds to a given date and time string.
 *
 * @param {string} value - The date and time string.
 * @returns {string} The updated date and time string.
 */
export declare const AddSecondsToDateTimeString: (value: string) => string;
/**
 * Parses a date string and returns the corresponding timestamp in milliseconds.
 *
 * @param {string} dateString - The date string to parse.
 *
 * @returns {number | null} - The parsed timestamp in milliseconds, or null if parsing fails.
 */
export declare const ManualParse: (dateString: string) => number | null;
/**
 *
 */
export type TDateParseOptions = TAdjustment & {
    timezoneSource?: string;
    ignoreIANA?: boolean;
};
/**
 *
 * @param date
 * @param adjustments
 * @constructor
 */
export declare const DateParseTS: (date: TDateAny, adjustments?: TDateParseOptions) => number | null;
/**
 *
 * @param date
 * @param adjustments
 * @constructor
 */
export declare const DateISO: (date: TDateAny, adjustments?: TDateParseOptions) => string | null;
/**
 *
 * @param date
 * @param adjustments
 * @constructor
 */
export declare const DateObject: (date: TDateAny, adjustments?: TDateParseOptions) => Date | null;
/**
 *
 * @param date
 * @param adjustments
 * @constructor
 */
export declare const DateICS: (date: TDateAny, adjustments?: TDateParseOptions) => string | null;
/**
 *
 */
export type TDateFormat = 'Local' | 'LocalDoW' | 'LocalDateTime' | 'LocalDoWTime' | 'Date' | 'DateTime' | 'DisplayDate' | 'DisplayTime' | 'DisplayDateDoW' | 'DisplayDateTime' | 'DisplayDateDoWTime' | 'DisplayDateLong' | 'DisplayDateDoWLong' | 'DisplayDateTimeLong' | 'DisplayDateDoWTimeLong' | 'ISO' | 'ISOInput';
/**
 * Formats the given date object or string into a string representation using the specified format.
 *
 * YYYY, YY, Q, Qo (1st), MMMM, MMM, MM, Mo (1st), M, DD, Do (1st), D
 * d (DoW), do (1st), dd (Su), ddd (Sun), dddd, w
 * HH (24 hour), H
 * hh (12 hour), h, mm, m, ss, s
 * A, a
 *
 * @param {TDateFormat | string} format - The format to use when formatting the date.
 * @param {TDateAny} date - The date object or string to format.
 * @param {string} [timezoneDisplay] - The timezone to display the date in. Defaults to local timezone.
 * @param {string} [timezoneSource] - The timezone of the source date if provided as a string. Defaults to local timezone.
 * @returns {string | null} - The formatted date string, or null if the date is invalid.
 */
export declare const DateFormatAny: (format: TDateFormat | string, date: TDateAny, timezoneDisplay?: string, timezoneSource?: string) => string | null;
/**
 *
 * @param format
 * @param date
 * @param timezoneDisplay
 * @param timezoneSource
 * @constructor
 */
export declare const DateFormat: (format: TDateFormat, date: TDateAny, timezoneDisplay?: string, timezoneSource?: string) => string | null;
/**
 *
 * @param date
 * @constructor
 */
export declare const YYYYMMDDHHmmss: (date: TDateAny) => string;
/**
 *
 * @param date
 * @constructor
 */
export declare const YYYY_MM_DD_HH_mm_ss: (date: TDateAny) => string;
/**
 *
 * @param date
 * @constructor
 */
export declare const YYYYsMMsDDsHHcmmcss: (date: TDateAny) => string;
/**
 *
 * @param date
 * @constructor
 */
export declare const YYYYsMMsDD: (date: TDateAny) => string;
/**
 *
 * @param date
 * @constructor
 */
export declare const HHcmmcss: (date: TDateAny) => string;
/**
 *
 */
export declare const MonthNames: string[];
/**
 *
 */
export declare const WeekDays: string[];
/**
 *
 * @param ts
 * @constructor
 */
export declare const TSYearsEstimate: (ts: number) => number;
/**
 *
 * @param ts
 * @param withinYear
 * @constructor
 */
export declare const TSMonthsEstimate: (ts: number, withinYear?: boolean) => number;
/**
 *
 * @param ts
 * @constructor
 */
export declare const TSWeeks: (ts: number) => number;
/**
 *
 * @param ts
 * @param withinMonth
 * @constructor
 */
export declare const TSDays: (ts: number, withinMonth?: boolean) => number;
/**
 *
 * @param ts
 * @param withinDay
 * @constructor
 */
export declare const TSHours: (ts: number, withinDay?: boolean) => number;
/**
 *
 * @param ts
 * @param withinHour
 * @constructor
 */
export declare const TSMinutes: (ts: number, withinHour?: boolean) => number;
/**
 *
 * @param ts
 * @param withinMinute
 * @constructor
 */
export declare const TSSeconds: (ts: number, withinMinute?: boolean) => number;
/**
 *
 * @param year
 * @param month
 * @constructor
 */
export declare const DaysInMonthYear: (year: number, month: number) => number | null;
/**
 *
 * @param date
 * @constructor
 */
export declare const DaysInMonth: (date: TDateAny) => number | null;
/**
 *
 * @param date
 * @param adjustments
 * @constructor
 */
export declare const DateAdjustTS: (date: TDateAny, adjustments: TDateParseOptions) => number | null;
/**
 * Calculates the difference in days between two dates, excluding weekends (Saturdays and Sundays).
 *
 * @param {TDateAny} dateFrom - The starting date of the calculation. Can be provided in any supported date format.
 * @param {TDateAny} dateTo - The ending date of the calculation. Can be provided in any supported date format.
 * @returns {number} - The number of non-weekend days (Monday to Friday) between `dateFrom` and `dateTo`.
 *                     Returns 0 if the dates are invalid, the same, or if there are no non-weekend days between them.
 */
export declare const DayDiffNoWeekend: (dateFrom: TDateAny, dateTo: TDateAny) => number;
/**
 * Calculates the difference between two given dates (`dateFrom` and `dateTo`) based on the specified duration unit.
 *
 * @param {TDateAny} dateFrom - The starting date for the calculation, which can be in various supported date formats.
 * @param {TDateAny} dateTo - The ending date for the calculation, which can also be in various supported date formats.
 * @param {TDuration} duration - The unit of time to calculate the difference, such as 'year', 'month', 'day', 'hour', etc.
 * Supported values include:
 * - 'year', 'years'
 * - 'month', 'months'
 * - 'week', 'weeks'
 * - 'day', 'days'
 * - 'hour', 'hours'
 * - 'minute', 'minutes'
 * - 'second', 'seconds'
 * - 'millisecond', 'milliseconds'
 *
 * @returns {number | null} The difference between the two dates based on the specified duration. Returns:
 * - A positive or negative number indicating the difference in the specified unit.
 * - Zero if the dates are the same.
 * - Null if one or both dates are invalid.
 */
export declare const DateDiff: (dateFrom: TDateAny, dateTo: TDateAny, duration: TDuration) => number | null;
/**
 *
 */
export interface IWeekNumber {
    year: number;
    week: number;
}
/**
 *
 * @param component
 * @param date
 * @param adjustments
 * @constructor
 */
export declare const DateComponent: (component: 'YYYY' | 'MM' | 'DD' | 'HH' | 'mm' | 'ss', date?: TDateAny, adjustments?: TAdjustment) => number;
/**
 *
 * @param date
 * @param adjustments
 * @constructor
 */
export declare const DateWeekNumber: (date?: TDateAny, adjustments?: TAdjustment) => IWeekNumber | null;
/**
 *
 * @param date
 * @param adjustments
 * @constructor
 */
export declare const DateWeekISONumberNull: (date?: TDateAny, adjustments?: TAdjustment) => IWeekNumber | null;
export declare const DateWeekISONumber: (date?: TDateAny, adjustments?: TAdjustment) => IWeekNumber;
/**
 *
 * @param weekNumber
 * @constructor
 */
export declare const DateFromWeekNumber: (weekNumber: IWeekNumber) => string | null;
/**
 *
 * @param weekNumber
 * @constructor
 */
export declare const DatesFromWeekNumberNull: (weekNumber: IWeekNumber) => IDates | null;
export declare const DatesFromWeekNumber: (weekNumber: IWeekNumber) => IDates;
export declare const MonthDatesFromDateISOWeeks: (date: TDateAny) => IDates;
export declare const WeekNumberAdjust: (weekNumber: IWeekNumber, adjustment: TDateOnlyAdjustment | number) => IWeekNumber | null;
/**
 *
 * @param dateFrom
 * @param dateTo
 * @constructor
 */
export declare const DateDiffComponents: (dateFrom: TDateAny, dateTo: TDateAny) => {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
};
/**
 *
 * @param dateFrom
 * @param dateTo
 * @param tripToSecondsOrTwo
 * @param abbreviated
 * @constructor
 */
export declare const DateDiffLongDescription: (dateFrom: TDateAny, dateTo: TDateAny, tripToSecondsOrTwo?: boolean, abbreviated?: boolean) => string;
/**
 * Displays a simplified duration format from seconds.
 *
 * @example
 * MomentDurationShortText((30 * 60) + 20) // result: 30 Minutes 20 Seconds
 */
export declare const DurationLongDescription: (seconds: number, tripToSecondsOrTwo?: boolean, abbreviated?: boolean) => string;
/**
 * Compares two dates based on the specified evaluation type and optional minimum interval.
 *
 * @param {TDateAny} date1 - The first date to compare.
 * @param {'IsSame' | 'IsBefore' | 'IsAfter' | 'IsSameOrBefore' | 'IsSameOrAfter'} evalType - The evaluation type.
 * @param {TDateAny | TDateParseOptions} date2 - The second date to compare. It can be a string, number, or Date object, or a TDateParseOptions object.
 * @param {TDuration} [minInterval] - The optional minimum interval to consider when comparing the dates.
 * @returns {boolean} - Whether the comparison condition is satisfied or not.
 */
export declare const DateCompare: (date1: TDateAny, evalType: 'IsSame' | 'IsBefore' | 'IsAfter' | 'IsSameOrBefore' | 'IsSameOrAfter', date2: TDateAny | TDateParseOptions, minInterval?: TDuration) => boolean;
/**
 * Finds the least date from the given list of dates.
 *
 * @param {...TDateAny[]} dates - The dates to compare.
 * @returns {string | null} - The least date from the list, or null if the list is empty.
 */
export declare function LeastDate(...dates: TDateAny[]): string | null;
/**
 * Finds the greatest date among the given dates.
 *
 * @param {...TDateAny} dates - The dates to compare.
 * @returns {string | null} - The greatest date or null if no valid date is found.
 */
export declare function GreaterDate(...dates: TDateAny[]): string | null;
/**
 * Checks if a data is between two other dates (inclusive)
 *
 * @param checkDate
 * @param startDate
 * @param endDate
 * @constructor
 */
export declare const DateIsBetween: (checkDate: TDateAny, startDate: TDateAny, endDate: TDateAny) => boolean;
/**
 *
 * @param date1
 * @param date2
 * @param minInterval
 * @constructor
 */
export declare const SortCompareDateNull: (date1: TDateAny, date2: TDateAny, minInterval?: TDuration) => number | null;
/**
 *
 * @param date1
 * @param date2
 * @param minInterval
 * @constructor
 */
export declare const SortCompareDate: (date1: TDateAny, date2: TDateAny, minInterval?: TDuration) => number;
/**
 *
 */
export declare enum EQuarter {
    Q1 = 1,
    Q2 = 2,
    Q3 = 3,
    Q4 = 4
}
/**
 *
 */
export interface IDates {
    start: string;
    end: string;
}
/**
 *
 * @param year
 * @param quarter
 * @constructor
 */
export declare const DatesQuarter: (year: number, quarter: EQuarter) => IDates | null;
/**
 *
 */
export interface IQuarter {
    year: number;
    quarter: EQuarter;
}
/**
 *
 * @constructor
 */
export declare const InitialDateQuarter: () => IQuarter;
/**
 *
 * @param date
 * @constructor
 */
export declare const DateQuarter: (date: TDateAny) => IQuarter | null;
/**
 *
 * @param year
 * @param monthOneBased
 * @constructor
 */
export declare const DatesMonth: (year: number, monthOneBased: number) => IDates | null;
/**
 *
 */
export interface IMonth {
    year: number;
    monthOneBased: number;
}
/**
 *
 * @constructor
 */
export declare const InitialDateMonth: () => IMonth;
/**
 *
 * @param date
 * @constructor
 */
export declare const DateMonth: (date: TDateAny) => IMonth | null;
/**
 * Represents the type for Days of the Week. (Note: 0 = Sunday)
 *
 * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6} TDoW
 */
export type TDoW = 0 | 1 | 2 | 3 | 4 | 5 | 6;
/**
 * Represents an array of days of the week (DoW).
 * Each element in the array represents a day of the week, where:
 * - 0 represents Sunday
 * - 1 represents Monday
 * - 2 represents Tuesday
 * - 3 represents Wednesday
 * - 4 represents Thursday
 * - 5 represents Friday
 * - 6 represents Saturday
 *
 * @type {number[]}
 * @typedef {number} TDoW
 *
 * @example
 *
 * // Initialize the array of days of the week
 *
 * const DoWs: TDoW[] = [0, 1, 2, 3, 4, 5, 6];
 */
export declare const DoWs: TDoW[];
/**
 * Gets the day of the week for a given date. (Note: 0 = Sunday)
 *
 * @param {TDateAny} date - The date to get the day of the week for.
 * @returns {TDoW|null} The day of the week, or null if the date is invalid.
 */
export declare const DateDayOfWeek: (date: TDateAny) => TDoW | null;
/**
 *
 * @param date
 * @param adjustments
 * @constructor
 */
export declare const DateOnlyNull: (date: TDateAny, adjustments?: TDateOnlyAdjustment & {
    formatLocale?: boolean;
    timezoneDisplay?: string;
    fromFormat?: string;
}) => string | null;
/**
 * Converts a given date input into a formatted date string, based on optional adjustments.
 *
 * @param {TDateAny} date - The date input to be processed. Supported formats may include date objects, strings, or other date-compatible types.
 * @param {TDateOnlyAdjustment & { formatLocale?: boolean, timezoneDisplay?: string, fromFormat?: string }} [adjustments] - Optional adjustments to modify the formatting or parsing behavior.
 * @param {boolean} [adjustments.formatLocale] - Indicates whether to format the date based on the local timezone.
 * @param {string} [adjustments.timezoneDisplay] - Specifies the timezone to use for the date formatting (e.g., 'UTC', 'GMT+10').
 * @param {string} [adjustments.fromFormat] - Defines the expected input format for parsing the date.
 * @returns {string} Returns the formatted date string, or the default ISO date format (YYYY-MM-DD) if no adjustments are applied.
 */
export declare const DateOnly: (date: TDateAny, adjustments?: TDateOnlyAdjustment & {
    formatLocale?: boolean;
    timezoneDisplay?: string;
    fromFormat?: string;
}) => string;
/**
 * Convert a date and/or time value to a time
 * @param time
 * @param adjustments
 * @constructor
 */
export declare const TimeOnly: (time: TDateAny, adjustments?: TTimeOnlyAdjustment & {
    formatLocale?: boolean;
    timezoneSource?: string;
}) => string | null;
/**
 * Generates a series of times, starting with the first time (default '00:00') and ending BEFORE the end time (default: '24:00')
 *
 * @param minuteIntervals
 * @param startTimeInclusive
 * @param endTimeNotInclusive
 * @constructor
 */
export declare const TimeSeries: (minuteIntervals: number, startTimeInclusive?: TDateAny, endTimeNotInclusive?: TDateAny) => string[];
/**
 * Adjusts a time or date/time to the floor of minutes specified in the increment
 *
 * @param time
 * @param minuteIncrement
 * @constructor
 */
export declare const TimeFloorMinute: (time: TDateAny, minuteIncrement?: number) => string | null;
/**
 *
 * @constructor
 */
export declare const ESTTodayDateTimeLabel: () => string;
/**
 *
 * @constructor
 */
export declare const ESTTodayDate: () => string;
/**
 *
 * @param date
 * @param startOf
 * @param compareDate
 * @constructor
 */
export declare const WeeksFromLabel: (date: string, startOf: 'StartOf' | 'StartOfMon', compareDate?: string) => string;
/**
 *
 * @param date
 * @constructor
 */
export declare const DateDoWSundayZero: (date?: TDateAny) => TDoW | null;
/**
 *
 * @param date
 * @constructor
 */
export declare const DateIsWeekend: (date?: TDateAny) => boolean;
/**
 * Returns an array of dates between given start and end dates.
 * @param {TDateAny} start - The starting date.
 * @param {TDateAny} end - The ending date.
 * @param {TDateOnlyAdjustment} [adjustments={day: 1}] - Adjustments to make to each date in the array.
 * @param {number} [limit=1000] - The maximum number of dates to return.
 * @returns {string[]} An array of date strings sorted in the order based on the start and end dates.
 */
export declare const DatesBetween: (start: TDateAny, end: TDateAny, adjustments?: TDateOnlyAdjustment, limit?: number) => string[];
/**
 * Represents the structure of a timezone in an Olson database format.
 *
 * This type defines a group of timezones and their corresponding metadata.
 *
 * @typedef {Object} TTimeZoneOlsonStructure
 * @property {string} group - The name of the group or category to which the timezones belong.
 * @property {Object[]} zones - An array of zone objects, where each object provides details about a specific timezone.
 * @property {string} zones.value - The canonical value or identifier for the timezone.
 * @property {string} zones.name - A descriptive name for the timezone.
 */
export type TTimeZoneOlsonStructure = {
    group: string;
    zones: {
        value: string;
        name: string;
    }[];
};
/**
 * Represents a collection of time zone information grouped categorically.
 * Each group contains an array of zones, where each zone specifies a time zone value and its descriptive name.
 *
 * @typedef {Object} TTimeZoneOlsonStructure
 * @property {string} group - The category or label that groups specific time zones (e.g., "US (Common)", "America").
 * @property {Array.<Object>} zones - The list of time zones associated with a specific group.
 * @property {string} zones[].value - The unique identifier (Olson time zone) of a time zone (e.g., "America/New_York").
 * @property {string} zones[].name - The descriptive name of the time zone (e.g., "New York (Eastern)").
 *
 * @name TimeZoneOlsonsAll
 * @type {TTimeZoneOlsonStructure[]}
 * @description Maintains a comprehensive list of time zones organized by groups, enabling easy access
 * and categorization of time zones for applications dealing with date and time functionality.
 */
export declare const TimeZoneOlsonsAll: TTimeZoneOlsonStructure[];
/**
 * Retrieves all Olson time zones in America.
 *
 * @returns {string[]} Array of Olson time zones in America.
 */
export declare const TimeZoneOlsonsAmerica: () => string[];
/**
 * Returns an array of strings representing all the Olson time zones.
 *
 * @returns {string[]} Array of Olson time zones.
 */
export declare const TimeZoneOlsons: () => string[];
/**
 * Returns an array of Olson timezone strings for common timezones in America.
 *
 * @returns {string[]} An array of Olson timezone strings.
 */
export declare const TimeZoneOlsonsAmericaCommon: () => string[];
/**
 * Retrieves the abbreviation of the timezone for a given date and IANA timezone identifier.
 *
 * @param {TDateAny} date - The date for which to retrieve the timezone abbreviation.
 * @param {string|null|undefined} iana - The IANA timezone identifier. If not provided, the local timezone will be used.
 * @returns {string} The abbreviation of the timezone for the given date and IANA timezone identifier.
 */
export declare function IANAZoneAbbrNull(date: TDateAny, iana: string | null | undefined): string | null;
/**
 * Returns the short IANA timezone abbreviation for the provided date and timezone.
 *
 * @param {TDateAny} date - The date object or value to be used for determining the timezone abbreviation.
 * @param {string | null | undefined} iana - The IANA timezone identifier. Can be null or undefined.
 * @return {string} The short timezone abbreviation, or an empty string if the timezone is invalid or an error occurs.
 */
export declare function IANAZoneAbbr(date: TDateAny, iana: string | null | undefined): string;
/**
 * Generates a formatted description for a given IANA time zone identifier.
 *
 * @param {string | null | undefined} iana - The IANA time zone string. Provide `null` or `undefined` for empty results.
 * @param {Object} [options] - Optional configuration for formatting the output.
 * @param {boolean} [options.removePrefix] - If true, removes the prefix (e.g., continent/region) from the IANA string.
 * @param {boolean} [options.hideIANA] - If true, the abbreviation will be returned instead of the formatted IANA string.
 * @param {TDateAny} [options.forDate] - The date to use for determining the time zone abbreviation.
 * @return {string | null} A formatted string representing the IANA time zone, optionally including time zone abbreviation, or null if the input is invalid.
 */
export declare function IANADescription(iana: string | null | undefined, options?: {
    removePrefix?: boolean;
    hideIANA?: boolean;
    forDate?: TDateAny;
}): string | null;
/**
 * Calculates the date of Easter for a given year.
 *
 * @param {number} year - The year for which to calculate the Easter date.
 * @return {string} The Easter date in the format "YYYY-MM-DD".
 */
export declare function EasterDate(year: number): string | null;
