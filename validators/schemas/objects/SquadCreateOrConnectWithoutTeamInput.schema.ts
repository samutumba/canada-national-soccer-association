// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadCreateWithoutTeamInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';

export const SquadCreateOrConnectWithoutTeamInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([SquadCreateWithoutTeamInputObjectSchema,
SquadUncheckedCreateWithoutTeamInputObjectSchema])
});
