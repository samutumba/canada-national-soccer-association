// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameEventScalarWhereInputObjectSchema } from '../internals';;
import { GameEventUpdateManyMutationInputObjectSchema } from '../internals';;
import { GameEventUncheckedUpdateManyWithoutGameEventInputObjectSchema } from '../internals';

export const GameEventUpdateManyWithWhereWithoutPlayerInputObjectSchema = Yup.object({
    where: GameEventScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([GameEventUpdateManyMutationInputObjectSchema,
GameEventUncheckedUpdateManyWithoutGameEventInputObjectSchema])
});
