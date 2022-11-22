// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamCreateWithoutGameInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutGameInputObjectSchema } from '../internals';

export const TeamCreateOrConnectWithoutGameInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TeamCreateWithoutGameInputObjectSchema,
TeamUncheckedCreateWithoutGameInputObjectSchema])
});
