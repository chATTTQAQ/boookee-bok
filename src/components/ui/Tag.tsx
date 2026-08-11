interface TagProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function Tag({ label, active = false, onClick }: TagProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded-pill px-4 py-1.5 text-sm font-medium transition-all duration-300 ease-apple ${
        active
          ? "bg-accent text-white"
          : "bg-bg-secondary text-text-secondary hover:bg-border"
      }`}
    >
      {label}
    </button>
  );
}
