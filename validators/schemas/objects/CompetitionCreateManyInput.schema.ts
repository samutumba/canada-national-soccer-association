// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const CompetitionCreateManyInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  sponsor: Yup.string().required(),  seasonId: Yup.string().required()
});
