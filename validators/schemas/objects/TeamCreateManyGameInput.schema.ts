// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const TeamCreateManyGameInputObjectSchema = Yup.object({
    id: Yup.string(),  shirtColor: Yup.string().required(),  squadId: Yup.string().required()
});
