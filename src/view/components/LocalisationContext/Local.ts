export interface ILocalProps extends ILocalTrnsl<string>{
}

export interface ILocalTrnsl<T>{
    en : T;
    fr : T;
}

export default class Local{
    static EN = new Local("EN", "English");
    static FR = new Local("FR", "Français");

    private shortName : string;
    private longName : string;

    constructor(shortName : string, longName : string){
        this.shortName = shortName;
        this.longName = longName;
    }

    getShortName = () => this.shortName;
    getLongName = () => this.longName;
}