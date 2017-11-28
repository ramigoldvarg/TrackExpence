import React from 'react';
import ExpeseList from '../../containers/expenselist.js';
import InputBar from '../../containers/inputbar.js';

const InputForm = () => {
    return (
        <div>
            <InputBar />
            <ExpeseList />
        </div>);
};

export default InputForm;