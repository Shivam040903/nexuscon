export default function Avatar({ initials, color = "bg-brand-100 text-brand-700", size = "md", ring = false }) {
  const sizes = {
    sm: "w-9 h-9 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base",
    xl: "w-24 h-24 text-xl",
  };
  return (
    <div
      className={`flex items-center justify-center rounded-full font-display font-semibold ${color} ${sizes[size]} ${
        ring ? "ring-4 ring-white" : ""
      }`}
    >
      {initials}
    </div>
  );
}
