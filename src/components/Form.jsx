import React from 'react';
import '../styles/Form.scss'
const Form = () => {
    return (
        <div className='form-container'>
            <form action="#" method="POST">
                <label for="name" className='bold uppercase'>Name</label>
                <input type="text" id="name" name="name" required />

                <label for="email" className='bold uppercase'>Email</label>
                <input type="text" id="email" name="email" required />

                <label for="message" className='bold uppercase'>Message</label>
                <textarea id="message" name="mensaje" rows="3" required></textarea>

                <input type="submit" value="Submit" className='bold uppercase'/>
            </form>
        </div>
    )
}

export default Form;
