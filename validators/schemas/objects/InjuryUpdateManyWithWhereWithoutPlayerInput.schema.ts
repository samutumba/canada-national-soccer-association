// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InjuryScalarWhereInputObjectSchema } from '../internals';;
import { InjuryUpdateManyMutationInputObjectSchema } from '../internals';;
import { InjuryUncheckedUpdateManyWithoutInjuryInputObjectSchema } from '../internals';

export const InjuryUpdateManyWithWhereWithoutPlayerInputObjectSchema = Yup.object({
    where: InjuryScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([InjuryUpdateManyMutationInputObjectSchema,
InjuryUncheckedUpdateManyWithoutInjuryInputObjectSchema])
});
