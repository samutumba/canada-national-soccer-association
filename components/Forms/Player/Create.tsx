import { Dialog } from "@mui/material";
import { useState } from "react";
import { Player, Postion, Prisma, } from "../../../prisma/generated/prisma-client-js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup'
import { toast } from "react-hot-toast";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import 'react-phone-number-input/style.css'
import { loadingState } from "../../../atoms";
import { FieldError, useForm } from "react-hook-form";
import { faker } from '@faker-js/faker/locale/en_CA';
import { PlayerCreateInputObjectSchema } from "../../../validators/schemas/internals";
import { create }  from '../../../interfaces'
import _ from "lodash";

import { SelectInput, DateInput, MobileInput } from "../Input";
import Cookies from "js-cookie";


export const PlayerForm = ({ player, children }: { player?: Player, children: React.ReactNode}) => {
  const [open, setOpen] = useState(false)
  const setLoading = useSetRecoilState(loadingState)

 const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm <create.Player>({
  mode: "onTouched",
  resolver: yupResolver(PlayerCreateInputObjectSchema),
  defaultValues: {
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
    phone: player?.phone || faker.phone.number('+1##########'),
   streetAddress: player?.streetAddress || faker.address.streetAddress(),
   city: player?.streetAddress || faker.address.city(),
   province: player?.streetAddress || "ON",
   country: player?.streetAddress || 'ca',
   postalCode: player?.postalCode || faker.address.zipCode(),
  }
 });

  const onSubmit = (data: create.Player) => {

    setLoading(true);
    setOpen(!open);

    console.log(data);

    const tokenCookie = Cookies.get('auth')
    axios.post('/api/player', data, {
      headers: {
        authorization: tokenCookie
      }
    }).then(res => {
      setLoading(false);
      toast.success(player ? "Player Updated" : "Player Created");
    }).catch(err => {
      setLoading(false);
      setOpen(!open);
      toast.error("Failed")
    })
  }


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
     <h1>{ player ? "Update Player" : "Create Player"}</h1>
     <label>Name</label>
     <input type="text" className={ errors.name ? 'input-error' : 'input-okay'} {...register('name')} />
     <ErrorMessage data={errors.name} />
     
         <DateInput name="Date of Birth" error={errors.dob} value={watch('dob')} callback={(v) => {
           setValue('dob', v)
         }} />
     <SelectInput
      name="Position"
      options={Object.values(create.Postion).flatMap((p, i) => {
       return {
        label: _.replace(p.toString(), '_', " "),
        value: p.toString()
       }
      })}
           defaultValue={player?.position && {
             label: _.replace(player?.position.toString(), '_', " "),
             value: player?.position.toString()
           } }
           
           error={errors.position}
           callback={(v) => {
             let postion: create.Postion = create.Postion.winger

             Object.values(create.Postion).forEach((p, i) => {
               if (p.toString() == "v") {
                 postion = p
               }
             });

             setValue('position', postion)
           }}
     />

         <MobileInput
           name="Phone"
           value={watch('phone')}
           callback={(p) => { setValue('phone', p) }}
           error={errors.phone}
         />   

     <label>Street Address</label>
     <input type="text" className={errors.name ? 'input-error' : 'input-okay'} {...register('streetAddress')} />
     <ErrorMessage data={errors.streetAddress} />

     <label>City</label>
     <input type="text" className={errors.city ? 'input-error' : 'input-okay'} {...register('city')} />
     <ErrorMessage data={errors.city} />

         <SelectInput
           name="Province"
           options={[{ label: 'Ontario', value: "ON" },
         { label: 'British Columbia', value: "BC" },
         { label: 'Alberta', value: "AL" },
         { label: 'Nova Soctia', value: "NS" },
         { label: 'Manitoba', value: "MA" },
         { label: 'Quebec', value: "QC" }
         ]}
           callback={(v) => setValue('province', v)}
           error={errors.province}
     />


         <SelectInput
           name="Country"
           options={[{
             label: "Canada",
             value: 'ca'
           }]}
           callback={(v) => setValue('country', v)}
           error={errors.country}
         />
         <SelectInput
           name="Gender"
           options={[{
             label: "Male",
             value: 'male'
           },
             {
               label: "Female",
               value: 'female'
             }, {
               label: "Other",
               value: 'other'
             }
           ]}
           callback={(v) => setValue('gender', v)}
           error={errors.gender}
         />
     
     <label>Postal Code</label>
     <input type="text" className={errors.postalCode ? 'input-error' : 'input-okay'} {...register('postalCode')} />
     <ErrorMessage data={errors.postalCode} />
      <button className="btn-main">
        {player ? "Update" : "Create"}
      </button>
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