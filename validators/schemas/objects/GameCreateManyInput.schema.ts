// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const GameCreateManyInputObjectSchema = Yup.object({
    id: Yup.string(),  updatedAt: Yup.date(),  attendance: Yup.number().required(),  locationId: Yup.string().required(),  competitionId: Yup.string().required()
});
