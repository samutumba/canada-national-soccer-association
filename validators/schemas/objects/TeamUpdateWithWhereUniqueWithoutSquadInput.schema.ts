// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateWithoutSquadInputObjectSchema } from '../internals';

export const TeamUpdateWithWhereUniqueWithoutSquadInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([TeamUpdateWithoutSquadInputObjectSchema,
TeamUncheckedUpdateWithoutSquadInputObjectSchema])
});
