// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameCreateWithoutTeamInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';;
import { GameCreateOrConnectWithoutTeamInputObjectSchema } from '../internals';;
import { GameWhereUniqueInputObjectSchema } from '../internals';

export const GameCreateNestedOneWithoutTeamInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([GameCreateWithoutTeamInputObjectSchema,
GameUncheckedCreateWithoutTeamInputObjectSchema]),  connectOrCreate: GameCreateOrConnectWithoutTeamInputObjectSchema,  connect: GameWhereUniqueInputObjectSchema
});
