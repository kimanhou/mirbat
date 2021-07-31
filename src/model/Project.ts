import ProjectImage from "./ProjectImage";
import project1 from '../images/projects/project-1.jpg';
import project2 from '../images/projects/project-2.jpg';
import project3 from '../images/projects/project-3.jpg';
import project5 from '../images/projects/project-5.jpg';
import project6 from '../images/projects/project-6.jpg';
import project7 from '../images/projects/project-7.jpg';
import project8 from '../images/projects/project-8.jpg';
import project9 from '../images/projects/project-9.jpg';
import project10 from '../images/projects/project-10.jpg';
import image1 from '../images/projects/06/project-template-1.jpg';
import image2 from '../images/projects/06/project-template-2.jpg';
import image3 from '../images/projects/06/project-template-3.jpg';
import image4 from '../images/projects/06/project-template-4.jpg';

import image5 from '../images/projects/04/project-template-0.jpg';
import image6 from '../images/projects/04/project-template-1.jpg';
import image7 from '../images/projects/04/project-template-2.jpg';

import image8 from '../images/projects/03/0.jpg';
import image9 from '../images/projects/03/1.jpg';
import image10 from '../images/projects/03/2.jpg';
import image11 from '../images/projects/03/3.jpg';
import image12 from '../images/projects/03/4.jpg';
import image13 from '../images/projects/03/5.jpg';
import image14 from '../images/projects/03/6.jpg';
import image15 from '../images/projects/03/7.jpg';
import image16 from '../images/projects/03/8.jpg';
import image17 from '../images/projects/03/9.jpg';
import image18 from '../images/projects/03/10.jpg';
import image19 from '../images/projects/03/11.jpg';

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

    static filterByCategory = (category : ProjectCategory) => {
        const projects = Project.getAllSortedProjects();
        if (category === ProjectCategory.TOUS) {
            return projects;
        }
        return projects.filter(t => t.category === category);
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
                ProjectCategory.EQUIPEMENTS,
                ProjectCategory.BUREAUX,
                ProjectCategory.EN_COURS
            ]
        );
    }

    static getAllSortedProjects = () => {
        return Project.getAllProjects().sort((a, b) => b.date.getTime() - a.date.getTime());
    }

    static getAllProjects = () => {
        const descriptionIntro = 'Aenean tellus odio, posuere at erat ut, rhoncus maximus turpis. In hendrerit pretium dui vel eleifend. Proin molestie massa in ipsum pretium volutpat sodales pellentesque nisl. In placerat ex vitae mauris hendrerit, in pellentesque leo accumsan.';
        const description = 'Morbi vitae dignissim diam. Morbi ac sollicitudin lacus, sed consequat ipsum. In vulputate, enim eu consectetur semper, libero tellus sodales mi, non placerat leo ante eu ipsum. Donec imperdiet eu sapien id interdum. Pellentesque euismod pulvinar lacus, id pulvinar elit gravida quis. Nulla semper tellus congue nulla semper faucibus. Aenean id nunc dolor. Donec consectetur dignissim orci, at fermentum neque facilisis eget. Aenean vitae eleifend velit. Nam hendrerit justo hendrerit metus accumsan, a viverra nulla molestie. Praesent vel malesuada felis. Nullam ac diam ex. In ac volutpat lacus, ac porttitor felis. Duis eget tortor at libero posuere mattis. Donec pulvinar fringilla ultricies. Integer euismod nisi velit, sit amet euismod diam suscipit et. Phasellus id tellus turpis. Ut at dolor at eros maximus blandit. Quisque rhoncus lorem et justo euismod euismod. Phasellus blandit tempus porta. Duis vitae sagittis massa. Proin volutpat metus non elit elementum, at viverra nunc efficitur. Nulla et tempus arcu, ac vestibulum massa. Nunc lacinia, libero quis tincidunt ullamcorper, arcu erat scelerisque elit, nec lacinia lectus massa sit amet nisi.';
        return (
            [
                new Project(9, 'Place des Vosges', ProjectCategory.LOGEMENTS, '95 m²', '6 mois', 'Paris 4e', new Date('2021-02-01'), descriptionIntro, description, [ new ProjectImage(project1, "La salle de bain très contemporaine"), new ProjectImage(project2, "L'espace dînatoire avec sa table en marbre") ]),
                new Project(8, 'Place des Vosges', ProjectCategory.LOGEMENTS, '95 m²', '6 mois', 'Paris 4e', new Date('2021-02-01'), descriptionIntro, description, [ new ProjectImage(project2, "L'espace dînatoire avec sa table en marbre"), new ProjectImage(project1, "La salle de bain très contemporaine") ]),
                new Project(7, 'Rue Pernelle', ProjectCategory.LOGEMENTS, '90 m²', '9 mois', 'Paris 1er', new Date('2020-11-01'), descriptionIntro, description, [ new ProjectImage(project3, "Le salon avec sa superbe cheminée d'origine") ]),
                new Project(6, 'Crèche Faure', ProjectCategory.EQUIPEMENTS, '180 m²', '4 mois', 'Paris 15e',  new Date('2020-09-01'), descriptionIntro, description, [ new ProjectImage(image1, 'Nunc augue mauris, tincidunt eget pharetra vitae, cursus mattis tellus.'), new ProjectImage(image2, "Rénovation d'une crèche collective"), new ProjectImage(image3, "Ce projet de rénovation permettra l’accueil de 24 enfants."), new ProjectImage(image4, 'Crédit photo : Mai Chi Do Duy') ]),
                new Project(5, 'FFBB', ProjectCategory.EQUIPEMENTS, '160 m²', '4 mois', 'Paris 13e', new Date('2020-04-01'), descriptionIntro, description, [ new ProjectImage(project5, "Réaménagement du hall, de la boutique et de l'espace muséal de la Fédération Française de Basket-Ball") ]),
                new Project(4, 'Crèche Pelleport', ProjectCategory.EQUIPEMENTS, '540 m²', '8 mois', 'Paris 20e', new Date('2020-01-01'), descriptionIntro, description, [ new ProjectImage(image5, "Rénovation complète d'une crèche collective de 72 berceaux"), new ProjectImage(image6, "Remise aux normes réglementaires (Sécurité et PMR) et modifications de la distribution des locaux"), new ProjectImage(image7, 'Le paradis des enfants !') ]),
                new Project(3, 'ESV Digital', ProjectCategory.BUREAUX, '450 m²', '3 mois', 'Paris 17e', new Date('2019-10-01'), descriptionIntro, description, [ new ProjectImage(image8, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image9, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image10, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image11, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image12, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image13, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image14, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image15, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image16, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image17, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image18, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image19, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau") ]),
                new Project(2, 'ESV Digital', ProjectCategory.BUREAUX, '450 m²', '3 mois', 'Paris 17e', new Date('2019-10-01'), descriptionIntro, description, [ new ProjectImage(image14, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image8, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"),  new ProjectImage(image9, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image10, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image11, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image12, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image13, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image15, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image16, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image17, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image18, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image19, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau") ]),
                new Project(0, 'Théâtre des Ambassadeurs', ProjectCategory.EQUIPEMENTS, '3800 m²', '8 mois', 'Paris 8e', new Date('2018-05-01'), descriptionIntro, description, [ new ProjectImage(project9, '') ]),
                new Project(10, 'Rue Saint Maur', ProjectCategory.EN_COURS, '40 m²', '6 mois', 'Paris 11e', new Date('2021-07-01'), descriptionIntro, description, [ new ProjectImage(project10, '') ]),
            ]
        );
    }

}