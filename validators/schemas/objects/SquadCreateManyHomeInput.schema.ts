// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const SquadCreateManyHomeInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  institutionId: Yup.string().required(),  homeColor: Yup.mixed().oneOfSchemas([Yup.string()]),  awayColor: Yup.mixed().oneOfSchemas([Yup.string()])
});
