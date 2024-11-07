import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div className='sai'> 
      <h2>Contact Us</h2>
    <table>
        <tbody>
            <tr>
                <td>Name:</td>
                <td><input type="text" name="name" /></td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><input type="email" name="email" /></td>
            </tr>
            <tr>
                <td>Phone Number:</td>
                <td><input type="tel" name="phone" /></td>
            </tr>
            <tr>
                <td>Description:</td>
                <td><textarea name="description"></textarea></td>
            </tr>
        </tbody>
    </table>
      <p>If you have any questions, feel free to reach out to us!</p>
    </div>
  );
};

export default Contact;
