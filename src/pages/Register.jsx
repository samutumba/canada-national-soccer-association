import { Label, TextInput, Checkbox, Button } from "flowbite-react"
import React from "react"

export const RegisterPage = () => {
 return (<div className="w-full h-full min-h-screen flex justify-center items-center">
  <form className="flex flex-col gap-4">
   <caption>Register</caption>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Email"
      />
    </div>
    <TextInput
      id="email1"
      type="email"
      placeholder="name@dcmail.ca"
      required={true}
    />
   </div>
     <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="School"
      />
    </div>
    <TextInput
      id="email1"
      type="text"
      placeholder="Durham College"
      required={true}
    />
   </div>
     <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Age"
      />
    </div>
    <TextInput
      id="email1"
      type="number"
      placeholder="18"
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      id="password2"
      type="password"
      required={true}
    />
     </div>
      <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Confirm password"
      />
    </div>
    <TextInput
      id="password2"
      type="password"
      required={true}
    />
  </div>
  <Button type="submit">
    Submit
  </Button>
</form>
 </div>)
} 