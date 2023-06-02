import PropTypes from 'prop-types';
import s from './Section.module.css';

export const Section = ({title, children})=>{
    return(
        <div className={s.section}>
            <h2 className={s.sectionTitle}>{title}</h2>
            {children}
        </div>
    )
}

Section.propTypes ={
    title: PropTypes.string.isRequired,

}