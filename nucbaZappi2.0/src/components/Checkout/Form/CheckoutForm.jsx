import React from 'react';
import {
  checkoutInitialValues,
  checkoutValidationSchema,
} from '../../../formik';

import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';
import Loader from '../../UI/Loader/Loader';

import { CheckoutDatosStyled, Formik, Form } from './CheckoutFormStyles';

const CheckoutForm = ({ cartItems }) => {
  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={values => console.log(values)}
      >
        <Form>
          <Input
            name='name'
            htmlFor='nombre'
            type='text'
            id='nombre'
            placeholder='Tu nombre'
          >
            Nombre
          </Input>
          <Input
            name='cellphone'
            htmlFor='celular'
            type='text'
            id='celular'
            placeholder='Tu celular'
          >
            Celular
          </Input>
          <Input
            name='location'
            htmlFor='localidad'
            type='text'
            id='localidad'
            placeholder='Tu localidad'
          >
            Localidad
          </Input>
          <Input
            name='address'
            htmlFor='direccion'
            type='text'
            id='dirección'
            placeholder='Tu dirección'
          >
            Dirección
          </Input>
          <div>
            <Submit disabled={!cartItems.length}>Iniciar Pedido</Submit>
          </div>
        </Form>
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
