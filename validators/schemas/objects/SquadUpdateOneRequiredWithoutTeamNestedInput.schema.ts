// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadCreateWithoutTeamInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';;
import { SquadCreateOrConnectWithoutTeamInputObjectSchema } from '../internals';;
import { SquadUpsertWithoutTeamInputObjectSchema } from '../internals';;
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadUpdateWithoutTeamInputObjectSchema } from '../internals';;
import { SquadUncheckedUpdateWithoutTeamInputObjectSchema } from '../internals';

export const SquadUpdateOneRequiredWithoutTeamNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SquadCreateWithoutTeamInputObjectSchema,
SquadUncheckedCreateWithoutTeamInputObjectSchema]),  connectOrCreate: SquadCreateOrConnectWithoutTeamInputObjectSchema,  upsert: SquadUpsertWithoutTeamInputObjectSchema,  connect: SquadWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([SquadUpdateWithoutTeamInputObjectSchema,
SquadUncheckedUpdateWithoutTeamInputObjectSchema])
});
