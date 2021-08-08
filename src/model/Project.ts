import { FieldType } from './deserialization/FieldType';
import JsonDeserializationHelper from './deserialization/JsonDeserializationHelper';
import ProjectImage from "./ProjectImage";


export enum ProjectCategory {
    TOUS = 'Tous',
    LOGEMENTS = 'Logements',
    EQUIPEMENTS = 'Équipements',
    BUREAUX = 'Bureaux',
    EN_COURS = 'En cours'
}

export default class Project {
    readonly id : number;
    readonly title : string;
    readonly category : ProjectCategory;
    readonly surface : string;
    readonly duration : string;
    readonly location : string;
    readonly date : Date;
    readonly descriptionIntro : string;
    readonly description : string;
    readonly images : ProjectImage[];

    constructor(id : number, title : string, category : ProjectCategory, surface : string, duration : string, location : string, 
        date : Date, descriptionIntro : string, description : string, images : ProjectImage[]) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.surface = surface;
        this.duration = duration;
        this.location = location;
        this.date = date;
        this.descriptionIntro = descriptionIntro;
        this.description = description;
        this.images = images;
    }

    static filterByCategory = (projects : Project[], category : ProjectCategory) => {
        const sortedByDate = projects.sort((a, b) => b.date.getTime() - a.date.getTime());
        if (category === ProjectCategory.TOUS) {
            return sortedByDate;
        }
        return sortedByDate.filter(t => t.category === category);
    }

    getDateYear = () => {
        return this.date.getFullYear();
    }

    getLink = () => {
        return `/projets/${this.id}`;
    }

    static getAllCategories = () => {
        return (
            [
                ProjectCategory.TOUS,
                ProjectCategory.LOGEMENTS,
                ProjectCategory.BUREAUX,
                ProjectCategory.EQUIPEMENTS,
                ProjectCategory.EN_COURS
            ]
        );
    }

    static deserialize = (data : any) => {
        const id = JsonDeserializationHelper.assertField(data, "id", FieldType.NUMBER);
        const title = JsonDeserializationHelper.assertField(data, "title", FieldType.STRING);
        const category = JsonDeserializationHelper.assertField(data, "category", FieldType.STRING) as ProjectCategory;
        const surface = JsonDeserializationHelper.assertField(data, "surface", FieldType.STRING);
        const duration = JsonDeserializationHelper.assertField(data, "duration", FieldType.STRING);
        const location = JsonDeserializationHelper.assertField(data, "location", FieldType.STRING);
        const date = JsonDeserializationHelper.assertField(data, "date", FieldType.DATE);
        const descriptionIntro = JsonDeserializationHelper.assertField(data, "descriptionIntro", FieldType.STRING);
        const description = JsonDeserializationHelper.assertField(data, "description", FieldType.STRING);
        const images = JsonDeserializationHelper.assertField(data, "images", FieldType.ARRAY(ProjectImage.deserialize));

        return new Project(id, title, category, surface, duration, location, date, descriptionIntro, description, images);
    }
}