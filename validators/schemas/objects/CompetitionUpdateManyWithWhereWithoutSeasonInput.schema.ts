// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionScalarWhereInputObjectSchema } from '../internals';;
import { CompetitionUpdateManyMutationInputObjectSchema } from '../internals';;
import { CompetitionUncheckedUpdateManyWithoutCompetitionInputObjectSchema } from '../internals';

export const CompetitionUpdateManyWithWhereWithoutSeasonInputObjectSchema = Yup.object({
    where: CompetitionScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([CompetitionUpdateManyMutationInputObjectSchema,
CompetitionUncheckedUpdateManyWithoutCompetitionInputObjectSchema])
});
