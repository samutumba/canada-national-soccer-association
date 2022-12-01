import { useState, useMemo } from "react"
import { useForm } from "react-hook-form"
import { Prisma } from "../../../prisma/generated/prisma-client-js"
import { Dialog } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useInstitutions, usePlayers } from "../../../hooks";
// import { SquadCreateInputObjectSchema } from "../../../validators/schemas/internals";
import { TextInput, SelectInput } from "../Input";
import { MuiColorInput } from "mui-color-input";

// const SquadCreateInputObjectSchema = Yup.object({
//   id: Yup.string(), name: Yup.string().required(), players:  homeColor: Yup.mixed().oneOfSchemas([Yup.string()]), awayColor: Yup.mixed().oneOfSchemas([Yup.string()]), Team: TeamCreateNestedManyWithoutSquadInputObjectSchema
// });

export const SquadCreate = ({ children }: {children: React.ReactNode}) => {
 const [open, setOpen] = useState(false)
 const institutions = useInstitutions();
 const players = usePlayers();
 const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<Prisma.SquadCreateInput>(
  {
   mode: "onBlur",
   //resolver: yupResolver(SquadCreateInputObjectSchema),
  }
 )

 const iOptions = useMemo(() => {
  return institutions.data ?  institutions.data?.flatMap((i) => {
   return {
    value: i.id,
    label: i.name
   }
  }) : []

 }, [institutions])

 const pOptions = useMemo(() => {
  return players.data ? players.data?.flatMap((i) => {
   return {
    value: i.id,
    label: i.name
   }
  }) : []

 }, [players])

 const onSubmit = async (data: Prisma.SquadCreateInput ) => {

 }

 const selectedPlayers = watch("players.connect.id")

 return (<>
  <button onClick={() => setOpen(!open)}>
   {children}
  </button>
  
  <Dialog
   fullWidth={true}
   maxWidth={'md'}
   open={open}
   onClose={() => setOpen(!open)}
  >
   <div className="flex  justify-center w-full">

    <form onSubmit={handleSubmit(onSubmit)} className="flex mt-3 flex-col gap-2 w-full max-w-lg justify-center">
     <h1>Create Squad</h1>
     <TextInput name="Name" register={register("name")} error={errors.name} />
     <SelectInput name="Institutions" options={iOptions}
      callback={(v) => {
       setValue("institution.connect.id", v)
      }}
      error={errors?.institution?.connect?.id}
     />
     <label>Players</label>
     <ul>
      {watch('players.connect.id')?.map((p) => {
      return players.data.forEach(pl => {
       if (p == pl.id) {
        return(<>
        <li key={pl.id}>{pl.name}</li>
        </>)
       }
      }) 
     })}
     </ul>
     {watch("players.connect.id")?.toString()}
     
     <SelectInput name="" options={pOptions}
      callback={(v) => {
       watch("players.connect.id") ?
        setValue("players.connect.id", [watch("players.connect.id"), v])
        : setValue("players.connect.id", [v])
      }}
      error={errors?.players?.connect?.id}
     />
     <label>Home Color</label>
     <MuiColorInput value={watch("homeColor")} format="hex" onChange={(c) =>  {c &&setValue("homeColor", c)}} />

     <label>Away Color</label>
     <MuiColorInput value={watch("awayColor")} format="hex" onChange={(c) => { c && setValue("awayColor", c) }} />
     
     <button className="btn-main">
       CREATE
     </button>
    </form>

   </div>
  </Dialog>
 
 </>)
}