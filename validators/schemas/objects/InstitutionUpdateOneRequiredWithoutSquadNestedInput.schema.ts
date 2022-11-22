// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InstitutionCreateWithoutSquadInputObjectSchema } from '../internals';;
import { InstitutionUncheckedCreateWithoutSquadInputObjectSchema } from '../internals';;
import { InstitutionCreateOrConnectWithoutSquadInputObjectSchema } from '../internals';;
import { InstitutionUpsertWithoutSquadInputObjectSchema } from '../internals';;
import { InstitutionWhereUniqueInputObjectSchema } from '../internals';;
import { InstitutionUpdateWithoutSquadInputObjectSchema } from '../internals';;
import { InstitutionUncheckedUpdateWithoutSquadInputObjectSchema } from '../internals';

export const InstitutionUpdateOneRequiredWithoutSquadNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([InstitutionCreateWithoutSquadInputObjectSchema,
InstitutionUncheckedCreateWithoutSquadInputObjectSchema]),  connectOrCreate: InstitutionCreateOrConnectWithoutSquadInputObjectSchema,  upsert: InstitutionUpsertWithoutSquadInputObjectSchema,  connect: InstitutionWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([InstitutionUpdateWithoutSquadInputObjectSchema,
InstitutionUncheckedUpdateWithoutSquadInputObjectSchema])
});
