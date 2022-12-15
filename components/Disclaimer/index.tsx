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
   <div className="w-full max-w-lg flex flex-col gap-2 p-8 items-center justify-center text-center font-paragraph">
    <h1 className="w-full text-left">Disclaimer</h1>
    <Icon icon="icon-park-outline:caution" className="text-7xl text-red-600 mt-4" />
    <h2>This is a college assignment</h2>
       <p>We own no copyright to the images used and can be removed on request</p>
       <p>The data used in this project are not accurate and serve the purpose of proving the viablilty of the overall product</p>
    <div className="m-4 flex flex-row w-full justify-end">
     <button onClick={() => {
      setCookie('disclaimer-seen', "true")
      setOpen(false)
     }} className="w-1/2 btn-main" >
      Agree
     </button>
    </div>
    </div>
  </Dialog>
 </>)
}