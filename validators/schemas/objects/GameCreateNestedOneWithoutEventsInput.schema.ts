// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameCreateWithoutEventsInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';;
import { GameCreateOrConnectWithoutEventsInputObjectSchema } from '../internals';;
import { GameWhereUniqueInputObjectSchema } from '../internals';

export const GameCreateNestedOneWithoutEventsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([GameCreateWithoutEventsInputObjectSchema,
GameUncheckedCreateWithoutEventsInputObjectSchema]),  connectOrCreate: GameCreateOrConnectWithoutEventsInputObjectSchema,  connect: GameWhereUniqueInputObjectSchema
});
