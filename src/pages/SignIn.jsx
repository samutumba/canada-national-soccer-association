import { Label, TextInput, Checkbox, Button } from "flowbite-react"

export const SignInPage = () => {
 return(<div className="w-full h-full min-h-screen flex justify-center items-center">
  <form className="flex flex-col gap-4">
   <caption>LOG IN</caption>
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
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      id="password1"
      type="password"
      required={true}
    />
   </div>
   <div className="flex items-center gap-2">
    <a href="/register">
     No account? Register
    </a>
   </div>
  <div className="flex items-center gap-2">
    <Checkbox id="remember" />
    <Label htmlFor="remember">
      Remember me
    </Label>
  </div>
  <Button type="submit">
    Submit
  </Button>
</form>
 </div>)
} 