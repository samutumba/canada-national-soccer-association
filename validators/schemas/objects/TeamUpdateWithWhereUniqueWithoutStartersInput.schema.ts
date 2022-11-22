// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithoutStartersInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateWithoutStartersInputObjectSchema } from '../internals';

export const TeamUpdateWithWhereUniqueWithoutStartersInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TeamUpdateWithoutStartersInputObjectSchema,
TeamUncheckedUpdateWithoutStartersInputObjectSchema])
});
