// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameCreateNestedOneWithoutEventsInputObjectSchema } from '../internals';

export const GameEventCreateWithoutPlayerInputObjectSchema = Yup.object({
    id: Yup.string(),  minute: Yup.number().required(),  game: GameCreateNestedOneWithoutEventsInputObjectSchema
});
