"use client";

import { useState } from "react";
import {
  Home,
  BarChart2,
  Users,
  LayoutGrid,
  Bell,
  Settings,
  LifeBuoy,
  ChevronDown,
  PanelLeftClose,
  PanelLeftOpen,
  MoreHorizontal,
  Hexagon,
} from "lucide-react";

type NavItem = {
  icon: React.ReactNode;
  label: string;
  badge?: number;
  submenu?: string[];
  active?: boolean;
};

const NAV_MAIN: NavItem[] = [
  { icon: <Home size={18} />, label: "Início", active: true },
  {
    icon: <BarChart2 size={18} />,
    label: "Análises",
    submenu: ["Visão geral", "Relatórios", "Exportar"],
  },
  { icon: <Users size={18} />, label: "Usuários", badge: 24 },
  {
    icon: <LayoutGrid size={18} />,
    label: "Projetos",
    submenu: ["Ativos", "Arquivados"],
  },
];

const NAV_SYSTEM: NavItem[] = [
  { icon: <Bell size={18} />, label: "Notificações", badge: 3 },
  { icon: <Settings size={18} />, label: "Configurações" },
  { icon: <LifeBuoy size={18} />, label: "Suporte" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Início");
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);

  const toggleSubmenu = (label: string) => {
    if (collapsed) return;
    setOpenSubmenus((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const w = collapsed ? "w-[60px]" : "w-[240px]";

  return (
    <aside
      className={`${w} bg-card border-border flex h-screen shrink-0 flex-col overflow-hidden border-r transition-all duration-200`}
    >
      {/* Top */}
      <div className="border-border flex h-13.25 items-center justify-between gap-2 border-b px-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="bg-primary text-primary-foreground flex h-8 w-8 min-w-8 items-center justify-center rounded-lg">
            <Hexagon size={16} />
          </div>
          {!collapsed && (
            <span className="text-card-foreground text-sm font-medium whitespace-nowrap">
              Painel Admin
            </span>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`border-border text-muted-foreground hover:bg-muted flex h-7 w-7 min-w-7 items-center justify-center rounded-md border transition-colors ${collapsed ? "mx-auto" : ""}`}
          aria-label="Expandir/colapsar sidebar"
        >
          {collapsed ? (
            <PanelLeftOpen size={15} />
          ) : (
            <PanelLeftClose size={15} />
          )}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-0.5 overflow-x-hidden overflow-y-auto p-2">
        {!collapsed && (
          <p className="text-muted-foreground px-2 py-1.5 text-[11px] font-medium tracking-wider">
            GERAL
          </p>
        )}

        {NAV_MAIN.map((item) => (
          <div key={item.label}>
            <div
              onClick={() => {
                if (item.submenu) {
                  toggleSubmenu(item.label);
                } else {
                  setActiveItem(item.label);
                }
              }}
              className={`group relative flex h-9 cursor-pointer items-center gap-2.5 rounded-md px-2 transition-colors ${
                activeItem === item.label && !item.submenu
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-card-foreground"
              }`}
            >
              <span className="flex min-w-5 items-center justify-center">
                {item.icon}
              </span>

              {!collapsed && (
                <>
                  <span className="flex-1 text-[13.5px] whitespace-nowrap">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 text-[10px] font-medium">
                      {item.badge}
                    </span>
                  )}
                  {item.submenu && (
                    <ChevronDown
                      size={14}
                      className={`text-muted-foreground transition-transform ${openSubmenus.includes(item.label) ? "rotate-180" : ""}`}
                    />
                  )}
                </>
              )}

              {collapsed && (
                <div className="bg-card border-border text-card-foreground pointer-events-none absolute left-14.5 z-50 rounded-md border px-2.5 py-1 text-xs whitespace-nowrap opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                  {item.label}
                </div>
              )}
            </div>

            {item.submenu &&
              !collapsed &&
              openSubmenus.includes(item.label) && (
                <div className="mt-0.5 space-y-0.5">
                  {item.submenu.map((sub) => (
                    <div
                      key={sub}
                      onClick={() => setActiveItem(sub)}
                      className={`flex h-8 cursor-pointer items-center rounded-md pr-2 pl-9 text-[13px] transition-colors ${
                        activeItem === sub
                          ? "text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-card-foreground"
                      }`}
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}

        {!collapsed && (
          <p className="text-muted-foreground px-2 pt-3 pb-1.5 text-[11px] font-medium tracking-wider">
            SISTEMA
          </p>
        )}
        {collapsed && <div className="h-2" />}

        {NAV_SYSTEM.map((item) => (
          <div
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`group relative flex h-9 cursor-pointer items-center gap-2.5 rounded-md px-2 transition-colors ${
              activeItem === item.label
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-card-foreground"
            }`}
          >
            <span className="flex min-w-5 items-center justify-center">
              {item.icon}
            </span>

            {!collapsed && (
              <>
                <span className="flex-1 text-[13.5px] whitespace-nowrap">
                  {item.label}
                </span>
                {item.badge && (
                  <span className="bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 text-[10px] font-medium">
                    {item.badge}
                  </span>
                )}
              </>
            )}

            {collapsed && (
              <div className="bg-card border-border text-card-foreground pointer-events-none absolute left-14.5 z-50 rounded-md border px-2.5 py-1 text-xs whitespace-nowrap opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                {item.label}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="border-border border-t p-2">
        <div className="hover:bg-muted flex cursor-pointer items-center gap-2.5 overflow-hidden rounded-md p-2 transition-colors">
          <div className="bg-primary/10 text-primary flex h-8 w-8 min-w-8 items-center justify-center rounded-full text-xs font-medium">
            JD
          </div>
          {!collapsed && (
            <>
              <div className="flex-1 overflow-hidden">
                <p className="text-card-foreground truncate text-[13px] font-medium">
                  João Dantas
                </p>
                <p className="text-muted-foreground truncate text-[11px]">
                  Administrador
                </p>
              </div>
              <MoreHorizontal
                size={15}
                className="text-muted-foreground shrink-0"
              />
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
