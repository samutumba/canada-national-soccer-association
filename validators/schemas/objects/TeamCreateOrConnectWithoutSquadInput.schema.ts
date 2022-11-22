// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamCreateWithoutSquadInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';

export const TeamCreateOrConnectWithoutSquadInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TeamCreateWithoutSquadInputObjectSchema,
TeamUncheckedCreateWithoutSquadInputObjectSchema])
});
