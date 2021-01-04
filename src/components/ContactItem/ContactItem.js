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
                    return (<>
                      <span className={s.point}>{name}:</span>
                      <span className={s.point}>{number},</span>
                      <span className={s.point}>{experience},</span>
                      <span className={s.point}>skills: {skills.join(', ')}</span>
                      <button type="button" className={s.button} onClick={()=> deleteContact(id)}>Delete</button>
                    </>)
                }}
            </Context.Consumer>
        )
    }
}

export default ContactItem;