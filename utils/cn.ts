// utils/cn.ts

type ClassValue =
  | string
  | number
  | null
  | undefined
  | boolean
  | ClassValue[]
  | { [key: string]: boolean };

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  const process = (input: ClassValue) => {
    if (!input) return;

    if (typeof input === "string" || typeof input === "number") {
      classes.push(String(input));
    } else if (Array.isArray(input)) {
      input.forEach(process);
    } else if (typeof input === "object") {
      for (const key in input) {
        if (input[key]) classes.push(key);
      }
    }
  };

  inputs.forEach(process);

  return classes.join(" ");
}