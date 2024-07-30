import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-blue-300 flex gap-3">
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
      <button onClick={() => setTheme("fox")}>Fox Mode</button>
    </div>
  );
};
