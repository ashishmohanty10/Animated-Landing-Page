import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}

export const Button = ({ children, size = "medium" }: Props) => {
  const sizeClassName = {
    small: " text-xs px-2 py-1",
    medium: "text-sm px-5 py-3",
    large: "text-lg px-8 py-5",
  };

  return (
    <button
      className={twMerge(
        "text-textBlack bg-white rounded-full px-3 py-1",
        sizeClassName[size]
      )}
    >
      {children}
    </button>
  );
};
