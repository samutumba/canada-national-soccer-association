// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateNestedManyWithoutGameInputObjectSchema } from '../internals';;
import { GameEventCreateNestedManyWithoutGameInputObjectSchema } from '../internals';;
import { LocationCreateNestedOneWithoutGameInputObjectSchema } from '../internals';

export const GameCreateWithoutCompetitionInputObjectSchema = Yup.object({
    id: Yup.string(),  team: TeamCreateNestedManyWithoutGameInputObjectSchema,  events: GameEventCreateNestedManyWithoutGameInputObjectSchema,  updatedAt: Yup.date(),  location: LocationCreateNestedOneWithoutGameInputObjectSchema,  attendance: Yup.number().required()
});
