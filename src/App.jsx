import React, { startTransition, useMemo, useState } from "react";
import { prototypeRoles } from "./prototypeData.js";

const totalScenes = prototypeRoles.reduce((count, role) => count + role.screens.length, 0);
const heroStats = [
  { label: "Roles", value: String(prototypeRoles.length).padStart(2, "0") },
  { label: "Scenes", value: String(totalScenes).padStart(2, "0") },
  { label: "Surfaces", value: "Web + Mobile" }
];
const heroTags = ["Compliance", "Operations", "Transport", "Payments", "Safety"];

function RoleButton({ role, isActive, onSelect }) {
  return (
    <button
      type="button"
      className={`role-button${isActive ? " active" : ""}`}
      onClick={() => onSelect(role.id)}
      aria-pressed={isActive}
    >
      <span className="role-button-top">
        <span className="role-name">{role.label}</span>
        <span className="role-count">{String(role.screens.length).padStart(2, "0")}</span>
      </span>
      <span className="role-platform">{role.platform}</span>
    </button>
  );
}

function ScreenTabs({ role, activeIndex, onSelect }) {
  return (
    <div className="screen-tabs">
      {role.screens.map((screen, index) => (
        <button
          key={screen.title}
          type="button"
          className={`screen-tab${activeIndex === index ? " active" : ""}`}
          onClick={() => onSelect(index)}
          aria-pressed={activeIndex === index}
        >
          <span className="screen-tab-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="screen-tab-copy">
            <span className="screen-tab-title">{screen.title}</span>
            <span className="screen-tab-mode">{screen.mode === "mobile" ? "Mobile" : "Desktop"}</span>
          </span>
        </button>
      ))}
    </div>
  );
}

function PrototypeCanvas({ role, screen }) {
  const isMobile = screen.mode === "mobile";

  return (
    <section className="canvas-card">
      <div className="canvas-header">
        <div>
          <p className="eyebrow">Selected scene</p>
          <h3>{screen.title}</h3>
        </div>
        <span className={`canvas-mode${isMobile ? " mobile" : ""}`}>
          {isMobile ? "Mobile" : "Desktop"}
        </span>
      </div>

      <div className={`prototype-canvas ${isMobile ? "mobile" : "desktop"}`}>
        {isMobile ? (
          <div className="phone-shell">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="mockup-header">
                <span className="mockup-signal">9:41</span>
                <span className="mockup-chip">{role.label}</span>
              </div>
              <div className="mockup-hero">
                <p className="eyebrow">Live view</p>
                <h4>{screen.title}</h4>
              </div>
              <div className="mockup-stack">
                {screen.panels.map((panel) => (
                  <article className="mockup-tile" key={`${screen.title}-${panel.label}`}>
                    <span className="mockup-label">{panel.label}</span>
                    <strong>{panel.value}</strong>
                  </article>
                ))}
              </div>
              <div className="mockup-actions">
                {screen.actions.map((action) => (
                  <button type="button" key={action}>
                    {action}
                  </button>
                ))}
              </div>
              <div className="scene-footer">
                <span>{role.platform}</span>
                <span>{role.stage}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="dashboard-shell">
            <div className="dashboard-strip">
              {screen.panels.map((panel) => (
                <article className="dashboard-stat" key={`${screen.title}-${panel.label}`}>
                  <span>{panel.label}</span>
                  <strong>{panel.value}</strong>
                </article>
              ))}
            </div>
            <div className="dashboard-body">
              <article className="dashboard-panel emphasis">
                <p className="eyebrow">Focus</p>
                <h4>{screen.summary}</h4>
              </article>
              <article className="dashboard-panel">
                <p className="eyebrow">Primary actions</p>
                <div className="dashboard-actions">
                  {screen.actions.map((action) => (
                    <button type="button" key={action}>
                      {action}
                    </button>
                  ))}
                </div>
              </article>
            </div>
            <div className="scene-footer">
              <span>{role.platform}</span>
              <span>{role.stage}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default function App() {
  const [selectedRoleId, setSelectedRoleId] = useState("regulator");
  const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);

  const role = useMemo(
    () => prototypeRoles.find((entry) => entry.id === selectedRoleId) || prototypeRoles[0],
    [selectedRoleId]
  );
  const activeScreen = role.screens[selectedScreenIndex] || role.screens[0];

  function handleRoleSelect(roleId) {
    startTransition(() => {
      setSelectedRoleId(roleId);
      setSelectedScreenIndex(0);
    });
  }

  return (
    <div className="app-shell">
      <header className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">STISMS product prototype</p>
          <h1>Smart taxi safety, simplified.</h1>
          <p className="hero-text">
            A demo surface for compliance, rank operations, learner transport, payments, and trust.
          </p>
          <div className="hero-tags">
            {heroTags.map((tag) => (
              <span className="hero-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-stats">
          {heroStats.map((stat) => (
            <article className="hero-stat" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </div>
      </header>

      <div className="layout-grid">
        <aside className="role-rail">
          <div className="section-heading compact">
            <p className="eyebrow">Roles</p>
            <h2>Journeys</h2>
          </div>
          <div className="role-stack">
            {prototypeRoles.map((entry) => (
              <RoleButton
                key={entry.id}
                role={entry}
                isActive={entry.id === role.id}
                onSelect={handleRoleSelect}
              />
            ))}
          </div>
        </aside>

        <main className="content-column">
          <section className="summary-card">
            <div className="summary-head">
              <div>
                <p className="eyebrow">{role.stage}</p>
                <h2>{role.label}</h2>
                <p className="summary-tagline">{role.tagline}</p>
              </div>
              <span className="platform-chip">{role.platform}</span>
            </div>

            <div className="metric-grid">
              {role.metrics.map((metric) => (
                <article className="metric-card" key={`${role.id}-${metric.label}`}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <p>{metric.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="journey-card">
            <div className="section-heading compact">
              <p className="eyebrow">Core flow</p>
              <h2>{role.label}</h2>
            </div>
            <div className="journey-grid">
              {role.journey.map((step, index) => (
                <article className="journey-step" key={`${role.id}-${step.title}`}>
                  <span className="journey-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <span className="journey-status">{step.status}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="screen-board">
            <div className="section-heading compact">
              <p className="eyebrow">Scenes</p>
              <h2>Prototype screens</h2>
            </div>
            <ScreenTabs role={role} activeIndex={selectedScreenIndex} onSelect={setSelectedScreenIndex} />
            <PrototypeCanvas role={role} screen={activeScreen} />
          </section>
        </main>
      </div>
    </div>
  );
}
