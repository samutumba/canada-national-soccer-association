// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateNestedOneWithoutGameEventInputObjectSchema } from '../internals';

export const GameEventCreateWithoutGameInputObjectSchema = Yup.object({
    id: Yup.string(),  player: PlayerCreateNestedOneWithoutGameEventInputObjectSchema,  minute: Yup.number().required()
});
