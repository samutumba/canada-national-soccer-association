// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SeasonCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SeasonUncheckedCreateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SeasonCreateOrConnectWithoutCompetitionInputObjectSchema } from '../internals';;
import { SeasonUpsertWithoutCompetitionInputObjectSchema } from '../internals';;
import { SeasonWhereUniqueInputObjectSchema } from '../internals';;
import { SeasonUpdateWithoutCompetitionInputObjectSchema } from '../internals';;
import { SeasonUncheckedUpdateWithoutCompetitionInputObjectSchema } from '../internals';

export const SeasonUpdateOneRequiredWithoutCompetitionNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([SeasonCreateWithoutCompetitionInputObjectSchema,
SeasonUncheckedCreateWithoutCompetitionInputObjectSchema]),  connectOrCreate: SeasonCreateOrConnectWithoutCompetitionInputObjectSchema,  upsert: SeasonUpsertWithoutCompetitionInputObjectSchema,  connect: SeasonWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([SeasonUpdateWithoutCompetitionInputObjectSchema,
SeasonUncheckedUpdateWithoutCompetitionInputObjectSchema])
});
