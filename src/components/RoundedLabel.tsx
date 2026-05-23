interface RoundedLabelProps {
  text: string;
  className?: string;
}

const RoundedLabel: React.FC<RoundedLabelProps> = ({
  text,
  className = "",
}) => {
  return (
    <span
      className={`inline-block rounded-full px-4 py-2 text-sm ${className} bg-blue-50 dark:bg-[#414868] text-blue-700 dark:text-[#7aa2f7] text-sm rounded-full`}
    >
      {text}
    </span>
  );
};

export default RoundedLabel;
