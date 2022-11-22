// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameUpdateWithoutEventsInputObjectSchema } from '../internals';;
import { GameUncheckedUpdateWithoutEventsInputObjectSchema } from '../internals';;
import { GameCreateWithoutEventsInputObjectSchema } from '../internals';;
import { GameUncheckedCreateWithoutEventsInputObjectSchema } from '../internals';

export const GameUpsertWithoutEventsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([GameUpdateWithoutEventsInputObjectSchema,
GameUncheckedUpdateWithoutEventsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([GameCreateWithoutEventsInputObjectSchema,
GameUncheckedCreateWithoutEventsInputObjectSchema])
});
