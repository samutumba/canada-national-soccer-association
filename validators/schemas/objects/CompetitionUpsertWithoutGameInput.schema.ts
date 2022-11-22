// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionUpdateWithoutGameInputObjectSchema } from '../internals';;
import { CompetitionUncheckedUpdateWithoutGameInputObjectSchema } from '../internals';;
import { CompetitionCreateWithoutGameInputObjectSchema } from '../internals';;
import { CompetitionUncheckedCreateWithoutGameInputObjectSchema } from '../internals';

export const CompetitionUpsertWithoutGameInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([CompetitionUpdateWithoutGameInputObjectSchema,
CompetitionUncheckedUpdateWithoutGameInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([CompetitionCreateWithoutGameInputObjectSchema,
CompetitionUncheckedCreateWithoutGameInputObjectSchema])
});
