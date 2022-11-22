// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateNestedManyWithoutInstitutionInputObjectSchema } from '../internals';

export const InstitutionCreateWithoutScholarshipInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  address: Yup.string().required(),  city: Yup.string().required(),  province: Yup.string(),  postal_code: Yup.string().required(),  Squad: SquadCreateNestedManyWithoutInstitutionInputObjectSchema
});
