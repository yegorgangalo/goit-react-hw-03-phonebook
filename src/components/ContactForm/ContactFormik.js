import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactFormik extends Component {
    static propTypes = {
        formSubmitHandler: PropTypes.func.isRequired,
        contacts: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        })),
    }

    state = {
        expLevel: ['junior', 'middle', 'senior'],
        skills: ['HTML', 'CSS', 'JS', 'SCSS', 'Git', 'React']
    }

    render() {
        const { expLevel, skills } = this.state;
        return <Formik
          initialValues={{
            name: '',
            number:'',
            experience: '',
            licence: false,
            skills: [],
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Required'),
            number: Yup.number().max(1000000000000, 'Too Long!').positive().integer().required('Required'),
          })
          }
          onSubmit={(values, { setSubmitting, resetForm }) => {
              const { name, number } = values;
              if(this.props.contacts.some(contact => contact.name===name || contact.number===number) ){
                alert(`Contact with such ${name} or ${number} is already in Phonebook`);
                setSubmitting(false);
                return;
              }

              this.props.formSubmitHandler({...values, id: uuidv4()});
              setSubmitting(false);
              resetForm({
                name: '',
                number:'',
                experience: '',
                licence: false,
                skills: [],
              })
          }}
        >
       {({isSubmitting, values}) => (
         <Form className={s.contactForm}>
           <label htmlFor="name">Name </label>
           <Field className={s.labelBlock} type="text" name="name" />
           <ErrorMessage name="name" component="div" />
           <label htmlFor="number">Number </label>
           <Field className={s.labelBlock} type="text" name="number" />
           <ErrorMessage name="number" component="div" />
           <div  role="group" aria-labelledby="radio-group" className={`${s.labelBlock} ${s.groupBlock}`}>
                <h3 className={s.title}>Your Level</h3>
                {expLevel.map(exp =>
                    <label key={exp}>
                        <Field type="radio"  className={s.inputBox} name="experience" value={exp} />
                        {exp}
                    </label>
                )}
            </div>
            <div role="group" aria-labelledby="checkbox-group" className={`${s.labelBlock} ${s.groupBlock}`}>
              <h3 className={s.title}>Your Skills</h3>
              {skills.map(skill =>
                <label key={skill}>
                    <Field type="checkbox"  className={s.inputBox} name="skills" value={skill} />
                    {skill}
                </label>
              )}
            </div>
            <label className={s.labelBlock}>
                <Field type="checkbox"  className={s.inputBox} name="licence" id="licence" />
                All data is right
            </label>

           <button type="submit" className={s.button} disabled={isSubmitting || values.experience==='' || !values.licence || values.name==='' || values.number==='' || values.skills.length===0}>Add Contact</button>
         </Form>
       )}
     </Formik>
    }
}

export default ContactFormik;