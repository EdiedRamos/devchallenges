export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-msr-purple-200 px-8 py-3 rounded-3xl">
      {children}
    </button>
  );
}
