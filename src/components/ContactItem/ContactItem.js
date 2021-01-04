import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Context from '../Context';
import s from './ContactItem.module.css';

class ContactItem extends Component {

    render() {
        const { id, name, number, experience, skills } = this.props;
        return (
            <Context.Consumer>
                {({deleteContact}) => {
                    return (<li className={s.item} >
                      <span>{name}:</span>
                      <span>{number},</span>
                      <span>{experience},</span>
                      <span>skills: {skills.join(', ')}</span>
                      <button type="button" onClick={()=> deleteContact(id)}>Delete</button>
                    </li>)
                }}
            </Context.Consumer>
        )
    }
}

export default ContactItem;