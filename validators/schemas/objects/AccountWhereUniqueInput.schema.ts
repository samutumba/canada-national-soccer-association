// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const AccountWhereUniqueInputObjectSchema = Yup.object({
    id: Yup.string(),  username: Yup.string()
});
