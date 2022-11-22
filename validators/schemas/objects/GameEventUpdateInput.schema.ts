// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { PlayerUpdateOneRequiredWithoutGameEventNestedInputObjectSchema } from '../internals';;
import { IntFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { GameUpdateOneWithoutEventsNestedInputObjectSchema } from '../internals';;
import { EnumEventFieldUpdateOperationsInputObjectSchema } from '../internals';

export const GameEventUpdateInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  player: PlayerUpdateOneRequiredWithoutGameEventNestedInputObjectSchema,  minute: Yup.mixed().oneOfSchemas([Yup.number(),
IntFieldUpdateOperationsInputObjectSchema]),  game: GameUpdateOneWithoutEventsNestedInputObjectSchema,  type: Yup.mixed().oneOfSchemas([EnumEventFieldUpdateOperationsInputObjectSchema])
});
