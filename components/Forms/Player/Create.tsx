import { Dialog } from "@mui/material";
import { useState } from "react";
import { Player, Postion } from "../../../prisma/generated/prisma-client-js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup'
import { toast } from "react-hot-toast";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import PhoneInput from 'react-phone-number-input/input'
import { loadingState } from "../../../atoms";
import { FieldError, useForm } from "react-hook-form";
import Select from 'react-select';
import { faker } from '@faker-js/faker/locale/en_CA';
import { PlayerCreateInputObjectSchema } from "../../../validators/schemas/internals";
import { create }  from '../../../interfaces'
import _ from "lodash";
import 'react-phone-number-input/style.css'


export const PlayerForm = ({ player, children }: { player?: Player, children: React.ReactNode}) => {
 const [open, setOpen] = useState(false)

 const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm <create.Player>({
  mode: "onTouched",
  resolver: yupResolver(PlayerCreateInputObjectSchema),
  defaultValues: {
   id: player?.id || faker.datatype.uuid(),
   name: player?.name || faker.name.findName(),
   dob: player?.dob || faker.date.between('1995-01-01T00:00:00.000Z', '2004-01-01T00:00:00.000Z') ,
   isDomestic: player?.isDomestic || true,
   photo: player?.photo || faker.image.avatar(),
   gender: player?.gender || faker.helpers.arrayElement(['male', 'female']), 
   position: Object.values(create.Postion).filter((p)=> {
    if (p.toString() == player?.position.toString()) {
     return p
    }
   }).at(0) || faker.helpers.arrayElement(Object.values(create.Postion)),
   heathRecordId: player?.heathRecordId,
   phone: player?.phone || faker.phone.number(),
   streetAddress: player?.streetAddress || faker.address.streetAddress(),
   city: player?.streetAddress || faker.address.city(),
   province: player?.streetAddress || "ON",
   country: player?.streetAddress || 'ca',
   postalCode: player?.postalCode || faker.address.zipCode(),
  }
 });


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
   <div className="m-5">
    <form className="flex flex-col gap-2">
     
     <label>Name</label>
     <input type="text" className={ errors.name ? 'input-error' : 'input-okay'} {...register('name')} />
     <ErrorMessage data={errors.name} />
     
     <label>Date of Birth</label>
     <input type="date" className={errors.dob ? 'input-error' : 'input-okay'}  {...register('dob')} />
     <ErrorMessage data={errors.dob} />
     
     <label>Position</label>
     <Select
      className="capitalize"
      options={Object.values(create.Postion).flatMap((p, i) => {
       return {
        label: _.replace(p.toString(), '_', " "),
        value: p.toString()
       }
      })}
      defaultValue={player?.position}
      onChange={(v, a) => { v && setValue('position', v )}}
     />
     <ErrorMessage data={errors.position} />

     <label>Phone</label>
     <PhoneInput
      international
      country="CA"
      value={watch('phone')}
      onChange={(p) => p && setValue('phone', p?.toString())}
     />
     <ErrorMessage data={errors.phone} />

     <label>Street Address</label>
     <input type="text" className={errors.name ? 'input-error' : 'input-okay'} {...register('name')} />
     <ErrorMessage data={errors.name} />

     <label>City</label>
     <input type="text" className={errors.name ? 'input-error' : 'input-okay'} {...register('name')} />
     <ErrorMessage data={errors.name} />

     <label>Province</label>
     <Select
      className="capitalize"
      options={[{ label: 'Ontario', value: "ON" },
      { label: 'British Columbia', value: "BC" },
      { label: 'Alberta', value: "AL" },
      { label: 'Nova Soctia', value: "NS" },
      { label: 'Manitoba', value: "MA" },
      { label: 'Quebec', value: "QC" }]}
      defaultValue={watch('province')}
      onChange={(v, a) => { v && setValue('province', v) }}
     />
     <ErrorMessage data={errors.province} />


     <label>Country</label>
     <Select
      className="capitalize"
      options={[{
       label: "Canada",
       value: 'ca'
      }]}
      defaultValue={watch('country')}
      onChange={(v, a) => { v && setValue('country', v) }}
      disabled
     />
     <ErrorMessage data={errors.country} />
     
     <label>Postal Code</label>
     <input type="text" className={errors.postalCode ? 'input-error' : 'input-okay'} {...register('postalCode')} />
     <ErrorMessage data={errors.postalCode} />
    </form>
  </div>
  </Dialog>
  

 </>)
}

export const ErrorMessage = ({ data }: { data?: FieldError | undefined } ) => {
 if (data) {
  return <span className="error">{ data.message }</span>
 }
 return <></>
}