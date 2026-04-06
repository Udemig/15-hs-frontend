const VARIANT_STYLES = {
  secondary: {
    bg: "bg-secondary-container",
    text: "text-on-secondary-container",
    textMuted: "text-on-secondary-container/80",
  },
  tertiary: {
    bg: "bg-tertiary-container",
    text: "text-on-tertiary-container",
    textMuted: "text-on-tertiary-container/80",
  },
  primary: {
    bg: "bg-primary-container",
    text: "text-on-primary-container",
    textMuted: "text-on-primary-container/80",
  },
  surface: {
    bg: "bg-surface-container-highest",
    text: "text-tertiary",
    textMuted: "text-on-surface-variant",
  },
};

const FeatureCard = ({
  title,
  description,
  icon,
  image,
  wide,
  variant,
  linkText,
  stats,
}) => {
  const styles = VARIANT_STYLES[variant] || VARIANT_STYLES.surface;
  const isReversed = variant === "surface";

  if (wide && image) {
    return (
      <div
        className={`md:col-span-2 ${styles.bg} rounded-xl p-10 flex flex-col ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-8 overflow-hidden relative`}
      >
        <div className="z-10">
          <h3
            className={`font-headline font-extrabold text-3xl ${styles.text} mb-4`}
          >
            {title}
          </h3>
          <p className={`${styles.textMuted} max-w-md mb-6`}>{description}</p>
          {linkText && (
            <a
              className={`inline-flex items-center gap-2 font-headline font-bold ${styles.text} hover:underline underline-offset-4`}
              href="#"
            >
              {linkText}{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          )}
          {stats && (
            <div className="flex gap-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-4">
                  {index > 0 && (
                    <div className="w-px h-10 bg-outline-variant/30"></div>
                  )}
                  <div className="text-center">
                    <span className="block font-headline font-extrabold text-2xl text-primary">
                      {stat.value}
                    </span>
                    <span className="text-xs uppercase font-bold text-on-surface-variant">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <img
          alt={title}
          className={`w-64 h-auto ${
            isReversed ? "rounded-lg shadow-xl" : "drop-shadow-lg"
          }`}
          src={image}
        />
      </div>
    );
  }

  return (
    <div className={`${styles.bg} rounded-xl p-10 flex flex-col justify-between`}>
      <div>
        {icon && (
          <span
            className={`material-symbols-outlined ${styles.text} text-4xl mb-6`}
            data-icon={icon}
          >
            {icon}
          </span>
        )}
        <h3
          className={`font-headline font-extrabold text-2xl ${styles.text} mb-4`}
        >
          {title}
        </h3>
        <p className={`${styles.textMuted} text-sm`}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
