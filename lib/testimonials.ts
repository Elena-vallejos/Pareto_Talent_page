export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

/**
 * Add REAL testimonials here (with permission) and the section appears automatically.
 * While this array is empty, nothing is rendered. Never add invented testimonials.
 */
export const TESTIMONIALS: Testimonial[] = [];
