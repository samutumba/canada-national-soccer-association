import { Drawer } from "@mui/material"
import { useState } from "react"
import { Icon } from '@iconify/react';
import { Game, Location } from "../../../prisma/generated/prisma-client-js";
import { LocationCategory } from "../../../prisma/generated/prisma-client-js/index"
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup'
import { toast } from "react-hot-toast";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { loadingState } from "../../../atoms";
import { useForm } from "react-hook-form";
import Select from 'react-select';
import { faker } from '@faker-js/faker/locale/en_CA';
import { getCookie } from 'cookies-next';
import { useQueryClient } from '@tanstack/react-query'


const categories: LocationCategory[] = ["field", "stadium", "park", "other"]


const formSchema = Yup.object().shape({
attendance: Yup.number("Attendance should be numeric").min(1, "If you were there, they're must be more")
})

interface createOrUpdateLocationState {
 id?: string | undefined;
  attendance: number,
  locationId: string,
  competitionId: string,
}

enum Event {
  goal = 'goal',
  assist = 'assist',
  yellow_card = 'yellow_card',
  red_card = 'red_card',
  substitution_off = 'substitution_off',
  substitution_on = 'substitution_on',
}

interface NewGameEvent {
  id?: string,
  minute: number,
  gameId?: string | null,
  playerId: string,
  type: Event,
}

export const GameForm = ({ game, children }: { game?: Game, children: React.ReactNode }) => {

 const queryClient = useQueryClient()
 const [open, setOpen] = useState(false)
  const setLoading = useSetRecoilState(loadingState)
  
  const eventForm = useForm<NewGameEvent>({
    mode: "onTouched"
  })

 const { register, handleSubmit, setValue, formState: { errors } } = useForm<createOrUpdateLocationState>({
  mode: "onTouched",
  resolver: yupResolver(formSchema),
  defaultValues: {
    id: game?.id,
    attendance: game?.attendance,
    locationId: game?.locationId,
    competitionId: game?.competitionId
  }
 });

 const onSubmit = (data: createOrUpdateLocationState) => {
  setLoading(true)
  if (location)
  {
   axios.patch('/api/data/location', data, {
    headers: {
     authorization: getCookie('auth')
    }
   }).then((res) => {
    toast.success(res.data.message);
    queryClient.invalidateQueries(['locations']);
    setOpen(false)
    setLoading(false)
   }).catch(err => {
    setOpen(false)
    toast.error(err.data.message)
    setLoading(false)
   })
  } else
  {
   axios.post('/api/data/game', data, {
    headers: {
     authorization: getCookie('auth')
    }
   }).then((res) => {
    toast.success(res.data.message)
    queryClient.invalidateQueries(['locations']);
    setOpen(false)
    setLoading(false)
   }).catch(err => {
    setOpen(false)
    toast.error(err.data.message)
    setLoading(false)
   })
  }
 }

 return (<>
  <button onClick={() => setOpen(true)}>{children}</button>

  <Drawer
   anchor={'right'}
   open={open}
   onClose={() => setOpen(false)}
   variant="temporary"
     PaperProps={{
       sx: { width: 450 },
     }}
  >
   <div className="w-full px-4 py-4  h-full flex flex-col gap-4">
    <Icon icon="game-icons:soccer-field" className="text-2xl" />
    <h1>{location ? "Update" : "Create "} Location</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">

     <label>Name</label>
     <input className={errors.name ? "input-error" : "input-okay"} {...register('name')} />
     {errors.name && <span className="error">{errors.name.message}</span>}

     <label>Category</label>
     <Select
      options={categories.flatMap(c => { return { label: c, value: c } })}
      className="capitalize"
      defaultValue={categories.flatMap(c => { return { label: c, value: c } }).at(0)}
      onChange={(value, a) => value?.value && setValue('category', value.value)} />
     {errors.category && <span className="error">{errors.category.message}</span>}


     <label>Street Address</label>
     <input className={errors.streetAddress ? "input-error" : "input-okay"} {...register('streetAddress')} />
     {errors.streetAddress && <span className="error">{errors.streetAddress.message}</span>}

     <label>City</label>
     <input className={errors.city ? "input-error" : "input-okay"} {...register('city')} />
     {errors.city && <span className="error">{errors.city.message}</span>}

     <label>Province</label>
     <input className={errors.province ? "input-error" : "input-okay"} {...register('province')} />
     {errors.province && <span className="error">{errors.province.message}</span>}

     <label>Country</label>
     <input className={errors.country ? "input-error" : "input-okay uppercase"} {...register('country')} disabled />

     <label>Postal Code</label>
     <input className={errors.postalCode ? "input-error" : "input-okay"} {...register('postalCode')} />
     {errors.postalCode && <span className="error">{errors.postalCode.message}</span>}


     <button className="btn-main" type="submit">
      {location ? "Update" : "Create"}
     </button>
     <button className="btn-secondary" type="reset" onClick={() => setOpen(false)}>
      CAncel
     </button>


    </form>
   </div>
  </Drawer>


 </>)
}