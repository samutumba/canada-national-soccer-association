// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameWhereUniqueInputObjectSchema } from '../internals';;
import { GameCreateWithoutLocationInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutLocationInputObjectSchema } from '../internals';

export const GameCreateOrConnectWithoutLocationInputObjectSchema = Yup.object({
    where: GameWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([GameCreateWithoutLocationInputObjectSchema,
GameUncheckedCreateWithoutLocationInputObjectSchema])
});
