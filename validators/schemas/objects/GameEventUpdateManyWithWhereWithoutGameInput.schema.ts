// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventScalarWhereInputObjectSchema } from '../internals';;
import { GameEventUpdateManyMutationInputObjectSchema } from '../internals';;
import { GameEventUncheckedUpdateManyWithoutEventsInputObjectSchema } from '../internals';

export const GameEventUpdateManyWithWhereWithoutGameInputObjectSchema = Yup.object({
    where: GameEventScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([GameEventUpdateManyMutationInputObjectSchema,
GameEventUncheckedUpdateManyWithoutEventsInputObjectSchema])
});
