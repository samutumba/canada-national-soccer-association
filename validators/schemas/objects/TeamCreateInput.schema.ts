// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PlayerCreateNestedManyWithoutTeamInputObjectSchema } from '../internals';;
import { SquadCreateNestedOneWithoutTeamInputObjectSchema } from '../internals';;
import { GameCreateNestedOneWithoutTeamInputObjectSchema } from '../internals';

export const TeamCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  starters: PlayerCreateNestedManyWithoutTeamInputObjectSchema,  shirtColor: Yup.string().required(),  squad: SquadCreateNestedOneWithoutTeamInputObjectSchema,  Game: GameCreateNestedOneWithoutTeamInputObjectSchema
});
