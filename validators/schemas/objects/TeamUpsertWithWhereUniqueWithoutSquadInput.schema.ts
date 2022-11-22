// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { TeamCreateWithoutSquadInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';

export const TeamUpsertWithWhereUniqueWithoutSquadInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TeamUpdateWithoutSquadInputObjectSchema,
TeamUncheckedUpdateWithoutSquadInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([TeamCreateWithoutSquadInputObjectSchema,
TeamUncheckedCreateWithoutSquadInputObjectSchema])
});
