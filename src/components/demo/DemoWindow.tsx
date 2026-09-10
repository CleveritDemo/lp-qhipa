"use client";

import "./demoWindow.css";

interface DemoWindowProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
  workspaces?: { id: string; title: string }[];
  activeWorkspaceId?: string;
  onSelectWorkspace?: (id: string) => void;
  onAddWorkspace?: () => void;
  canAddWorkspace?: boolean;
  onCloseWorkspace?: (id: string) => void;
  canCloseWorkspace?: boolean;
  projectName?: string;
  orgName?: string;
  onNewTerminal?: () => void;
  canNewTerminal?: boolean;
  onAddAgent?: () => void;
}

function IconZoomOut() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35M8 11h6" />
    </svg>
  );
}

function IconZoomIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function IconFolder() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
    </svg>
  );
}

function IconUpload() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 16V4M8 8l4-4 4 4" />
      <path d="M4 20h16" />
    </svg>
  );
}

function IconRefresh() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a9 9 0 10-2.64 6.36" />
      <path d="M21 3v6h-6" />
    </svg>
  );
}

function IconLink() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 007.07 0l1.41-1.41a5 5 0 00-7.07-7.07L10 5" />
      <path d="M14 11a5 5 0 00-7.07 0L5.52 12.41a5 5 0 007.07 7.07L14 19" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function IconTrash() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 7h16" />
      <path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2" />
      <path d="M10 11v6M14 11v6" />
      <path d="M7 7l1 12a2 2 0 002 2h4a2 2 0 002-2l1-12" />
    </svg>
  );
}

function IconTerminal() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3M12 15h5" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
      <path d="M14 2v6h6M9 13h6M9 17h4" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function IconRobot() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v2" />
      <circle cx="12" cy="2" r="1" fill="currentColor" stroke="none" />
      <rect x="5" y="6" width="14" height="12" rx="3" />
      <circle cx="9" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <path d="M9 18h6" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function IconGrid() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function Sparkline() {
  return (
    <div className="demo-window__sparkline" aria-hidden="true">
      {Array.from({ length: 7 }, (_, i) => (
        <span key={i} className="demo-window__sparkline-bar" />
      ))}
    </div>
  );
}

