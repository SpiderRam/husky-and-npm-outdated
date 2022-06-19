import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';

export default function DatePickerComponent() {
    const [value, setValue] = useState<Date | null>(
        new Date('1999-03-11T21:11:54')
    );

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label='Choose a date'
                value={value}
                mask='____-__-__'
                inputFormat='yyyy-MM-dd'
                onChange={(newValue) => {
                    setValue(newValue)
                }}
                renderInput={({ inputProps, ...restParams }) => (
                    <TextField
                        {...restParams}
                        inputProps={{
                            ...inputProps
                        }}
                    />
                )}
            />
        </LocalizationProvider>
    );
}