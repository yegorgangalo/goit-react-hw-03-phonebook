import React from 'react';
import { useDispatch } from 'react-redux';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import {deleteContact} from 'redux/contacts/contacts-operations';
import IconButton from 'components/IconButton';
import s from './ContactItem.module.css';

function ContactItem({ id, name, number, experience, skills, toggleModal }) {
    const dispatch = useDispatch();
    const deleteContactById = () => dispatch(deleteContact(id));
    const contactInfo = { id, name, number, experience, skills };
    return (
        <>
            <span className={s.point}>{name}:</span>
            <span className={s.point}>{number},</span>
            <span className={s.point}>{experience},</span>
            <span className={s.point}>skills: {skills && skills.join(', ')}</span>
            <span className={s.positionBtn}>
                <IconButton onClick={()=>toggleModal(contactInfo)} aria-label="Edit Contact" classNames={s.colorBtn}>
                    <FaRegEdit />
                </IconButton>
                <IconButton onClick={deleteContactById} aria-label="Delete Contact" classNames={s.colorBtn}>
                    <MdDelete />
                </IconButton>
            </span>
        </>
    )
}

export default ContactItem;

// const mapDispatchToProps = (dispatch) => ({
//   deleteContact: value => dispatch(contactsActions.deleteContact(value)),
// });

// export default connect(null, mapDispatchToProps)(ContactItem);