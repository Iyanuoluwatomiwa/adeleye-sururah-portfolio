import React from "react";

export const Button = ({
  children,
  variant = "primary",
  href,
  download,
  onClick,
  className = "",
  icon: Icon,
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-main";

  const variants = {
    primary:
      "bg-accent text-bg-main hover:bg-accent-hover font-semibold px-6 py-3 text-sm shadow-sm",
    secondary:
      "bg-bg-surface border border-bg-border text-text-primary hover:border-accent hover:text-accent px-6 py-3 text-sm",
    outline:
      "border border-accent text-accent hover:bg-accent-subtle px-6 py-3 text-sm",
    text: "text-text-secondary hover:text-accent p-2 text-sm",
  };

  const classes = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} download={download} className={classes} {...props}>
        {Icon && <Icon className="w-4 h-4 mr-2" />}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </button>
  );
};
