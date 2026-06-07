import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Dil bilgisini otomatik taşıyan Link, useRouter, usePathname vb. sarmalayıcılar
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
