// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const HeathRecordWhereUniqueInputObjectSchema = Yup.object({
    id: Yup.string(),  cardNumber: Yup.string()
});
