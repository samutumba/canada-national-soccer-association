// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameWhereUniqueInputObjectSchema } from '../internals';;
import { GameCreateWithoutTeamInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutTeamInputObjectSchema } from '../internals';

export const GameCreateOrConnectWithoutTeamInputObjectSchema = Yup.object({
    where: GameWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([GameCreateWithoutTeamInputObjectSchema,
GameUncheckedCreateWithoutTeamInputObjectSchema])
});
