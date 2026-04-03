interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true }: Props) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground md:text-lg">{subtitle}</p>}
  </div>
);

export default SectionHeading;
