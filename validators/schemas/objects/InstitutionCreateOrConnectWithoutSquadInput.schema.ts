// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InstitutionWhereUniqueInputObjectSchema } from '../internals';;
import { InstitutionCreateWithoutSquadInputObjectSchema } from '../internals';;
import { InstitutionUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';

export const InstitutionCreateOrConnectWithoutSquadInputObjectSchema = Yup.object({
    where: InstitutionWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([InstitutionCreateWithoutSquadInputObjectSchema,
InstitutionUncheckedCreateWithoutSquadInputObjectSchema])
});
