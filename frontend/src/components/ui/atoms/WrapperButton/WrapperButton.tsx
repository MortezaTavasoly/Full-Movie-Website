import type { ButtonWrapperProps } from "./types";

const WrapperButton = ({
  text,
  loading = false,
  className,
  size = "large",
  type = "default",
  shape = "default",
  icon = false,
  disabled = false,
  variant = "primary",
  onClick,
  children,
}: ButtonWrapperProps) => {
  const buttonClasses: string[] = [
    "select-none transition-all flex justify-center items-center cursor-pointer ",
  ];
  const sizeClasses: string[] = [];
  const variantClasses: string[] = [];

  if (shape === "default") {
    buttonClasses.push(" rounded-[6px] ");
  } else if (shape === "rounded") {
    buttonClasses.push(" rounded-full ");
  }

  if (icon && !text) {
    if (size === "xLarge") {
      sizeClasses.push("min-w-[48px]");
    } else if (size === "large") {
      sizeClasses.push("min-w-[40px]");
    } else if (size === "medium") {
      sizeClasses.push("min-w-[32px]");
    } else if (size === "small") {
      sizeClasses.push("min-w-[24px]");
    }
  } else {
    if (type !== "text") buttonClasses.push("min-w-[9.0625rem] !px-[0.75rem]");
  }

  if (size === "xLarge") {
    sizeClasses.push(" text-[1.1rem] !p-2");
  } else if (size === "large") {
    sizeClasses.push(" text-[0.95rem] !p-2");
  } else if (size === "medium") {
    sizeClasses.push(" text-[0.875rem] !p-2");
  } else if (size === "small") {
    sizeClasses.push(" text-[0.75rem] ");
  }

  if (disabled) {
    if (type === "default") {
      variantClasses.push("text-[var(--theme-gray-200)]");
      if (variant === "primary") {
        variantClasses.push("bg-[var(--theme-primary-300)]");
      } else if (variant === "success") {
        variantClasses.push("bg-[var(--theme-success-300)]");
      } else if (variant === "error") {
        variantClasses.push("bg-[var(--theme-error-300)]");
      } else if (variant === "warning") {
        variantClasses.push("bg-[var(--theme-warning-300)]");
      } else if (variant === "black") {
        variantClasses.push("bg-[var(--theme-gray-900)]");
      }
    } else if (type === "outlined") {
      variantClasses.push("bg-[transparent] !border-[1px] !border-solid");
      if (variant === "primary") {
        variantClasses.push(
          "!border-[var(--theme-primary-300)] text-[var(--theme-primary-300)] ",
        );
      } else if (variant === "success") {
        variantClasses.push(
          "!border-[var(--theme-success-300)] text-[var(--theme-success-300)] ",
        );
      } else if (variant === "error") {
        variantClasses.push(
          "!border-[var(--theme-error-300)] text-[var(--theme-error-300)] ",
        );
      } else if (variant === "warning") {
        variantClasses.push(
          "!border-[var(--theme-warning-300)] text-[var(--theme-warning-300)] ",
        );
      } else if (variant === "black") {
        variantClasses.push(
          "!border-[var(--theme-gray-900)] text-[var(--theme-gray-900)]",
        );
      }
    } else if (type === "text") {
      variantClasses.push("bg-[transparent]");
      if (variant === "primary") {
        variantClasses.push("text-[var(--theme-gray-300)]");
      } else if (variant === "success") {
        variantClasses.push("text-[var(--theme-success-300)]");
      } else if (variant === "error") {
        variantClasses.push("text-[var(--theme-error-300)]");
      } else if (variant === "warning") {
        variantClasses.push("text-[var(--theme-warning-300)]");
      } else if (variant === "black") {
        variantClasses.push("text-[var(--theme-gray-900)]");
      }
    }
  } else {
    if (type === "default") {
      if (variant === "primary") {
        variantClasses.push(
          " bg-[var(--theme-primary-900)] hover:bg-[var(--theme-primary-800)] text-[var(--theme-primary-200)] hover:text-[var(--theme-primary-100)]",
        );
      } else if (variant === "success") {
        variantClasses.push(
          " bg-[var(--theme-success-500)] hover:bg-[var(--theme-success-400)] text-[var(--theme-success-800)] hover:text-[var(--theme-success-700)]",
        );
      } else if (variant === "error") {
        variantClasses.push(
          " bg-[var(--theme-error-400)]/80 hover:bg-[var(--theme-error-400)]/70 text-[var(--theme-primary-100)] ",
        );
      } else if (variant === "warning") {
        variantClasses.push(
          " bg-[var(--theme-warning-400)] hover:bg-[var(--theme-warning-500)] text-[var(--theme-warning-900)] hover:text-[var(--theme-warning-900)]",
        );
      } else if (variant === "black") {
        variantClasses.push(
          " bg-[var(--theme-gray-800)]/70 hover:bg-[var(--theme-gray-800)]/50 text-[var(--theme-gray-200)]",
        );
      }
    } else if (type === "outlined") {
      variantClasses.push("bg-transparent !border-[1px] !border-solid");
      if (variant === "primary") {
        variantClasses.push(
          "!border-[var(--theme-primary-500)] hover:!border-[var(--theme-primary-300)] text-[var(--theme-primary-500)] hover:text-[var(--theme-primary-300)]",
        );
      } else if (variant === "success") {
        variantClasses.push(
          "!border-[var(--theme-success-500)] hover:!border-[var(--theme-success-400)] text-[var(--theme-success-500)] hover:text-[var(--theme-success-400)]",
        );
      } else if (variant === "error") {
        variantClasses.push(
          "!border-[var(--theme-error-400)] hover:!border-[var(--theme-error-500)] text-[var(--theme-error-400)] hover:text-[var(--theme-error-500)]",
        );
      } else if (variant === "warning") {
        variantClasses.push(
          "!border-[var(--theme-warning-500)] hover:!border-[var(--theme-warning-600)] text-[var(--theme-warning-500)] hover:text-[var(--theme-warning-600)]",
        );
      } else if (variant === "black") {
        variantClasses.push(
          "!border-[var(--theme-gray-500)] hover:!border-[var(--theme-gray-400)] text-[var(--theme-gray-500)] hover:text-[var(--theme-gray-400)]",
        );
      }
    } else if (type === "text") {
      if (variant === "primary") {
        variantClasses.push(
          "text-[var(--theme-primary-500)] hover:text-[var(--theme-primary-400)]",
        );
      } else if (variant === "success") {
        variantClasses.push(
          "text-[var(--theme-success-500)] hover:text-[var(--theme-success-400)]",
        );
      } else if (variant === "error") {
        variantClasses.push(
          "text-[var(--theme-error-500)] hover:text-[var(--theme-error-300)]",
        );
      } else if (variant === "warning") {
        variantClasses.push(
          "text-[var(--theme-warning-500)] hover:text-[var(--theme-warning-300)]",
        );
      } else if (variant === "black") {
        variantClasses.push(
          "text-[var(--theme-gray-500)] hover:text-[var(--theme-gray-300)]",
        );
      }
    }
  }

  return (
    <button
      className={`${buttonClasses} ${variantClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
    >
      {children}
      {text}
    </button>
  );
};

export default WrapperButton;
