import { useState, useMemo, useCallback } from "react";
import type { TInputProps, InputVariant } from "./type";
import { IoIosClose } from "react-icons/io";

const getLabelClassList = ({
  error,
  variant,
  disabled,
  inputValue,
}: {
  error: boolean;
  variant: InputVariant;
  disabled?: boolean;
  inputValue: string;
}) => {
  const labelClass: string[] = [
    "select-none text-[1rem] leading-[1.130rem] cursor-text truncate rounded-full !px-2 !mx-3 !pb-1",
    "absolute duration-300",
    "transform -translate-y-5 scale-75 w-fit top-2.5 z-[2] origin-[0]",
    "peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 ",
    "peer-focus:scale-75 peer-focus:-translate-y-5",
    "rtl:peer-focus:-translate-x-1 rtl:peer-focus:right-0 rtl:origin-right",
  ];

  if (disabled) {
    labelClass.push("!text-[var(--theme-gray-600)] cursor-not-allowed");
  } else if (error) {
    labelClass.push(
      `text-[var(--theme-error-400)] peer-focus:text-[var(--theme-error-700)] peer-focus:bg-[var(--theme-error-300)] ${
        inputValue ? "bg-[var(--theme-error-300)]" : ""
      }`
    );
  } else {
    labelClass.push("text-[var(--theme-gray-800)]");
    switch (variant) {
      case "primary":
        labelClass.push(
          `peer-focus:text-[var(--theme-primary-800)] peer-focus:bg-[var(--theme-primary-500)] ${
            inputValue ? "bg-[var(--theme-primary-500)]" : ""
          }`
        );
        break;
      case "success":
        labelClass.push(
          `peer-focus:text-[var(--theme-success-800)] peer-focus:bg-[var(--theme-success-500)] ${
            inputValue ? "bg-[var(--theme-success-500)]" : ""
          }`
        );
        break;
      case "error":
        labelClass.push(
          `peer-focus:text-[var(--theme-error-700)] peer-focus:bg-[var(--theme-error-300)] ${
            inputValue ? "bg-[var(--theme-error-300)]" : ""
          }`
        );
        break;
      case "warning":
        labelClass.push(
          `peer-focus:text-[var(--theme-warning-900)] peer-focus:bg-[var(--theme-warning-300)] ${
            inputValue ? "bg-[var(--theme-warning-300)]" : ""
          }`
        );
        break;
      case "white":
        labelClass.push(
          `peer-focus:text-[var(--theme-gray-800)] peer-focus:bg-[var(--theme-gray-400)] ${
            inputValue ? "bg-[var(--theme-gray-400)]" : ""
          }`
        );
        break;
      case "black":
      default:
        labelClass.push(
          `!text-[var(--theme-gray-300)] peer-focus:text-[var(--theme-gray-300)] peer-focus:bg-[var(--theme-gray-600)] ${
            inputValue ? "bg-[var(--theme-gray-600)]" : ""
          }`
        );
        break;
    }
  }

  return labelClass;
};

