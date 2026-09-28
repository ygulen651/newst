import type { LucideIcon } from "lucide-react";
import {
  Award, BatteryCharging, Building2, Cable, Car, Cloud, Cpu, Database, Factory, Flag, Flame, Gauge, Globe, Globe2, Home, Hotel, Leaf, LineChart,
  MapPin, MonitorSmartphone, Music, Phone, PlugZap, Power, Server, Settings, Shield, ShieldCheck, ShoppingBag, Store, Sun, Target, ThermometerSun,
  Truck, Users, Waves, WifiOff, Wind, Wrench, Zap,
} from "lucide-react";

// Icons that can be chosen in the admin panel; content stores the name only.
export const icons: Record<string, LucideIcon> = {
  Award, BatteryCharging, Building2, Cable, Car, Cloud, Cpu, Database, Factory, Flag, Flame, Gauge, Globe, Globe2, Home, Hotel, Leaf, LineChart,
  MapPin, MonitorSmartphone, Music, Phone, PlugZap, Power, Server, Settings, Shield, ShieldCheck, ShoppingBag, Store, Sun, Target, ThermometerSun,
  Truck, Users, Waves, WifiOff, Wind, Wrench, Zap,
};

export const iconNames = Object.keys(icons);

export const getIcon = (name: string): LucideIcon => icons[name] ?? Zap;
