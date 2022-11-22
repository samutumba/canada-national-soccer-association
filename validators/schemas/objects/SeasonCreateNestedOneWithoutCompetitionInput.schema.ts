// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SeasonCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SeasonUncheckedCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SeasonCreateOrConnectWithoutCompetitionInputObjectSchema } from '../internals';;
import { SeasonWhereUniqueInputObjectSchema } from '../internals';

export const SeasonCreateNestedOneWithoutCompetitionInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SeasonCreateWithoutCompetitionInputObjectSchema,
SeasonUncheckedCreateWithoutCompetitionInputObjectSchema]),  connectOrCreate: SeasonCreateOrConnectWithoutCompetitionInputObjectSchema,  connect: SeasonWhereUniqueInputObjectSchema
});
