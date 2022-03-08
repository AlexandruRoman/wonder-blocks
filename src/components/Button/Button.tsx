/** @jsxImportSource theme-ui */

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label }: ButtonProps) => {
  return (
    <button
      sx={{
        color: "primary",
        fontFamily: "heading",
      }}
      type="button"
    >
      {label}
    </button>
  );
};
