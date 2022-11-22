// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InstitutionCreateWithoutSquadInputObjectSchema } from '../internals';;
import { InstitutionUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';;
import { InstitutionCreateOrConnectWithoutSquadInputObjectSchema } from '../internals';;
import { InstitutionWhereUniqueInputObjectSchema } from '../internals';

export const InstitutionCreateNestedOneWithoutSquadInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([InstitutionCreateWithoutSquadInputObjectSchema,
InstitutionUncheckedCreateWithoutSquadInputObjectSchema]),  connectOrCreate: InstitutionCreateOrConnectWithoutSquadInputObjectSchema,  connect: InstitutionWhereUniqueInputObjectSchema
});
