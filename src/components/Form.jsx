import React from 'react';
import '../styles/Form.scss'
const Form = () => {
    return (
        <div className='form-container'>
            <form action="#" method="POST">
                <label for="nombre">Name:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label for="email">Email:</label>
                <input type="text" id="email" name="email" required />

                <label for="mensaje">Message:</label>
                <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form;
