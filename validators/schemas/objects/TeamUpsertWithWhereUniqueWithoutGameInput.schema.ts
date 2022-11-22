// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithoutGameInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateWithoutGameInputObjectSchema } from '../internals';;
import { TeamCreateWithoutGameInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutGameInputObjectSchema } from '../internals';

export const TeamUpsertWithWhereUniqueWithoutGameInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TeamUpdateWithoutGameInputObjectSchema,
TeamUncheckedUpdateWithoutGameInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TeamCreateWithoutGameInputObjectSchema,
TeamUncheckedCreateWithoutGameInputObjectSchema])
});
