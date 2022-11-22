// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateWithoutTeamInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';;
import { SquadCreateOrConnectWithoutTeamInputObjectSchema } from '../internals';;
import { SquadWhereUniqueInputObjectSchema } from '../internals';

export const SquadCreateNestedOneWithoutTeamInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SquadCreateWithoutTeamInputObjectSchema,
SquadUncheckedCreateWithoutTeamInputObjectSchema]),  connectOrCreate: SquadCreateOrConnectWithoutTeamInputObjectSchema,  connect: SquadWhereUniqueInputObjectSchema
});
