// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateNestedManyWithoutHomeInputObjectSchema } from '../internals';

export const LocationCreateWithoutGameInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  streetAddress: Yup.string().required(),  city: Yup.string().required(),  province: Yup.string(),  country: Yup.string(),  postalCode: Yup.string().required(),  Squad: SquadCreateNestedManyWithoutHomeInputObjectSchema
});
