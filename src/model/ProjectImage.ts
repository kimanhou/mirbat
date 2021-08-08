import { FieldType } from "./deserialization/FieldType";
import JsonDeserializationHelper from "./deserialization/JsonDeserializationHelper";

export default class ProjectImage {
    readonly url : string;
    readonly caption : string;

    constructor (url : string, caption : string) {
        this.url = url;
        this.caption = caption;
    }

    static deserialize = (data : any) => {
        const url = JsonDeserializationHelper.assertField(data, "url", FieldType.STRING);
        const caption = JsonDeserializationHelper.assertField(data, "caption", FieldType.STRING);

        return new ProjectImage(url, caption);
    }
}