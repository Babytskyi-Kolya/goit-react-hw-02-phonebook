import React from 'react';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {FormStyle, FieldStyle, Label, Error, Button} from './form.Styled';


const SignupSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be min 3 characters')
      .required('Required'),
      number: Yup.number().positive()
      .min(9, 'Must be min 20 characters')
      .required('Required'),
  });

export const FormContact = ({ onAdd }) => {

    return (
        <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        onAdd({...values, id: nanoid()});
        actions.resetForm();
      }}
    >
      <FormStyle>
        <Label>Name
        <FieldStyle id="firstName" name="name" type="text" placeholder="Enter your Name" />
        <Error name="name" component="p"/>
        </Label>
        

        <Label>Last Name
        <FieldStyle id="lastName" name="number" type="tel" placeholder="Your phone Number" />
        <Error name="number" component="p"/>
        </Label>
        
        <Button type="submit">Add Contact</Button>
      </FormStyle>
    </Formik>
    )


 }