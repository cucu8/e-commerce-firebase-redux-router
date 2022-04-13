import React from 'react';

const FormInput = () => {
    return (
        <dic>
         <label>Display Name</label>
         <input
            value={displayName}
            name="displayName"
            type="text"
            required
            onChange={handleOnChange}
            />
         </d>
    );
};

export default FormInput;