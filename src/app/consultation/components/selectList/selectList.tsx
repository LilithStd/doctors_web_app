
import { useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default function SelectList(props: FieldValues) {
    const [selectedOption, setSelectedOption] = useState(null);
    console.log(selectedOption)
    return (
        <Select
            props
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
        />
    );
}