import React, { Component } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { v4 as uuidv4 } from 'uuid';
import ContactFormik from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
    static defaultProps = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', experience: 'junior', skills: ['HTML', 'CSS']},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12', experience: 'middle', skills: ['HTML', 'CSS', 'JS']},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79', experience: 'junior', skills: ['HTML', 'SCSS']},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26', experience: 'senior', skills: ['HTML', 'CSS', 'JS', 'React']},
        {id: 'id-5', name: 'Ann Hits', number: '227-91-46', experience: 'junior', skills: ['JS']},
        {id: 'id-6', name: 'Ed Clirence', number: '217-01-46', experience: 'middle', skills: ['HTML', 'CSS', 'JS']},
      ],
    }

    static propTypes = {
        //
    }

    state = {
      contacts: this.props.contacts,
      filter: '',
    }

    changeFilter = ({ target: {name, value} }) => {
      this.setState({
        [name]: value.toLowerCase(),
      });
    }

    formSubmitHandler = (newContact) => {
        this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, newContact]
        }
      })
    }

    deleteContact = (id) => {
      this.setState((prevState) => {
        const withoutDelContactArray = prevState.contacts.filter(contact => contact.id !==id)
        return {
          contacts: [...withoutDelContactArray]
        }
      })
    }

    render() {
      const { contacts, filter } = this.state;

      return (<>
        <h1 className="title">Phonebook</h1>
        {/* <ContactForm onSubmit={this.formSubmitHandler} contacts={contacts} /> */}
        <ContactFormik formSubmitHandler={this.formSubmitHandler} contacts={contacts}/>
        {/* <Formik
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
            number: Yup.number().positive().integer().required('Required'),
          })
          }
          onSubmit={(values, { setSubmitting }) => {
              this.formSubmitHandler(values);
              setSubmitting(false);
          }}
        >
       {({isSubmitting, values}) => (
         <Form>
           <label htmlFor="name">Name</label>
           <Field type="text" name="name" />
           <ErrorMessage name="name" component="div" />
           <label htmlFor="number">Number</label>
           <Field type="text" name="number" />
           <ErrorMessage name="number" component="div" />
           <div  role="group" aria-labelledby="radio-group">
                <h3>Your Level</h3>
                <label>
                  <Field type="radio" name="experience" value="junior" />
                    junior
                </label>
                <label>
                  <Field type="radio" name="experience" value="middle" />
                    middle
                </label>
                <label>
                  <Field type="radio" name="experience" value="senior" />
                    senior
                </label>
            </div>
            <div role="group" aria-labelledby="checkbox-group">
              <h3>Your Skills</h3>
              <label>
                <Field type="checkbox" name="skills" value="HTML" />
                HTML
              </label>
              <label>
                <Field type="checkbox" name="skills" value="CSS" />
                CSS
              </label>
              <label>
                <Field type="checkbox" name="skills" value="JS" />
                JS
              </label>
              <label>
                <Field type="checkbox" name="skills" value="SCSS" />
                SCSS
              </label>
              <label>
                <Field type="checkbox" name="skills" value="Git" />
                Git
              </label>
              <label>
                <Field type="checkbox" name="skills" value="React" />
                React
              </label>
            </div>
            <label>
                <Field type="checkbox" name="licence" id="licence" />
                Agree with Licence
            </label>

           <button type="submit" disabled={isSubmitting || values.experience==='' || !values.licence || values.name==='' || values.number==='' || values.skills.length===0}>Add Contact</button>
         </Form>
       )}
     </Formik> */}
        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={contacts} filter={filter} deleteContact={this.deleteContact} />
        </>
        )
    }
}

export default App;
