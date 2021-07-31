import React from 'react';
import { ProjectCategory } from '../../../../model/Project';
import SectionTitle from '../../Page/SectionTitle';
import './ProjectFilter.scss';

interface IProjectFilterProps {
    category : ProjectCategory;
    active : boolean;
    onClickCategory : (category : ProjectCategory) => void;
}

const ProjectFilter : React.FC<IProjectFilterProps> = props => {
    const onClick = () => {
        props.onClickCategory(props.category);
    }

    return (
        <div className={`projet-filtre`} onClick={onClick}>
            <SectionTitle title={props.category} active={props.active} />
        </div>
    );
}

export default ProjectFilter;