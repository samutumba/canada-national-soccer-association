// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateNestedOneWithoutGameEventInputObjectSchema } from '../internals';;
import { GameCreateNestedOneWithoutEventsInputObjectSchema } from '../internals';

export const GameEventCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  player: PlayerCreateNestedOneWithoutGameEventInputObjectSchema,  minute: Yup.number().required(),  game: GameCreateNestedOneWithoutEventsInputObjectSchema
});
