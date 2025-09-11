const SectionTitle = ({
  title,
  subtitle, // ✅ add subtitle support
  paragraph,
  width = "800px",
  center,
  mb = "100px",
}: {
  title: string;
  subtitle?: string; // ✅ new prop
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h3 className="mb-2 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px] leading-tight">
        {title}
      </h3>

      {subtitle && (
        <h4 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
          {subtitle}
        </h4>
      )}

      {paragraph && (
        <p className="text-base text-body-color md:text-lg">{paragraph}</p>
      )}
    </div>
  );
};

export default SectionTitle;
