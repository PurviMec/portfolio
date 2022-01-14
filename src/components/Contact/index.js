import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { validateEmail } from "../../utils/helpers";

function ContactForm () {
    const [ formState, setFormState ] = useState({ name: "", email:"", message:"" });
    const {name, email, message} = formState;
    const [ error, setError ] = useState('');

    function handleChange(e) {
        if (e.target.name === email) {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if(!isValid) {
                setError('Your email address is invalid!');
            }else{
                setError('');
            }
        }else{
            if (!e.target.value.length) {
                setError(`${e.target.name} is required.`);
            }else{
                setError('');
            }
        }

        if (error){
            setFormState({...formState, [e.target.name]: e.target.value });
        }

        console.log('error', error);
    }

    function handleSubmit (e) {
        e.preventDefault();
        console.log(formState);
    }
    
    return(
        <section>
            <h1>Contact Me</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Control type="text" name="name" placeholder="Name" defaultValue={name} onChange={handleChange}/>
                <br />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="name@example.com"  defaultValue={email} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={3} defaultValue={message} onChange={handleChange}/>
                </Form.Group>
                {error && (
                    <div>
                        <p className="error">{error}</p>
                    </div>
                )}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </section>
    )
}

export default ContactForm;