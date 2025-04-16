/**
 *
 *
 */
export declare namespace ICS {
    /**
     *
     *
     * @group ICS
     */
    interface IEvent {
        dateTimeStart: string;
        dateTimeEnd?: string;
        durationMinutes?: number;
        UID: string;
        subject: string;
        location?: string;
        location_altrep?: string;
        description: string;
        priority?: 1 | 2 | 3 | 4 | 5;
        alarmTriggerMinutes?: number;
        timezone?: string | null;
        dateTimeCreated?: string;
        dateTimeModified?: string;
        organizerName?: string;
        organizerEmail?: string;
    }
    /**
     *
     * @param filenameNoExtension
     * @constructor
     *
     * @group ICS
     */
    const Header: (filenameNoExtension?: string) => {
        'Content-Type': string;
        'Content-Disposition': string;
    };
    /**
     *
     *
     * @group ICS
     */
    const VCALENDAROpen_Text = "BEGIN:VCALENDAR\nVERSION:2.0\nCALSCALE:GREGORIAN\n";
    /**
     *
     *
     * @group ICS
     */
    const VCALENDARClose_Text = "END:VCALENDAR\n";
    /**
     *
     * @param event
     * @constructor
     *
     * @group ICS
     */
    const VEVENT_Text: (event: IEvent) => string;
    /**
     *
     * @param event
     * @constructor
     *
     * @group ICS
     */
    const ICS_Text: (event: IEvent) => string;
}
