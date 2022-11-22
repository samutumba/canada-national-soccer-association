// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameCreateWithoutEventsInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';;
import { GameCreateOrConnectWithoutEventsInputObjectSchema } from '../internals';;
import { GameUpsertWithoutEventsInputObjectSchema } from '../internals';;
import { GameWhereUniqueInputObjectSchema } from '../internals';;
import { GameUpdateWithoutEventsInputObjectSchema } from '../internals';;
import { GameUncheckedUpdateWithoutEventsInputObjectSchema } from '../internals';

export const GameUpdateOneWithoutEventsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([GameCreateWithoutEventsInputObjectSchema,
GameUncheckedCreateWithoutEventsInputObjectSchema]),  connectOrCreate: GameCreateOrConnectWithoutEventsInputObjectSchema,  upsert: GameUpsertWithoutEventsInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: GameWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([GameUpdateWithoutEventsInputObjectSchema,
GameUncheckedUpdateWithoutEventsInputObjectSchema])
});
