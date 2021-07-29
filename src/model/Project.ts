import ProjectImage from "./ProjectImage";
import project1 from '../images/projects/project-1.jpg';
import project2 from '../images/projects/project-2.jpg';
import project3 from '../images/projects/project-3.jpg';
import project4 from '../images/projects/project-4.jpg';
import project5 from '../images/projects/project-5.jpg';
import project6 from '../images/projects/project-6.jpg';
import project7 from '../images/projects/project-7.jpg';
import project8 from '../images/projects/project-8.jpg';
import project9 from '../images/projects/project-9.jpg';
import project10 from '../images/projects/project-10.jpg';

export enum ProjectCategory {
    TOUS = 'Tous',
    LOGEMENTS = 'Logements',
    EQUIPEMENTS = 'Équipements',
    BUREAUX = 'Bureaux',
    EN_COURS = 'En cours'
}

export default class Project {
    readonly title : string;
    readonly category : ProjectCategory;
    readonly surface : string;
    readonly duration : string;
    readonly location : string;
    readonly images : ProjectImage[];

    constructor(title : string, category : ProjectCategory, surface : string, duration : string, location : string, images : ProjectImage[]) {
        this.title = title;
        this.category = category;
        this.surface = surface;
        this.duration = duration;
        this.location = location;
        this.images = images;
    }

    static filterByCategory = (category : ProjectCategory) => {
        const projects = Project.getAllProjects();
        if (category === ProjectCategory.TOUS) {
            return projects;
        }
        return projects.filter(t => t.category === category);
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

    static getAllProjects = () => {
        return (
            [
                new Project('Place des Vosges', ProjectCategory.LOGEMENTS, '95 m²', '6 mois', 'Paris 4e', [ new ProjectImage(project1, '') ]),
                new Project('Place des Vosges', ProjectCategory.LOGEMENTS, '95 m²', '6 mois', 'Paris 4e', [ new ProjectImage(project2, '') ]),
                new Project('Rue Pernelle', ProjectCategory.LOGEMENTS, '90 m²', '9 mois', 'Paris 1er', [ new ProjectImage(project3, '') ]),
                new Project('Crèche Faure', ProjectCategory.EQUIPEMENTS, '180 m²', '4 mois', 'Paris 15e', [ new ProjectImage(project4, '') ]),
                new Project('FFBB', ProjectCategory.EQUIPEMENTS, '160 m²', '4 mois', 'Paris 13e', [ new ProjectImage(project5, '') ]),
                new Project('Crèche Pelleport', ProjectCategory.EQUIPEMENTS, '540 m²', '8 mois', 'Paris 20e', [ new ProjectImage(project6, '') ]),
                new Project('ESV Digital', ProjectCategory.BUREAUX, '450 m²', '3 mois', 'Paris 17e', [ new ProjectImage(project7, '') ]),
                new Project('ESV Digital', ProjectCategory.BUREAUX, '450 m²', '3 mois', 'Paris 17e', [ new ProjectImage(project8, '') ]),
                new Project('Théâtre des Ambassadeurs', ProjectCategory.EQUIPEMENTS, '3800 m²', '8 mois', 'Paris 8e', [ new ProjectImage(project9, '') ]),
                new Project('Rue Saint Maur', ProjectCategory.EN_COURS, '40 m²', '6 mois', 'Paris 11e', [ new ProjectImage(project10, '') ]),
            ]
        );
    }

}