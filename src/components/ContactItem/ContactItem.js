import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icon/delete.svg';
import Context from '../Context';
import s from './ContactItem.module.css';

class ContactItem extends PureComponent {

    render() {
        const { id, name, number, experience, skills } = this.props;
        return (
            <Context.Consumer>
                {({deleteContact}) => {
                    return (<>
                      <span className={s.point}>{name}:</span>
                      <span className={s.point}>{number},</span>
                      <span className={s.point}>{experience},</span>
                      <span className={s.point}>skills: {skills.join(', ')}</span>
                      {/* <button type="button" className={s.button} onClick={()=> deleteContact(id)}>Delete</button> */}
                      <IconButton onClick={()=> deleteContact(id)} aria-label="Delete Contact" classNames={s.positionButton}>
                          <DeleteIcon width="20" height="20" />
                      </IconButton>
                    </>)
                }}
            </Context.Consumer>
        )
    }
}

export default ContactItem;