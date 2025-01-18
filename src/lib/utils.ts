import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slug(str: string) {
  return str.trim().replaceAll(" ", "-");
}

export function unSlug(str: string) {
  return str.replaceAll("-", " ");
}

export function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}
