// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { GameScalarWhereInputObjectSchema } from '../internals';;
import { GameUpdateManyMutationInputObjectSchema } from '../internals';;
import { GameUncheckedUpdateManyWithoutGameInputObjectSchema } from '../internals';

export const GameUpdateManyWithWhereWithoutCompetitionInputObjectSchema = Yup.object({
    where: GameScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([GameUpdateManyMutationInputObjectSchema,
GameUncheckedUpdateManyWithoutGameInputObjectSchema])
});
