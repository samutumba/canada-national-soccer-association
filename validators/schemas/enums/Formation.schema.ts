import * as Yup from 'yup';

export const FormationSchema = Yup.mixed().oneOf(["F4_4_2","F4_2_3_1","F3_5_2","F5_3_2","F3_4_3","F4_3_3"])