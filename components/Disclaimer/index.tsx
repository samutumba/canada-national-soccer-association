import { Icon } from "@iconify/react"
import { Dialog } from "@mui/material"
import { getCookie, setCookie } from "cookies-next"
import { useState, useEffect } from "react"

export const Disclaimer = () => {
 const [open, setOpen] = useState(false)

 useEffect(() => {
  const timeout = setTimeout(() => {
   const agreed = getCookie('disclaimer-seen')
   if (!agreed)
   {
    setOpen(true)
   }
  }, 1000)
 }, [])


 return (<>
  <Dialog open={open}>
   <div className="w-full max-w-md flex flex-col gap-2 p-8 items-center justify-center text-center font-paragraph">
    <h1 className="w-full text-left">Disclaimer</h1>
    <Icon icon="icon-park-outline:caution" className="text-5xl text-red-600" />
    <h3>This is a college assignment</h3>
    <p>We own no copyright to the images used and can be removed on request</p>
    <div className="m-4 flex flex-col justify-evenly">
     <button onClick={() => {
      setCookie('disclaimer-seen', "true")
      setOpen(false)
     }} className="w-1/3 btn-main" >
      Acknowlegded
     </button>
     <button onClick={() => {
      setOpen(false)
     }} className="w-1/3 btn-error" >
      Cancel
     </button>
    </div>
    </div>
  </Dialog>
 </>)
}