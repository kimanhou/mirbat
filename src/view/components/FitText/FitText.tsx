import React from 'react';
import { useFitText } from '../../hooks/UseFitText';

interface IFitTextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    debug ?: boolean;
    deps?: React.InputIdentityList;
}

const FitText : React.FC<IFitTextProps> = props => {
    const [fontSize, ref] = useFitText(props.deps, props.debug);
    let {style, ...otherProps} = props;
    style = Object.assign({
        fontSize
    }, style);
    return (
        <div style={style} ref={ref} {...otherProps}>
            {props.children}
        </div>
    )
}
export default FitText;