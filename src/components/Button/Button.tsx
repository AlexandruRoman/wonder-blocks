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
  return <button type="button">{label}</button>;
};
