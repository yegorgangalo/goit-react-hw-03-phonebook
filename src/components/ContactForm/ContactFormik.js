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

    render() {
        return <Formik
          initialValues={{
            id: uuidv4(),
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
          onSubmit={(values, { setSubmitting }) => {
              const { name, number } = values;
              if(this.props.contacts.some(contact => contact.name===name || contact.number===number) ){
                alert(`Contact with such ${name} or ${number} is already in Phonebook`);
                setSubmitting(false);
                return;
              }

              this.props.formSubmitHandler(values);
              setSubmitting(false);
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
                <label>
                  <Field type="radio"  className={s.inputBox} name="experience" value="junior" />
                    junior
                </label>
                <label>
                  <Field type="radio"  className={s.inputBox} name="experience" value="middle" />
                    middle
                </label>
                <label>
                  <Field type="radio"  className={s.inputBox} name="experience" value="senior" />
                    senior
                </label>
            </div>
            <div role="group" aria-labelledby="checkbox-group" className={`${s.labelBlock} ${s.groupBlock}`}>
              <h3 className={s.title}>Your Skills</h3>
              <label>
                <Field type="checkbox"  className={s.inputBox} name="skills" value="HTML" />
                HTML
              </label>
              <label>
                <Field type="checkbox"  className={s.inputBox} name="skills" value="CSS" />
                CSS
              </label>
              <label>
                <Field type="checkbox"  className={s.inputBox} name="skills" value="JS" />
                JS
              </label>
              <label>
                <Field type="checkbox"  className={s.inputBox} name="skills" value="SCSS" />
                SCSS
              </label>
              <label>
                <Field type="checkbox"  className={s.inputBox} name="skills" value="Git" />
                Git
              </label>
              <label>
                <Field type="checkbox"  className={s.inputBox} name="skills" value="React" />
                React
              </label>
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