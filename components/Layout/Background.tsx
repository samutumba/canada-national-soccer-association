import { useRecoilValue } from "recoil"
import { bgState } from "../../atoms"

export const BackgroundScreen = ({ children }: {
 children:React.ReactNode
}) => {
 const background = useRecoilValue(bgState)
 return (<div className={`h-full min-h-screen object-center w-screen ${background.image}`}>
  {children}
 </div>)
}