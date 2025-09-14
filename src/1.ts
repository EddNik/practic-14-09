interface Settings {
  darkMode: boolean;
  fontSize: number;
  language: string;
}

const settings: Settings = {
  darkMode: true,
  fontSize: 16,
  language: "en",
};

console.log("settings", settings);

// !================================================================================

const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
const callback = (a: number): number => {
  return 100 + a;
};
// !+++++++++++++++++++++++++++++++++++++++++++++++++++
