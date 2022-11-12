// tailwind className string builder
export const classNames = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(" ");
