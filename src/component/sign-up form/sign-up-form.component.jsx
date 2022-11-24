
import { useContext, useState } from "react";

import FormInput from "../form-input/form-input.component"

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
import { UserContext } from "../../context/user.context";

import {FormContainer} from './sign-up-form.styles'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const {setCurrentUser } = useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    //match password
    if (password !== confirmPassword) {
        return alert('password doesnot match')
    }
    try {
        const { user } = await createAuthUserWithEmailAndPassword(email, password)
        setCurrentUser(user)
        await createUserDocumentFromAuth(user, {displayName})
        resetFormFields()
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('User already exist')
        } else {
            alert('error creating user with email and password')
        }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };


  return (
    <FormContainer>
      <h2>I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit" >Sign Up</Button>
      </form>
    </FormContainer>
  );
};

export default SignUpForm;
