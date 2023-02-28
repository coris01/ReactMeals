import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.label} className={classes.label}>Amount</label>
            <input {...props.input} ref={ref} />
        </div>
    );
});

export default Input;