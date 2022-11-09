import { useState } from 'react';
import axios from 'axios';
import FormInput from './formInput';
import styles from './styles.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Contact = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    birthday: '',
    mobile: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'https://xenonstack-backend.herokuapp.com/api/contacts';
      const { data: res } = await axios.post(url, data);
      e.target.reset();
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
      required: false,
    },
    {
      id: 4,
      name: 'mobile',
      type: 'number',
      placeholder: 'Phone Number',
      errorMessage: 'It should be a valid phone number!',
      label: 'Phone Number',
      required: false,
    },
    {
      id: 5,
      name: 'message',
      type: 'text',
      placeholder: 'Message',
      label: 'Message',
      required: false,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className={styles.contact_container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.h1}>Contact Us</h1>
          {inputs.map((input) => (
            <FormInput
              name={input.name}
              placeholder={input.placeholder}
              type={input.type}
              required={input.required}
              key={input.id}
              value={data[input.name]}
              onChange={onChange}
            />
          ))}

          {error && <div className={styles.error_msg}>{error}</div>}

          <button type='submit' className={styles.button}>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
