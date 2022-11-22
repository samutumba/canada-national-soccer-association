// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumCompetitionTypeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { SeasonUpdateOneRequiredWithoutCompetitionNestedInputObjectSchema } from '../internals';;
import { GameUpdateManyWithoutCompetitionNestedInputObjectSchema } from '../internals';

export const CompetitionUpdateWithoutSquadInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  sponsor: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  type: Yup.mixed().oneOfSchemas([EnumCompetitionTypeFieldUpdateOperationsInputObjectSchema]),  season: SeasonUpdateOneRequiredWithoutCompetitionNestedInputObjectSchema,  Game: GameUpdateManyWithoutCompetitionNestedInputObjectSchema
});
