import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../UI/Input/Input";
import Submit from "../UI/Submit/Submit";
import TextAreaInput from "../UI/TextAreaInput/TextAreaInput";

import { Form, FormBox, FormSubtitle, FormTitle } from "./FormTurnStyles";

//Validación del celular que debe contener mínimo 10 números
const phoneRegex = /\d{10}$/;

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Campo requerido"), 
  surname: Yup.string().trim().required("Campo requerido"), 
  date: Yup.date().required("Campo requerido"), 
  age: Yup.number()
    .integer("Debe ser un entero")
    .moreThan(16, "Sos menor")
    .lessThan(95, "Descansá del Trabajo")
    .required("Campo requerido"), 
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Campo requerido"), 
  cellphone: Yup.string()
    .matches(phoneRegex, "Número de celular inválido"), 
  comments: Yup.string().max(255, "Máximo de 255 caracteres").notRequired()
});

const FormTurn = () => {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name:"",
      surname:"", 
      date:"", 
      age:"", 
      email:"", 
      cellphone:"", 
      comments:"",
    }, 
    validationSchema, 
    onSubmit: (values, { resetForm }) => {
      console.log(({ values }));
      resetForm();
    },
  });

  return (
    <FormBox>
      <FormTitle>¡Carga de turnos!</FormTitle>
      <FormSubtitle>
        A continuación debés dejar los datos del turno reservado en el{" "}
        <b>NucWorking</b>
      </FormSubtitle>
      <Form>
        <Input 
        name="name"
        label="Nombre" 
        type="text"
        isError={touched.name && errors.name}
        {...getFieldProps("name")}
        >
        </Input>
        <Input 
        name="surname"
        label="Apellido" 
        type="text"
        isError={touched.surname && errors.surname}
        {...getFieldProps("surname")}
        >
        </Input>
        <Input 
        label="Fecha" 
        type="date"
        name="date"
        isError={touched.date && errors.date}
        {...getFieldProps("date")}
        >
        </Input>
        <Input 
        name="age"
        label="Edad" 
        type="number"
        isError={touched.age && errors.age}
        {...getFieldProps("age")}
        >
        </Input>
        <Input 
        label="Hora" 
        type="time"
        >
        </Input>
        <Input
        name="email"
        label="Correo Electronico" 
        type="email"
        isError={touched.email && errors.email}
        {...getFieldProps("email")}
        >
        </Input>
        <Input 
        name="cellphone"
        label="Telefono" 
        type="tel"
        isError={touched.cellphone && errors.cellphone}
        {...getFieldProps("cellphone")}
        >
        </Input>
        <TextAreaInput 
        name="comments"
        label="¿Cómo escuchaste de nosotros?"
        isError={touched.comments && errors.comments}
        {...getFieldProps("comments")}
         />
        <Submit onSubmit={handleSubmit} />
      </Form>
    </FormBox>
  );
};

export default FormTurn;
