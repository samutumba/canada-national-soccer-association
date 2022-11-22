// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithoutStartersInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateWithoutStartersInputObjectSchema } from '../internals';;
import { TeamCreateWithoutStartersInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutStartersInputObjectSchema } from '../internals';

export const TeamUpsertWithWhereUniqueWithoutStartersInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TeamUpdateWithoutStartersInputObjectSchema,
TeamUncheckedUpdateWithoutStartersInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TeamCreateWithoutStartersInputObjectSchema,
TeamUncheckedCreateWithoutStartersInputObjectSchema])
});
