import { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    label,
    errorMessage,
    onChange,
    id,
    name,
    type,
    placeholder,
    required,
  } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className='formInput'>
      <label>{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
