export class CliUtils {
    public static ga:Function;

    public static setPage(pageUrl:string):void{
        this.ga('set', 'page', pageUrl);
        this.ga('send', 'pageview');
    }

    public static setEvent(eventCategory:string="",eventAction:string="",eventLabel:string="",eventValue:number =0):void{
        //ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
        this.ga("send","event",eventCategory,eventAction,eventLabel,eventValue);
    }
}