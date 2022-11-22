// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadScalarWhereInputObjectSchema } from '../internals';;
import { SquadUpdateManyMutationInputObjectSchema } from '../internals';;
import { SquadUncheckedUpdateManyWithoutSquadInputObjectSchema } from '../internals';

export const SquadUpdateManyWithWhereWithoutCompetitionInputObjectSchema = Yup.object({
    where: SquadScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([SquadUpdateManyMutationInputObjectSchema,
SquadUncheckedUpdateManyWithoutSquadInputObjectSchema])
});
