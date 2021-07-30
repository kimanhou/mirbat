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
import projectTemplate1 from '../images/projects/04/project-template-1.jpg';
import projectTemplate2 from '../images/projects/04/project-template-2.jpg';
import projectTemplate3 from '../images/projects/04/project-template-3.jpg';
import projectTemplate4 from '../images/projects/04/project-template-4.jpg';

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
    readonly date : string;
    readonly descriptionIntro : string;
    readonly description : string;
    readonly images : ProjectImage[];

    constructor(title : string, category : ProjectCategory, surface : string, duration : string, location : string, 
        date : string, descriptionIntro : string, description : string, images : ProjectImage[]) {
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
        const descriptionIntro = 'Aenean tellus odio, posuere at erat ut, rhoncus maximus turpis. In hendrerit pretium dui vel eleifend. Proin molestie massa in ipsum pretium volutpat sodales pellentesque nisl. In placerat ex vitae mauris hendrerit, in pellentesque leo accumsan.';
        const description = 'Morbi vitae dignissim diam. Morbi ac sollicitudin lacus, sed consequat ipsum. In vulputate, enim eu consectetur semper, libero tellus sodales mi, non placerat leo ante eu ipsum. Donec imperdiet eu sapien id interdum. Pellentesque euismod pulvinar lacus, id pulvinar elit gravida quis. Nulla semper tellus congue nulla semper faucibus. Aenean id nunc dolor. Donec consectetur dignissim orci, at fermentum neque facilisis eget. Aenean vitae eleifend velit. Nam hendrerit justo hendrerit metus accumsan, a viverra nulla molestie. Praesent vel malesuada felis. Nullam ac diam ex. In ac volutpat lacus, ac porttitor felis. Duis eget tortor at libero posuere mattis. Donec pulvinar fringilla ultricies. Integer euismod nisi velit, sit amet euismod diam suscipit et. Phasellus id tellus turpis. Ut at dolor at eros maximus blandit. Quisque rhoncus lorem et justo euismod euismod. Phasellus blandit tempus porta. Duis vitae sagittis massa. Proin volutpat metus non elit elementum, at viverra nunc efficitur. Nulla et tempus arcu, ac vestibulum massa. Nunc lacinia, libero quis tincidunt ullamcorper, arcu erat scelerisque elit, nec lacinia lectus massa sit amet nisi.';
        return (
            [
                new Project('Place des Vosges', ProjectCategory.LOGEMENTS, '95 m²', '6 mois', 'Paris 4e', '2021', descriptionIntro, description, [ new ProjectImage(project1, '') ]),
                new Project('Place des Vosges', ProjectCategory.LOGEMENTS, '95 m²', '6 mois', 'Paris 4e', '2021', descriptionIntro, description, [ new ProjectImage(project2, '') ]),
                new Project('Rue Pernelle', ProjectCategory.LOGEMENTS, '90 m²', '9 mois', 'Paris 1er', '2020', descriptionIntro, description, [ new ProjectImage(project3, '') ]),
                new Project('Crèche Faure', ProjectCategory.EQUIPEMENTS, '180 m²', '4 mois', 'Paris 15e', '2020', descriptionIntro, description, [ new ProjectImage(projectTemplate1, ''), new ProjectImage(projectTemplate2, ''), new ProjectImage(projectTemplate3, ''), new ProjectImage(projectTemplate4, '') ]),
                new Project('FFBB', ProjectCategory.EQUIPEMENTS, '160 m²', '4 mois', 'Paris 13e','2020', descriptionIntro, description, [ new ProjectImage(project5, '') ]),
                new Project('Crèche Pelleport', ProjectCategory.EQUIPEMENTS, '540 m²', '8 mois', 'Paris 20e','2020', descriptionIntro, description, [ new ProjectImage(project6, '') ]),
                new Project('ESV Digital', ProjectCategory.BUREAUX, '450 m²', '3 mois', 'Paris 17e','2019', descriptionIntro, description, [ new ProjectImage(project7, '') ]),
                new Project('ESV Digital', ProjectCategory.BUREAUX, '450 m²', '3 mois', 'Paris 17e','2019', descriptionIntro, description, [ new ProjectImage(project8, '') ]),
                new Project('Théâtre des Ambassadeurs', ProjectCategory.EQUIPEMENTS, '3800 m²', '8 mois', 'Paris 8e', '2018', descriptionIntro, description, [ new ProjectImage(project9, '') ]),
                new Project('Rue Saint Maur', ProjectCategory.EN_COURS, '40 m²', '6 mois', 'Paris 11e','2019', descriptionIntro, description, [ new ProjectImage(project10, '') ]),
            ]
        );
    }

}