import * as Yup from 'yup';

export const EventSchema = Yup.mixed().oneOf(["goal","assist","yellow_card","red_card","substitution_off","substitution_on"])