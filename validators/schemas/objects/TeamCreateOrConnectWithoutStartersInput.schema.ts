// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamCreateWithoutStartersInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutStartersInputObjectSchema } from '../internals';

export const TeamCreateOrConnectWithoutStartersInputObjectSchema = Yup.object({
    where: TeamWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([TeamCreateWithoutStartersInputObjectSchema,
TeamUncheckedCreateWithoutStartersInputObjectSchema])
});
