import image25 from '../images/projects/01/1.jpg';
import image26 from '../images/projects/01/2.jpg';
import image27 from '../images/projects/01/3.jpg';
import image28 from '../images/projects/01/4.jpg';
import image29 from '../images/projects/01/5.jpg';
import image30 from '../images/projects/01/6.jpg';
import image31 from '../images/projects/01/7.jpg';
import image35 from '../images/projects/02/0.jpg';
import image36 from '../images/projects/02/1.jpg';
import image37 from '../images/projects/02/2.jpg';
import image8 from '../images/projects/03/0.jpg';
import image9 from '../images/projects/03/1.jpg';
import image18 from '../images/projects/03/10.jpg';
import image19 from '../images/projects/03/11.jpg';
import image10 from '../images/projects/03/2.jpg';
import image11 from '../images/projects/03/3.jpg';
import image12 from '../images/projects/03/4.jpg';
import image13 from '../images/projects/03/5.jpg';
import image14 from '../images/projects/03/6.jpg';
import image15 from '../images/projects/03/7.jpg';
import image16 from '../images/projects/03/8.jpg';
import image17 from '../images/projects/03/9.jpg';
import image5 from '../images/projects/04/project-template-0.jpg';
import image6 from '../images/projects/04/project-template-1.jpg';
import image7 from '../images/projects/04/project-template-2.jpg';
import image20 from '../images/projects/05/1.jpg';
import image21 from '../images/projects/05/2.jpg';
import image22 from '../images/projects/05/3.jpg';
import image1 from '../images/projects/06/project-template-1.jpg';
import image2 from '../images/projects/06/project-template-2.jpg';
import image3 from '../images/projects/06/project-template-3.jpg';
import image4 from '../images/projects/06/project-template-4.jpg';
import image32 from '../images/projects/07/1.jpg';
import image33 from '../images/projects/07/2.jpg';
import image34 from '../images/projects/07/3.jpg';
import image23 from '../images/projects/10/1.jpg';
import image24 from '../images/projects/10/2.jpg';
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
                new Project(9, 'Place des Vosges', ProjectCategory.LOGEMENTS, '95 m²', '6 mois', 'Paris 4e', new Date('2021-02-01'), descriptionIntro, description, [ new ProjectImage(image35, "Le salon avec sa magnifique cheminée"), new ProjectImage(image36, "L'espace dînatoire avec sa table en marbre"), new ProjectImage(image37, "La salle de bain très contemporaine") ]),
                new Project(8, 'Place des Vosges', ProjectCategory.LOGEMENTS, '95 m²', '6 mois', 'Paris 4e', new Date('2021-02-01'), descriptionIntro, description, [ new ProjectImage(image36, "L'espace dînatoire avec sa table en marbre"), new ProjectImage(image35, "Le salon avec sa magnifique cheminée"), new ProjectImage(image37, "La salle de bain très contemporaine") ]),
                new Project(7, 'Rue Pernelle', ProjectCategory.LOGEMENTS, '90 m²', '9 mois', 'Paris 1er', new Date('2020-11-01'), descriptionIntro, description, [ new ProjectImage(image32, "Le salon avec sa superbe cheminée d'origine"), new ProjectImage(image33, "La cuisine toute équipée"), new ProjectImage(image34, "La salle de bain") ]),
                new Project(6, 'Crèche Faure', ProjectCategory.EQUIPEMENTS, '180 m²', '4 mois', 'Paris 15e',  new Date('2020-09-01'), descriptionIntro, description, [ new ProjectImage(image1, 'Nunc augue mauris, tincidunt eget pharetra vitae, cursus mattis tellus.'), new ProjectImage(image2, "Rénovation d'une crèche collective"), new ProjectImage(image3, "Ce projet de rénovation permettra l’accueil de 24 enfants."), new ProjectImage(image4, 'Crédit photo : Mai Chi Do Duy') ]),
                new Project(5, 'FFBB', ProjectCategory.EQUIPEMENTS, '160 m²', '4 mois', 'Paris 13e', new Date('2020-04-01'), descriptionIntro, description, [ new ProjectImage(image20, "Réaménagement du hall, de la boutique et de l'espace muséal de la Fédération Française de Basket-Ball"), new ProjectImage(image21, "Réaménagement du hall, de la boutique et de l'espace muséal de la Fédération Française de Basket-Ball"), new ProjectImage(image22, "Réaménagement du hall, de la boutique et de l'espace muséal de la Fédération Française de Basket-Ball") ]),
                new Project(4, 'Crèche Pelleport', ProjectCategory.EQUIPEMENTS, '540 m²', '8 mois', 'Paris 20e', new Date('2020-01-01'), descriptionIntro, description, [ new ProjectImage(image5, "Rénovation complète d'une crèche collective de 72 berceaux"), new ProjectImage(image6, "Remise aux normes réglementaires (Sécurité et PMR) et modifications de la distribution des locaux"), new ProjectImage(image7, 'Le paradis des enfants !') ]),
                new Project(3, 'ESV Digital', ProjectCategory.BUREAUX, '450 m²', '3 mois', 'Paris 17e', new Date('2019-10-01'), descriptionIntro, description, [ new ProjectImage(image8, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image9, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image10, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image11, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image12, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image13, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image14, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image15, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image16, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image17, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image18, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image19, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau") ]),
                new Project(2, 'ESV Digital', ProjectCategory.BUREAUX, '450 m²', '3 mois', 'Paris 17e', new Date('2019-10-01'), descriptionIntro, description, [ new ProjectImage(image14, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image8, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"),  new ProjectImage(image9, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image10, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image11, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image12, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image13, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image15, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image16, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image17, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image18, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau"), new ProjectImage(image19, "Rénovation d'un hôtel particulier à Paris, type Art Nouveau") ]),
                new Project(0, 'Théâtre des Ambassadeurs', ProjectCategory.EQUIPEMENTS, '3800 m²', '8 mois', 'Paris 8e', new Date('2018-05-01'), descriptionIntro, description, [ new ProjectImage(image23, 'Le théâtre des ambassadeurs est une construction de 1931, implantée dans les jardins des Champs-Élysées, avenue Gabriel.'), new ProjectImage(image24, "Le théâtre des ambassadeurs est une construction de 1931, implantée dans les jardins des Champs-Élysées, avenue Gabriel.") ]),
                new Project(10, 'Rue Saint Maur', ProjectCategory.EN_COURS, '40 m²', '6 mois', 'Paris 11e', new Date('2021-07-01'), descriptionIntro, description, [ new ProjectImage(image26, "Aménagement d'un appartement de 40m², rue Saint Maur"), new ProjectImage(image25, "La cuisine ouverte"), new ProjectImage(image27, "La cuisine ouverte"), new ProjectImage(image28, "Le couloir avec la porte de la chambre"), new ProjectImage(image29, "La salle de bain attenante à la chambre"), new ProjectImage(image30, "La salle de bain séparée de la chambre avec une verrière"), new ProjectImage(image31, "Carrelage de la salle de bain") ]),
            ]
        );
    }

}