const getInputClassList = ({
  error,
  variant,
  disabled,
}: {
  error: boolean;
  variant: InputVariant;
  disabled?: boolean;
}) => {
  const inputClass: string[] = [
    "!pb-2.5 !pt-2 w-full !px-2",
    "text-[0.875rem] !pt-[0.55rem] text-[var(--theme-gray-800)]",
    "!border-solid !border-[1px] rounded-[6px]",
    "placeholder:opacity-0 focus:placeholder:opacity-100 focus:outline-none focus:ring-0",
    "transition-all block appearance-none peer",
    "autofill:shadow-[inset_0_0_0px_1000px_var(--theme-gray-100)]",
    "disabled:cursor-not-allowed disabled:opacity-70",
  ];

  if (disabled) {
    inputClass.push(
      "!bg-[var(--theme-gray-100)] !border-[var(--theme-gray-300)] text-[var(--theme-gray-500)] bg-[var(--theme-gray-700)]"
    );
  } else if (error) {
    inputClass.push(
      "!border-[var(--theme-error-500)] focus:!border-[var(--theme-error-500)] placeholder:text-[var(--theme-error-300)]/50 bg-[var(--theme-error-200)]"
    );
  } else {
    inputClass.push("!border-[var(--theme-gray-600)]/50");
    switch (variant) {
      case "primary":
        inputClass.push(
          "focus:!border-[var(--theme-primary-500)] placeholder:text-[var(--theme-primary-200)]/50 bg-[var(--theme-primary-100)]"
        );
        break;
      case "success":
        inputClass.push(
          "focus:!border-[var(--theme-success-500)] placeholder:text-[var(--theme-success-900)]/40 bg-[var(--theme-success-200)]"
        );
        break;
      case "error":
        inputClass.push(
          "focus:!border-[var(--theme-error-500)] placeholder:text-[var(--theme-error-900)]/40 !text-[var(--theme-error-900)]/90 bg-[var(--theme-error-200)]"
        );
        break;
      case "warning":
        inputClass.push(
          "focus:!border-[var(--theme-warning-500)] placeholder:text-[var(--theme-warning-900)]/50 bg-[var(--theme-warning-200)]"
        );
        break;
      case "white":
        inputClass.push(
          "focus:!border-[var(--theme-gray-600)] placeholder:text-[var(--theme-gray-700)]/50 bg-[var(--theme-gray-200)]"
        );
        break;
      case "black":
      default:
        inputClass.push(
          "focus:!border-[var(--theme-gray-300)] placeholder:text-[var(--theme-gray-100)]/50 bg-[var(--theme-gray-900)] !text-[var(--theme-gray-300)]"
        );
        break;
    }
  }

  return inputClass;
};

const WrapperInput = ({
  className,
  disabled = false,
  error = false,
  hint,
  name,
  type = "text",
  label,
  maxLength,
  minLength,
  placeholder,
  value = "",
  variant = "black",
  clear,
  onChange,
  onClear,
  onFocus,
  onBlur,
  autoComplete,
  required,
}: TInputProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [inputValue, setInputValue] = useState<string>(value);

  const inputClassList = useMemo(() => {
    const inputClass = [
      ...getInputClassList({
        error: Boolean(error),
        variant,
        disabled,
      }),
    ];
    return [...inputClass, className].filter(Boolean).join(" ");
  }, [error, variant, disabled, className]);

  const labelClassList = useMemo(() => {
    const labelClass = getLabelClassList({
      error: Boolean(error),
      variant,
      disabled,
      inputValue,
    });
    return labelClass.join(" ");
  }, [error, variant, disabled, inputValue]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onChange?.(e);
    },
    [onChange]
  );

  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setInputValue("");
      onClear?.();
    },
    [onClear]
  );

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      onFocus?.(e);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      onBlur?.(e);
    },
    [onBlur]
  );

  const showClearButton = clear && isHovered && inputValue && !disabled;
  const errorMessage = typeof error === "string" ? error : null;

  return (
    <div className="relative">
      <div
        className="relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          name={name}
          id={name}
          type={type}
          className={inputClassList}
          disabled={disabled}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete={autoComplete}
          required={required}
        />

        {label && (
          <label htmlFor={name} className={labelClassList}>
            {label}
            {required && (
              <span className="text-[var(--theme-error-500)] !ml-1">*</span>
            )}
          </label>
        )}

        {showClearButton && (
          <button
            type="button"
            className="!text-[1.6rem] cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 z-[3] text-[var(--theme-gray-500)]/60 hover:text-[var(--theme-gray-600)] bg-transparent !border-none !p-0"
            onMouseDown={handleClear}
            aria-label="Clear input"
          >
            <IoIosClose />
          </button>
        )}
      </div>

      <div className=" !mt-1">
        {hint && !error && (
          <div className="text-sm text-[var(--theme-gray-500)]">{hint}</div>
        )}

        {errorMessage && (
          <div className="text-sm text-[var(--theme-error-500)]">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default WrapperInput;
