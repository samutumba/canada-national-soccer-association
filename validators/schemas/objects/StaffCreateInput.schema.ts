// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AccountCreateNestedOneWithoutStaffInputObjectSchema } from '../internals';;
import { SquadCreateNestedManyWithoutStaffInputObjectSchema } from '../internals';

export const StaffCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  dob: Yup.date().required(),  phone: Yup.string().required(),  streetAddress: Yup.string().required(),  city: Yup.string().required(),  country: Yup.string(),  postalCode: Yup.string().required(),  account: AccountCreateNestedOneWithoutStaffInputObjectSchema,  Squad: SquadCreateNestedManyWithoutStaffInputObjectSchema
});
