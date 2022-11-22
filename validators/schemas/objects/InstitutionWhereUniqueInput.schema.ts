// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const InstitutionWhereUniqueInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string()
});
