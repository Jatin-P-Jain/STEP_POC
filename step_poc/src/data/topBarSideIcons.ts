export interface IconData {
  alt: string;
  src: string;
  size: number;
  isProfile?: boolean;
}

// Importing the assets directly
import GlobeIcon from "../assets/Icons/language-icon.svg";
import BellIcon from "../assets/Icons/notification-icon.svg";
import GearIcon from "../assets/Icons/settings-icon.svg";
import ProfileIcon from "../assets/Icons/avatar_image.png";

export const sideIcons: IconData[] = [
  { alt: "Global", src: GlobeIcon, size: 18 },
  { alt: "Notifications", src: BellIcon, size: 18 },
  { alt: "Settings", src: GearIcon, size: 18 },
  { alt: "Profile", src: ProfileIcon, size: 24, isProfile: true },
];
