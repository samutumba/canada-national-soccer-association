// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameCreateWithoutTeamInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';;
import { GameCreateOrConnectWithoutTeamInputObjectSchema } from '../internals';;
import { GameUpsertWithoutTeamInputObjectSchema } from '../internals';;
import { GameWhereUniqueInputObjectSchema } from '../internals';;
import { GameUpdateWithoutTeamInputObjectSchema } from '../internals';;
import { GameUncheckedUpdateWithoutTeamInputObjectSchema } from '../internals';

export const GameUpdateOneWithoutTeamNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([GameCreateWithoutTeamInputObjectSchema,
GameUncheckedCreateWithoutTeamInputObjectSchema]),  connectOrCreate: GameCreateOrConnectWithoutTeamInputObjectSchema,  upsert: GameUpsertWithoutTeamInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: GameWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([GameUpdateWithoutTeamInputObjectSchema,
GameUncheckedUpdateWithoutTeamInputObjectSchema])
});
