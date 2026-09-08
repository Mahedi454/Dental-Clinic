import {
  Users,
  Award,
  Stethoscope,
  Smile,
  Cpu,
  HeartHandshake,
  Coffee,
  ShieldCheck,
  BadgeDollarSign,
  Sparkles,
  Sun,
  Anchor,
  Activity,
  AlignCenter,
  Layers,
  Baby,
  Zap,
  HardHat,
  Shield,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Award,
  Stethoscope,
  Smile,
  Cpu,
  HeartHandshake,
  Coffee,
  ShieldCheck,
  BadgeDollarSign,
  Sparkles,
  Sun,
  Anchor,
  Activity,
  AlignCenter,
  Layers,
  Baby,
  Zap,
  HardHat,
  Shield,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Smile;
}
