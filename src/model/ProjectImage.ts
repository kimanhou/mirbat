export default class ProjectImage {
    readonly url : string;
    readonly caption : string;

    constructor (url : string, caption : string) {
        this.url = url;
        this.caption = caption;
    }
}