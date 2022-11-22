// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameWhereUniqueInputObjectSchema } from '../internals';;
import { GameCreateWithoutEventsInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';

export const GameCreateOrConnectWithoutEventsInputObjectSchema = Yup.object({
    where: GameWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([GameCreateWithoutEventsInputObjectSchema,
GameUncheckedCreateWithoutEventsInputObjectSchema])
});
