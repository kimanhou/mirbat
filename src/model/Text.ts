import Local from "../view/components/LocalisationContext/Local";

export default class Text {
    readonly english : string;
    readonly french : string;

    constructor(english : string, french : string) {
        this.english = english;
        this.french = french;
    }

    getText = (localisation : Local) => {
        if (localisation === Local.FR) {
            return this.french;
        }
        return this.english;
    }
}