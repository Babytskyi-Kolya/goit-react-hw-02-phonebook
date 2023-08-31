import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';

export const FormStyle = styled(Form)`
display: flex;
flex-direction: column;
padding-left: 50px;
padding-right: 50px;
`
export const Label = styled.label`
padding: 10px;

`

export const FieldStyle = styled(Field)`
    margin-bottom: 20px;
`

export const Error = styled(ErrorMessage)`
color: red;
margin: 0;
`

export const Button = styled.button`
width: 40%;
margin: 0 auto;
`