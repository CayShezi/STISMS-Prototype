import { startTransition, useMemo, useState } from "react";
import { prototypeHighlights, prototypeRoles } from "./prototypeData.js";

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
        <span className="role-platform">{role.platform}</span>
      </span>
      <span className="role-tagline">{role.tagline}</span>
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
          <span className="screen-tab-title">{screen.title}</span>
          <span className="screen-tab-mode">{screen.mode === "mobile" ? "Mobile concept" : "Desktop concept"}</span>
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
          <p className="eyebrow">Active prototype surface</p>
          <h3>{screen.title}</h3>
          <p>{screen.summary}</p>
        </div>
        <span className={`canvas-mode${isMobile ? " mobile" : ""}`}>
          {isMobile ? "Mobile storyboard" : "Dashboard storyboard"}
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
                <p className="eyebrow">STISMS Prototype</p>
                <h4>{screen.title}</h4>
                <p>{role.tagline}</p>
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
              <div className="mockup-footer">
                <span>Home</span>
                <span>Journey</span>
                <span>Alerts</span>
                <span>Profile</span>
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
              <div className="dashboard-column">
                <article className="dashboard-panel emphasis">
                  <p className="eyebrow">Primary decision panel</p>
                  <h4>{screen.title}</h4>
                  <p>{screen.summary}</p>
                </article>
                <article className="dashboard-panel">
                  <p className="eyebrow">Prototype actions</p>
                  <div className="dashboard-actions">
                    {screen.actions.map((action) => (
                      <button type="button" key={action}>
                        {action}
                      </button>
                    ))}
                  </div>
                </article>
              </div>
              <div className="dashboard-column">
                <article className="dashboard-panel">
                  <p className="eyebrow">Storyboard notes</p>
                  <ul className="note-list">
                    {screen.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </article>
              </div>
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
          <p className="eyebrow">STISMS clickable prototype</p>
          <h1>One project story, rebuilt as a presentation-friendly prototype.</h1>
          <p className="hero-text">
            This separate prototype focuses on demonstrating the STISMS concept with clean role journeys,
            calmer storytelling, and screens that are easy to present to lecturers, stakeholders, and testers.
          </p>
        </div>
        <div className="hero-grid">
          {prototypeHighlights.map((highlight) => (
            <div className="hero-pill" key={highlight}>
              {highlight}
            </div>
          ))}
        </div>
      </header>

      <div className="layout-grid">
        <aside className="role-rail">
          <div className="section-heading">
            <p className="eyebrow">Prototype roles</p>
            <h2>Choose a journey</h2>
            <p>
              Each role view focuses on the part of STISMS that matters most to that persona.
            </p>
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
            <div className="section-heading">
              <p className="eyebrow">{role.stage}</p>
              <h2>{role.label}</h2>
              <p>{role.summary}</p>
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
            <div className="section-heading">
              <p className="eyebrow">Journey map</p>
              <h2>{role.label} workflow prototype</h2>
            </div>
            <div className="journey-grid">
              {role.journey.map((step) => (
                <article className="journey-step" key={`${role.id}-${step.title}`}>
                  <span className="journey-status">{step.status}</span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="screen-board">
            <div className="section-heading">
              <p className="eyebrow">Screen set</p>
              <h2>Open a prototype scene</h2>
              <p>
                Switch between the key screens we would use in a demo walkthrough for this role.
              </p>
            </div>
            <ScreenTabs role={role} activeIndex={selectedScreenIndex} onSelect={setSelectedScreenIndex} />
            <PrototypeCanvas role={role} screen={activeScreen} />
          </section>

          <section className="notes-card">
            <div className="section-heading">
              <p className="eyebrow">Prototype notes</p>
              <h2>Design and product assumptions</h2>
            </div>
            <div className="notes-grid">
              {role.notes.map((note) => (
                <article className="note-card" key={note}>
                  <p>{note}</p>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
