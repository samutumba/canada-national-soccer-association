import { UseFormRegister, FieldError, FieldValues, UseFormRegisterReturn } from "react-hook-form"
import Select, { ActionMeta, SingleValue } from "react-select"
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
//import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import React from "react"
const NonSSRWrapper = (props: {children: React.ReactNode}) => (
  <React.Fragment>{props.children}</React.Fragment>
)
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false
})


const AddressAutofill = dynamic(async () => 
  (await import('@mapbox/search-js-react')).AddressAutofill, {
  ssr: false,
})

export const TextInput = ({ name, register, error, type }: {
  type?: 'password' | 'text' | 'number',
 name: string,
  register: UseFormRegisterReturn<any>,
 error?: FieldError | undefined,
}) => {
 return (<>
  <label>{name}</label>
  <input type={type ? type : "text"} className={error ? 'input-error' : 'input-okay'} {...register} />
  <ErrorMessage data={error} />
 </>) 
}

export const BasicInput = ({ name, value, callback, error, type }: {
  type?: 'password' | 'text' | 'number',
  name: string,
  value: string,
  callback: (arg0: string) => void
  error?: FieldError | undefined,
}) => {
  return (<>
    <label>{name}</label>
    <input type={type ? type : "text"} className={error ? 'input-error' : 'input-okay'}
      value={value}
      onChange={(e) => callback(e.currentTarget.value || "")}
    />
    <ErrorMessage data={error} />
  </>)
}

export const AddressInput = ({ name, value, callback, error }: {
  name: string,
  value: string,
  callback: (arg0: string) => void
  error?: FieldError | undefined,
}) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined")
    {
      setOpen(true)
    }
  
    () => {
      setOpen(false)
    }
  }, [window])
  
  const apiKey = process.env.MAPBOX_API || ""

  if (open)
  {
     return (<>
       <label>{name}</label>
       <NonSSRWrapper>
         <AddressAutofill accessToken={apiKey}>
      <input type="text" autoComplete="address-line1" className={error ? 'input-error' : 'input-okay'}
      value={value}
      onChange={(e) => callback(e.currentTarget.value || "")}
    />
    </AddressAutofill>
       </NonSSRWrapper>
    
    <ErrorMessage data={error} />
  </>)
  }
 
  return <></>
}


export const MobileInput = ({ name, value, error, callback }: {
  name: string,
  value: string,
  error?: FieldError | undefined,
  callback: (arg0: string) => void
}) => {
  return(<>
    <label>{name}</label>
    <PhoneInput
      international
      containerClass={error ? 'input-error' : 'input-okay'}
      defaultCountry="CA"
      value={value}
      inputStyle={{
        border: '0px',
        ring: 'none'
      }}
      onChange={(p) => p && callback(p.toString())}
    />
    <ErrorMessage data={error} />
  </>)
}
interface opt {
 label: string,
 value: string
}

export const SelectInput = ({ name, options, defaultValue, error, callback }: {
 name: string,
 defaultValue?: opt,
 options: opt[],
 error?: FieldError | undefined,
 callback: (arg0: string) => void
}) => {
 return (<>
  <label>{name}</label>
  <Select
   options={options}
   defaultValue={ defaultValue || options[0]}
   onChange={(newValue: SingleValue<opt>, actionMeta: ActionMeta<opt>) => {
    newValue?.value &&
    callback(newValue?.value)
   }}
   theme={(theme) => ({
    ...theme,
    borderRadius: 10,
    colors: {
     ...theme.colors,
     primary25: '#E8685E',
     primary: 'black',
    },
   })}
     styles={{
       control: base => ({
         ...base,
         fontFamily: "Gantari"
         
       }),
       menu: base => ({
         ...base,
         fontFamily: "Gantari"
         
       })
     }}
  />
  <ErrorMessage data={error} />
 </>)
}


export const DateInput = ({ name, value, error, callback }: {
 name: string,
 value: string | Date,
 error?: FieldError | undefined,
 callback: (arg0: Date) => void
}) => {
 return (<>
  <label>{name}</label>
  <LocalizationProvider dateAdapter={AdapterMoment}>
   <DatePicker
    label={name}
    value={value}
    onChange={(newValue) => {
     newValue &&
      typeof newValue !== 'string' &&
     callback(newValue);
    }}
    renderInput={({ inputRef, inputProps, InputProps }) =>
     <>
      <input className={error ? 'input-error' : 'input-okay'} ref={inputRef} {...inputProps} />
      {InputProps?.endAdornment}
     </>
     }
   />
  </LocalizationProvider>
  <ErrorMessage data={error} />
  </>)
}


export const ErrorMessage = ({ data }: { data?: FieldError | undefined }) => {
 if (data) {
  return <span className="error">{data.message}</span>
 }
 return <></>
}