import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { ReactNode, useState } from 'react'

export interface actionsType {
 icon: ReactNode,
 title: string,
 onClick?: () => void,

}

export const ActionSpeedDial = ({ actions }: { actions: actionsType[] }) => {
 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 return(<>
  <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 3 }}>
   <SpeedDial
    ariaLabel="Speed Dail"
    sx={{ position: 'absolute', bottom: 16, right: 16 }}
    icon={<SpeedDialIcon />}
    onClose={handleClose}
    onOpen={handleOpen}
    open={open}
   >
    {actions.map((action) => (
     <SpeedDialAction
      key={action.title}
      icon={action.icon}
      tooltipTitle={action.title}
      tooltipOpen
      onClick={action.onClick}
     />
    ))} 
   </SpeedDial>
  </Box>
 </>)
}