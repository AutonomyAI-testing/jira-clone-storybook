export const RegisterStepHeader = ({
  eyebrow,
  title,
  description,
}: Props): JSX.Element => (
  <header>
    <span className="font-primary-bold text-2xs uppercase tracking-wide text-font-brand">
      {eyebrow}
    </span>
    <h1 className="mt-2 font-primary-black text-3xl text-font">{title}</h1>
    <p className="mt-2 font-primary-light text-sm leading-5 text-font-subtle">
      {description}
    </p>
  </header>
);

interface Props {
  eyebrow: string;
  title: string;
  description: string;
}
