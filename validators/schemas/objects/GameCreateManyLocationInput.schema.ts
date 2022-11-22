// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const GameCreateManyLocationInputObjectSchema = Yup.object({
    id: Yup.string(),  updatedAt: Yup.date(),  attendance: Yup.number().required(),  competitionId: Yup.string().required()
});
