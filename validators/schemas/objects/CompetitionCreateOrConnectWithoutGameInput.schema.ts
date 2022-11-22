// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionWhereUniqueInputObjectSchema } from '../internals';;
import { CompetitionCreateWithoutGameInputObjectSchema } from '../internals';;
import { CompetitionUncheckedCreateWithoutGameInputObjectSchema } from '../internals';

export const CompetitionCreateOrConnectWithoutGameInputObjectSchema = Yup.object({
    where: CompetitionWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([CompetitionCreateWithoutGameInputObjectSchema,
CompetitionUncheckedCreateWithoutGameInputObjectSchema])
});