export default function DemoWindow({
  children,
  footer,
  workspaces,
  activeWorkspaceId,
  onSelectWorkspace,
  onAddWorkspace,
  canAddWorkspace = true,
  onCloseWorkspace,
  canCloseWorkspace = true,
  projectName,
  orgName,
  onNewTerminal,
  canNewTerminal = true,
  onAddAgent,
}: DemoWindowProps) {
  return (
    <div className="demo-window demo-window--light">
      {/* Title bar */}
      <header className="demo-window__titlebar">
        <div className="demo-window__traffic-lights" aria-hidden="true">
          <span className="demo-window__light demo-window__light--red" />
          <span className="demo-window__light demo-window__light--amber" />
          <span className="demo-window__light demo-window__light--green" />
        </div>

        <h2 className="demo-window__wordmark">Qhipa Platform</h2>

        <div className="demo-window__titlebar-actions">
          <span className="demo-window__titlebar-icon" aria-hidden="true">
            <IconZoomOut />
          </span>
          <span className="demo-window__titlebar-icon" aria-hidden="true">
            <IconZoomIn />
          </span>
          <Sparkline />
          <span className="demo-window__theme">
            <span className="demo-window__theme-swatch" aria-hidden="true" />
            Light Mode
          </span>
          <span className="demo-window__time">20:22</span>
          <span className="demo-window__titlebar-icon" aria-hidden="true">
            <IconPeople />
          </span>
          <span className="demo-window__titlebar-icon" aria-hidden="true">
            <IconGear />
          </span>
        </div>
      </header>

      {/* Tab bar */}
      <nav className="demo-window__tabbar" aria-label="Workspace tabs">
        {!workspaces || workspaces.length === 0 ? (
          <div className="demo-window__tab">
            <span className="demo-window__tab-chevron" aria-hidden="true">
              &gt;_
            </span>
            Workspace 1
          </div>
        ) : (
          <>
            {workspaces.map((ws, index) => {
              const isActive = ws.id === activeWorkspaceId;
              return (
                <div
                  key={ws.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`demo-window__tab${isActive ? " demo-window__tab--active" : ""}`}
                  onClick={() => onSelectWorkspace?.(ws.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onSelectWorkspace?.(ws.id);
                    }
                  }}
                  tabIndex={0}
                >
                  <span className="demo-window__tab-icon" aria-hidden="true">
                    <IconTerminal />
                  </span>
                  <span className="demo-window__tab-title">{ws.title}</span>
                  <span className="demo-window__tab-number" aria-hidden="true">
                    {index + 1}
                  </span>
                  {onCloseWorkspace ? (
                    <span
                      className="demo-window__tab-close"
                      role="button"
                      aria-label="Cerrar pestaña"
                      aria-disabled={!canCloseWorkspace}
                      onClick={(event) => {
                        event.stopPropagation();
                        if (canCloseWorkspace) onCloseWorkspace(ws.id);
                      }}
                    >
                      <IconClose />
                    </span>
                  ) : null}
                </div>
              );
            })}
            {onAddWorkspace ? (
              <button
                type="button"
                className="demo-window__tab-add"
                aria-label="Añadir workspace"
                disabled={!canAddWorkspace}
                onClick={onAddWorkspace}
              >
                <IconPlus />
              </button>
            ) : null}
          </>
        )}
      </nav>

      {/* Action row */}
      <div className="demo-window__actions">
        <span className="demo-window__project-chip">
          <IconFolder />
          {projectName ?? "rimay-context-platform"}
        </span>
        <span className="demo-window__org-chip">
          {orgName ?? "Credicorp"}
          <span className="demo-window__org-caret" aria-hidden="true">
            ⌄
          </span>
        </span>
        <span className="demo-window__round-btn" aria-hidden="true">
          <IconRefresh />
        </span>
        <span className="demo-window__round-btn" aria-hidden="true">
          <IconUpload />
        </span>
        <span className="demo-window__round-btn" aria-hidden="true">
          <IconLink />
        </span>
        <div className="demo-window__actions-right">
          <span className="demo-window__round-btn" aria-hidden="true">
            <IconClock />
          </span>
          <span className="demo-window__round-btn" aria-hidden="true">
            <IconPlus />
          </span>
          <span className="demo-window__round-btn" aria-hidden="true">
            <IconTrash />
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="demo-window__body-wrap">
        <div className="demo-window__body">
          {/* Left rail */}
          <div className="demo-window__rail demo-window__rail--left" aria-hidden="true">
            <div className="demo-window__rail-panel">
              <span className="demo-window__rail-item demo-window__rail-item--active">
                <IconTerminal />
              </span>
              <span className="demo-window__rail-item"><IconLayers /></span>
              <span className="demo-window__rail-item"><IconDocument /></span>
              <span className="demo-window__rail-item"><IconGear /></span>
              <span className="demo-window__rail-item"><IconSearch /></span>
              <span className="demo-window__rail-item"><IconGrid /></span>
              <span className="demo-window__rail-item"><IconUpload /></span>
              <span className="demo-window__rail-item"><IconLink /></span>
            </div>
          </div>

          {/* Content */}
          <div className="demo-window__body-content">{children}</div>

          {/* Right rail */}
          <div className="demo-window__rail demo-window__rail--right" aria-hidden="true">
            <div className="demo-window__rail-panel">
              <span className="demo-window__context-chip demo-window__context-chip--1" />
              <span className="demo-window__context-chip demo-window__context-chip--2" />
              <span className="demo-window__context-chip demo-window__context-chip--3" />
              <span className="demo-window__context-chip demo-window__context-chip--4" />
              <span className="demo-window__rail-separator" />
              <span className="demo-window__rail-item">
                <IconPlus />
              </span>
            </div>
          </div>
        </div>

        {/* FABs */}
        <button
          type="button"
          className="demo-window__fab demo-window__fab--left"
          aria-label="Nueva terminal"
          disabled={!onNewTerminal || !canNewTerminal}
          onClick={() => onNewTerminal?.()}
        >
          <span className="demo-window__fab-terminal">&gt;_</span>
        </button>
        <button
          type="button"
          className="demo-window__fab demo-window__fab--right"
          aria-label="Añadir agente"
          disabled={!onAddAgent}
          onClick={() => onAddAgent?.()}
        >
          <IconRobot />
        </button>

        {/* Footer slot */}
        {footer ? <div className="demo-window__footer">{footer}</div> : null}
      </div>
    </div>
  );
}
