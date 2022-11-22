// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CompetitionCreateWithoutGameInputObjectSchema } from '../internals';;
import { CompetitionUncheckedCreateWithoutGameInputObjectSchema } from '../internals';;
import { CompetitionCreateOrConnectWithoutGameInputObjectSchema } from '../internals';;
import { CompetitionWhereUniqueInputObjectSchema } from '../internals';

export const CompetitionCreateNestedOneWithoutGameInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CompetitionCreateWithoutGameInputObjectSchema,
CompetitionUncheckedCreateWithoutGameInputObjectSchema]),  connectOrCreate: CompetitionCreateOrConnectWithoutGameInputObjectSchema,  connect: CompetitionWhereUniqueInputObjectSchema
});
