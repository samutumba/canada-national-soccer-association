// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateNestedManyWithoutGameInputObjectSchema } from '../internals';;
import { GameEventCreateNestedManyWithoutGameInputObjectSchema } from '../internals';;
import { CompetitionCreateNestedOneWithoutGameInputObjectSchema } from '../internals';

export const GameCreateWithoutLocationInputObjectSchema = Yup.object({
    id: Yup.string(),  team: TeamCreateNestedManyWithoutGameInputObjectSchema,  events: GameEventCreateNestedManyWithoutGameInputObjectSchema,  competition: CompetitionCreateNestedOneWithoutGameInputObjectSchema,  updatedAt: Yup.date(),  attendance: Yup.number().required()
});
