import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';

const ContactList = ({contacts}) => (
    <ul>
      {contacts.map(({ id, name, number, experience, skills }) =>
        <li className={s.item} key={id}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            experience={experience}
            skills={skills}
          />
        </li>
        )}
    </ul>
)

ContactList.propTypes = {
      contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
          experience: PropTypes.string.isRequired,
          skills: PropTypes.arrayOf(PropTypes.string.isRequired),
      })),
}

const toFilterContacts = (contactsArray, filter) =>
     contactsArray.filter(contact =>
           Object.values(contact)
            .some(val => val.toString().toLowerCase().includes(filter)))

const mapStateToProps = ({contacts:{items, filter}}) => ({
  contacts: toFilterContacts(items, filter) ,
})

const mapDispatchToProps = (dispatch) => ({
  changeFilter: ({target:{value}}) => dispatch(contactsActions.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);