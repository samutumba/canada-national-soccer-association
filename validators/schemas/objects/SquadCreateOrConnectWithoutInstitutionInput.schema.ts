// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SquadWhereUniqueInputObjectSchema } from '../internals';;
import { SquadCreateWithoutInstitutionInputObjectSchema } from '../internals';;
import { SquadUncheckedCreateWithoutInstitutionInputObjectSchema } from '../internals';

export const SquadCreateOrConnectWithoutInstitutionInputObjectSchema = Yup.object({
    where: SquadWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([SquadCreateWithoutInstitutionInputObjectSchema,
SquadUncheckedCreateWithoutInstitutionInputObjectSchema])
});
