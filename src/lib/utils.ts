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
    const urlObj = new URL(url);

    return urlObj.protocol === "http:" || urlObj.protocol === "https:";
  } catch (err) {
    return false;
  }
}
