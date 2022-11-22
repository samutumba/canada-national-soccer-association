// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { InjuryWhereUniqueInputObjectSchema } from '../internals';;
import { InjuryUpdateWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryUncheckedUpdateWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryCreateWithoutPlayerInputObjectSchema } from '../internals';;
import { InjuryUncheckedCreateWithoutPlayerInputObjectSchema } from '../internals';

export const InjuryUpsertWithWhereUniqueWithoutPlayerInputObjectSchema = Yup.object({
    where: InjuryWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([InjuryUpdateWithoutPlayerInputObjectSchema,
InjuryUncheckedUpdateWithoutPlayerInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([InjuryCreateWithoutPlayerInputObjectSchema,
InjuryUncheckedCreateWithoutPlayerInputObjectSchema])
});
