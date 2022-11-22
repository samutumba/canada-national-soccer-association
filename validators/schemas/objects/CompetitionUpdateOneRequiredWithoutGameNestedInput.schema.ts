// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionCreateWithoutGameInputObjectSchema } from '../internals';;
import { CompetitionUncheckedCreateWithoutGameInputObjectSchema } from '../internals';;
import { CompetitionCreateOrConnectWithoutGameInputObjectSchema } from '../internals';;
import { CompetitionUpsertWithoutGameInputObjectSchema } from '../internals';;
import { CompetitionWhereUniqueInputObjectSchema } from '../internals';;
import { CompetitionUpdateWithoutGameInputObjectSchema } from '../internals';;
import { CompetitionUncheckedUpdateWithoutGameInputObjectSchema } from '../internals';

export const CompetitionUpdateOneRequiredWithoutGameNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CompetitionCreateWithoutGameInputObjectSchema,
CompetitionUncheckedCreateWithoutGameInputObjectSchema]),  connectOrCreate: CompetitionCreateOrConnectWithoutGameInputObjectSchema,  upsert: CompetitionUpsertWithoutGameInputObjectSchema,  connect: CompetitionWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([CompetitionUpdateWithoutGameInputObjectSchema,
CompetitionUncheckedUpdateWithoutGameInputObjectSchema])
});
