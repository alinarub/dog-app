import useTheme from "@/contexts/theme";

export default function ThemeButton() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeButton = (event) => {
    const darkModeStatus = event.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <input
      type="checkbox"
      value=""
      checked={themeMode === "dark"}
      className=""
      onChange={onChangeButton}
    />
  );
}
