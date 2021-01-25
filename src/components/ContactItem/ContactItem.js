import React from 'react';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icon/delete.svg';
import s from './ContactItem.module.css';

function ContactItem ({ id, name, number, experience, skills, deleteContact }) {
    return (
        <>
            <span className={s.point}>{name}:</span>
            <span className={s.point}>{number},</span>
            <span className={s.point}>{experience},</span>
            <span className={s.point}>skills: {skills && skills.join(', ')}</span>
            <IconButton onClick={()=> deleteContact(id)} aria-label="Delete Contact" classNames={s.positionButton}>
                <DeleteIcon width="20" height="20" />
            </IconButton>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
  deleteContact: value => dispatch(contactsActions.deleteContact(value)),
});

export default connect(null, mapDispatchToProps)(ContactItem);