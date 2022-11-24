import { useState } from "react"
import { signInWithUserEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"

import FormInput from "../form-input/form-input.component"

import {FormContainer, ButtonsContainer} from './sign-in-form.styles'

const defaultFormFields = {
    email: '',
    password: ''
}


const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields


    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
        
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {user} = await signInWithUserEmailAndPassword(email, password)
            resetFormFields()
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password' :
                    alert('incorrect password for the email')
                    break;
                case 'auth/user-not-found' :    
                    alert('no user associated with that email');
                    break;
                default :
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    return (
        <FormContainer>
            <h2>Already have an account</h2>
            <span>Sign in using email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" required type="email" name="email" value={email} onChange={handleChange} />

                <FormInput label="Password" required type="password" name="password" value={password} onChange={handleChange} />
                <ButtonsContainer>
                    <Button type="submit" >Sign In</Button>
                    <Button type ='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </ButtonsContainer>
            </form>
        </FormContainer>
    )
}

export default SignInForm;