// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithoutGameInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateWithoutGameInputObjectSchema } from '../internals';

export const TeamUpdateWithWhereUniqueWithoutGameInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TeamUpdateWithoutGameInputObjectSchema,
TeamUncheckedUpdateWithoutGameInputObjectSchema])
});
