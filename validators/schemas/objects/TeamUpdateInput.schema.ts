// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { PlayerUpdateManyWithoutTeamNestedInputObjectSchema } from '../internals';;
import { EnumFormationFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { SquadUpdateOneRequiredWithoutTeamNestedInputObjectSchema } from '../internals';;
import { GameUpdateOneWithoutTeamNestedInputObjectSchema } from '../internals';

export const TeamUpdateInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  starters: PlayerUpdateManyWithoutTeamNestedInputObjectSchema,  formation: Yup.mixed().oneOfSchemas([EnumFormationFieldUpdateOperationsInputObjectSchema]),  shirtColor: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  squad: SquadUpdateOneRequiredWithoutTeamNestedInputObjectSchema,  Game: GameUpdateOneWithoutTeamNestedInputObjectSchema
});
