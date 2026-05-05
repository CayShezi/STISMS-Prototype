export const prototypeHighlights = [
  "Separate prototype repository for stakeholder demos",
  "Clickable role journeys across web and mobile surfaces",
  "Compliance-first regulator experience with archive-safe notice flows",
  "School transport, payments, telemetry, and panic moments in one story"
];

export const prototypeRoles = [
  {
    id: "regulator",
    label: "Regulator",
    platform: "Web Control Room",
    stage: "Compliance-focused prototype",
    tagline: "Oversight narrowed to ranks, associations, roadworthy status, and renewal notices.",
    summary:
      "The regulator prototype avoids operations clutter and centers the work on filtered taxi visibility, document health, and controlled notification actions.",
    metrics: [
      { label: "Visible taxis", value: "24", detail: "Filtered by rank and association." },
      { label: "Roadworthy risk", value: "6", detail: "Require action this week." },
      { label: "Archived notices", value: "12", detail: "Kept for traceability." }
    ],
    journey: [
      {
        title: "Choose a scope",
        detail: "Filter by taxi association or rank before seeing any compliance cards.",
        status: "Current"
      },
      {
        title: "Inspect a fleet slice",
        detail: "Review roadworthy status, expiring documents, and attention counts.",
        status: "Next"
      },
      {
        title: "Send renewal notice",
        detail: "Notify the linked association and owner from one compliance action.",
        status: "Next"
      },
      {
        title: "Archive safely",
        detail: "Restore archived notices when needed, but keep protected records undeletable.",
        status: "Guardrail"
      }
    ],
    notes: [
      "Prototype assumption: one regulator session can compare multiple associations without entering payment or panic operations.",
      "Archive-only messages deliberately stay non-destructible when they represent compliance evidence.",
      "The concept favors high-signal cards over dense data tables."
    ],
    screens: [
      {
        title: "Compliance overview",
        mode: "desktop",
        summary: "A filtered overview of taxis that need roadworthy or permit attention.",
        panels: [
          { label: "Association", value: "Gauteng Taxi Association" },
          { label: "Taxi rank", value: "Maponya Rank" },
          { label: "Hot risk", value: "Missing roadworthy certificate" }
        ],
        actions: ["Filter taxis", "Open taxi summary", "Compare expiring documents"],
        notes: [
          "Cards are grouped by compliance urgency.",
          "Only relevant taxi records stay visible."
        ]
      },
      {
        title: "Taxi document summary",
        mode: "desktop",
        summary: "A per-taxi breakdown of roadworthy, permits, and upcoming expiries.",
        panels: [
          { label: "Taxi", value: "JHB 458 GP" },
          { label: "Roadworthy", value: "Expiring on 2026-05-15" },
          { label: "Document stack", value: "Permit, operating license, route approval" }
        ],
        actions: ["Open history", "Prepare renewal alert", "Review archive note"],
        notes: [
          "This surface gives the regulator enough detail without drifting into owner operations."
        ]
      },
      {
        title: "Archived compliance notices",
        mode: "desktop",
        summary: "Protected archived notices can be restored but not permanently removed.",
        panels: [
          { label: "Archived card", value: "Compliance renewal needed for JHB 458 GP" },
          { label: "Delete policy", value: "Archive only for traceability" },
          { label: "Restore path", value: "Move back to active regulator card" }
        ],
        actions: ["Restore notice", "Read protection reason"],
        notes: [
          "This screen mirrors the new archive rules from the main product."
        ]
      }
    ]
  },
  {
    id: "association",
    label: "Association",
    platform: "Web Operations Desk",
    stage: "Rank operations prototype",
    tagline: "Queue control, dispatch readiness, and taxi flow without learner boarding ownership.",
    summary:
      "The association prototype keeps the rank team focused on queue movement, passenger registration, and dispatch enforcement while leaving learner boarding to drivers.",
    metrics: [
      { label: "Ready taxis", value: "8", detail: "Fully paid and ready for release." },
      { label: "Blocked dispatches", value: "3", detail: "Outstanding fares still exist." },
      { label: "Queue pulse", value: "74%", detail: "Healthy movement across key ranks." }
    ],
    journey: [
      {
        title: "Watch the rank",
        detail: "See which taxis are boarding, blocked, or ready to depart.",
        status: "Current"
      },
      {
        title: "Register passenger",
        detail: "Add a rider to the right taxi manifest for payment activation.",
        status: "Next"
      },
      {
        title: "Release the taxi",
        detail: "Dispatch only when the manifest and payment conditions are satisfied.",
        status: "Decision"
      },
      {
        title: "Track exceptions",
        detail: "Archive routine notices while keeping the dispatch evidence visible.",
        status: "Guardrail"
      }
    ],
    notes: [
      "The association surface intentionally excludes learner boarding and parent linking actions.",
      "Prototype cards explain why a taxi is blocked instead of just showing a red state."
    ],
    screens: [
      {
        title: "Rank flow board",
        mode: "desktop",
        summary: "A live queue board with boarding, blocked, and released taxi states.",
        panels: [
          { label: "Boarding now", value: "TX-101, TX-204" },
          { label: "Blocked reason", value: "Outstanding parent fare" },
          { label: "Queue alert", value: "Pretoria CBD building up" }
        ],
        actions: ["Open manifest", "See payment blockers", "Prepare dispatch"],
        notes: ["The board favors state clarity over crowded analytics."]
      },
      {
        title: "Passenger registration",
        mode: "desktop",
        summary: "A compact assignment flow that activates passenger payment access.",
        panels: [
          { label: "Passenger", value: "Lerato Shezi" },
          { label: "Taxi registration", value: "JHB 458 GP" },
          { label: "Route", value: "Soweto to Midrand" }
        ],
        actions: ["Assign to taxi", "Preview fare", "Return to queue"],
        notes: ["The design is optimized for fast rank-side execution."]
      },
      {
        title: "Dispatch release",
        mode: "desktop",
        summary: "A final release panel with payment readiness and underfilled-taxi reasoning.",
        panels: [
          { label: "Manifest paid", value: "14 of 14" },
          { label: "Seats filled", value: "14 / 16" },
          { label: "Release note", value: "School run exception approved" }
        ],
        actions: ["Release taxi", "Keep blocked", "Archive routine notice"],
        notes: ["A release reason becomes mandatory for underfilled departures."]
      }
    ]
  },
  {
    id: "driver",
    label: "Driver",
    platform: "Mobile Driver Workspace",
    stage: "School-run prototype",
    tagline: "Learner assignment, boarding confirmation, and phone telemetry in one guided mobile flow.",
    summary:
      "The driver prototype concentrates on the assigned taxi, making learner registration, boarding PIN confirmation, and phone-based telemetry feel like one continuous route workflow.",
    metrics: [
      { label: "Assigned taxi", value: "JHB 458 GP", detail: "Single-taxi driver scope." },
      { label: "Boarding queue", value: "5", detail: "Learners still waiting to board." },
      { label: "Telemetry mode", value: "Live", detail: "Phone acting as the taxi signal." }
    ],
    journey: [
      {
        title: "Start the shift",
        detail: "Open the assigned taxi workspace and confirm the route.",
        status: "Current"
      },
      {
        title: "Register learners",
        detail: "Pull parent-created learner records into the taxi manifest.",
        status: "Next"
      },
      {
        title: "Confirm boarding",
        detail: "Use the learner PIN only on candidates assigned to that taxi.",
        status: "Checkpoint"
      },
      {
        title: "Broadcast telemetry",
        detail: "Let the phone stream location and motion while the trip is active.",
        status: "Live"
      }
    ],
    notes: [
      "The mobile concept mirrors the production cleanup that hides already-boarded learners from the boarding list.",
      "Telemetry remains foreground-friendly in the prototype while still showing the background build option."
    ],
    screens: [
      {
        title: "Assigned taxi home",
        mode: "mobile",
        summary: "A focused driver home screen centered on one taxi and one route.",
        panels: [
          { label: "Route", value: "Soweto to Midrand Primary" },
          { label: "Learners boarded", value: "9 / 14" },
          { label: "Telemetry", value: "Phone source connected" }
        ],
        actions: ["Open manifest", "Start telemetry", "View route map"],
        notes: ["No cross-fleet clutter appears in the driver view."]
      },
      {
        title: "Learner boarding",
        mode: "mobile",
        summary: "Only valid boarding candidates appear, with PIN confirmation and parent visibility.",
        panels: [
          { label: "Learner", value: "Anele Dube" },
          { label: "Assigned taxi", value: "JHB 458 GP" },
          { label: "Status", value: "Awaiting boarding" }
        ],
        actions: ["Enter PIN", "Confirm boarding", "Trigger parent notice"],
        notes: ["This avoids the earlier confusion around unassigned learners."]
      },
      {
        title: "Phone telemetry mode",
        mode: "mobile",
        summary: "A lightweight telemetry panel that turns the phone into a route signal source.",
        panels: [
          { label: "GPS speed", value: "68 km/h" },
          { label: "Route deviation", value: "0.2 km" },
          { label: "Panic state", value: "Standby" }
        ],
        actions: ["Start live stream", "Switch to background build", "Open map trail"],
        notes: ["The prototype keeps the concept clear without needing hardware integration."]
      }
    ]
  },
  {
    id: "owner",
    label: "Owner",
    platform: "Web Fleet Console",
    stage: "Finance and compliance prototype",
    tagline: "A fleet owner view focused on taxis, payments, documents, and safe archive actions.",
    summary:
      "The owner prototype turns the operational data into a cleaner business surface: fleet posture, document readiness, parent payments, and protected archive behavior.",
    metrics: [
      { label: "Fleet revenue", value: "R 42 800", detail: "Current month projection." },
      { label: "Expiring docs", value: "4", detail: "Across permits and roadworthy files." },
      { label: "Archive cleanup", value: "2", detail: "Deletable non-critical cards available." }
    ],
    journey: [
      {
        title: "Review fleet health",
        detail: "Scan the registrations, routes, and live risk summaries.",
        status: "Current"
      },
      {
        title: "Check payments",
        detail: "Separate school transport parent fees from normal passenger activity.",
        status: "Next"
      },
      {
        title: "Upload documents",
        detail: "Keep roadworthy and permit sets current for regulator visibility.",
        status: "Next"
      },
      {
        title: "Use archive controls",
        detail: "Delete only non-protected cards while finance-linked notices remain archive-only.",
        status: "Guardrail"
      }
    ],
    notes: [
      "The owner prototype is where the new archive-vs-delete explanation is easiest to demonstrate.",
      "Taxi registration numbers stay front-and-center instead of internal taxi IDs."
    ],
    screens: [
      {
        title: "Fleet snapshot",
        mode: "desktop",
        summary: "A clean owner console with registrations, route posture, and revenue by taxi.",
        panels: [
          { label: "Taxi registration", value: "JHB 458 GP" },
          { label: "Route state", value: "En route to school run" },
          { label: "Wallet balance", value: "R 4 210" }
        ],
        actions: ["Open taxi card", "Upload document", "Review payments"],
        notes: ["The screen is meant for quick owner decisions instead of line-by-line administration."]
      },
      {
        title: "Document tracker",
        mode: "desktop",
        summary: "A document panel that stays understandable to both owners and regulators.",
        panels: [
          { label: "Roadworthy", value: "Expiring soon" },
          { label: "Operating permit", value: "Valid" },
          { label: "Association link", value: "Gauteng Taxi Association" }
        ],
        actions: ["Add new document", "See regulator note", "Archive reminder"],
        notes: ["This is a good stakeholder screen for demonstrating compliance alignment."]
      },
      {
        title: "Archive behavior",
        mode: "desktop",
        summary: "A side-by-side explanation of protected versus deletable archived cards.",
        panels: [
          { label: "Protected notice", value: "Parent payment overdue" },
          { label: "Deletable alert", value: "Minor route deviation resolved" },
          { label: "Policy", value: "Traceability first" }
        ],
        actions: ["Restore finance notice", "Delete resolved alert"],
        notes: ["This mirrors the production archive logic without exposing implementation detail."]
      }
    ]
  },
  {
    id: "parent",
    label: "Parent",
    platform: "Mobile Parent App",
    stage: "Family safety prototype",
    tagline: "Parent trust built around learner status, monthly billing, and panic-friendly visibility.",
    summary:
      "The parent prototype is intentionally reassuring: clear learner status, transport assignment, billing, and emergency escalation without backend complexity leaking into the experience.",
    metrics: [
      { label: "Learner status", value: "Boarded", detail: "Latest school-run check-in." },
      { label: "Invoice state", value: "Due 05 May", detail: "Monthly school transport fee." },
      { label: "Support path", value: "1 tap", detail: "Panic and contact visibility." }
    ],
    journey: [
      {
        title: "Register learner",
        detail: "Create a child profile and school transport details.",
        status: "Current"
      },
      {
        title: "Wait for assignment",
        detail: "The driver links the learner to a taxi and route.",
        status: "Next"
      },
      {
        title: "Track the run",
        detail: "See boarding, trip status, and live safety updates.",
        status: "Live"
      },
      {
        title: "Settle monthly fee",
        detail: "Open a simple monthly payment flow when the invoice is due.",
        status: "Monthly"
      }
    ],
    notes: [
      "The parent concept should feel calmer and more guided than the operations roles.",
      "The prototype keeps jargon out of the billing and panic flows."
    ],
    screens: [
      {
        title: "Learner home",
        mode: "mobile",
        summary: "A child-centric home screen with route, boarding, and contact confidence.",
        panels: [
          { label: "Learner", value: "Anele Dube" },
          { label: "Assigned taxi", value: "JHB 458 GP" },
          { label: "Next update", value: "Arriving in 12 min" }
        ],
        actions: ["Track trip", "View driver notice", "Open panic support"],
        notes: ["Status changes are written in plain language."]
      },
      {
        title: "Monthly billing",
        mode: "mobile",
        summary: "A simpler invoice view built around clarity and reassurance.",
        panels: [
          { label: "Amount due", value: "R 850" },
          { label: "Due date", value: "05 May 2026" },
          { label: "Payment mode", value: "Sandbox and card concept" }
        ],
        actions: ["Pay now", "View breakdown", "Archive reminder"],
        notes: ["The parent never needs to understand the fleet internals to pay."]
      },
      {
        title: "Safety help sheet",
        mode: "mobile",
        summary: "A clear panic and escalation panel with ownership and association visibility.",
        panels: [
          { label: "Emergency state", value: "Standby" },
          { label: "Taxi contact", value: "Driver and association shown" },
          { label: "Escalation", value: "Owner and association notified" }
        ],
        actions: ["Send panic", "Call driver", "Read safety notes"],
        notes: ["The prototype highlights trust and response rather than panic mechanics."]
      }
    ]
  },
  {
    id: "passenger",
    label: "Passenger",
    platform: "Mobile Passenger App",
    stage: "Trip safety prototype",
    tagline: "Live taxi visibility, digital fares, and direct reassurance for everyday riders.",
    summary:
      "The passenger concept is a lighter cousin of the parent flow, with trip assignment, route tracking, and easy payment access once the association adds the rider to a manifest.",
    metrics: [
      { label: "Assigned route", value: "Soweto to Midrand", detail: "Manifested by the rank team." },
      { label: "Fare mode", value: "Digital", detail: "Payment unlocked after registration." },
      { label: "Safety view", value: "Live", detail: "Taxi map and panic tools visible." }
    ],
    journey: [
      {
        title: "Get assigned",
        detail: "The association adds the passenger to the taxi manifest.",
        status: "Current"
      },
      {
        title: "Review trip",
        detail: "See the route, ETA, and taxi registration before departure.",
        status: "Next"
      },
      {
        title: "Pay digitally",
        detail: "Complete the fare through the mobile payment flow.",
        status: "Next"
      },
      {
        title: "Stay protected",
        detail: "Use panic and live tracking tools while the trip is active.",
        status: "Live"
      }
    ],
    notes: [
      "The passenger surface is intentionally faster and flatter than the parent view.",
      "Taxi registration replaces internal IDs everywhere in the prototype."
    ],
    screens: [
      {
        title: "Trip assignment",
        mode: "mobile",
        summary: "A passenger home with route identity and taxi confidence.",
        panels: [
          { label: "Taxi registration", value: "JHB 458 GP" },
          { label: "Queue state", value: "Boarding at Maponya Rank" },
          { label: "ETA", value: "11 minutes" }
        ],
        actions: ["View map", "Open fare", "Send panic"],
        notes: ["Everything on this screen supports quick comprehension while moving."]
      },
      {
        title: "Fare payment",
        mode: "mobile",
        summary: "A short payment path with clear trip context and confirmation steps.",
        panels: [
          { label: "Route fare", value: "R 24" },
          { label: "Method", value: "Wallet, card, QR" },
          { label: "Status", value: "Ready for checkout" }
        ],
        actions: ["Pay fare", "Open simulator", "Return to trip"],
        notes: ["The prototype keeps fare payment close to the trip rather than burying it."]
      },
      {
        title: "Safety panel",
        mode: "mobile",
        summary: "A compact route safety panel with direct access to help.",
        panels: [
          { label: "Live speed", value: "72 km/h" },
          { label: "Deviation", value: "0.1 km" },
          { label: "Panic access", value: "Always visible" }
        ],
        actions: ["Report concern", "Send panic", "Open support"],
        notes: ["This is intentionally more direct than the admin or owner surfaces."]
      }
    ]
  },
  {
    id: "admin",
    label: "Admin",
    platform: "Web Platform Desk",
    stage: "Provisioning prototype",
    tagline: "User creation, role assignment, and trust controls without operational overload.",
    summary:
      "The admin prototype shows how the platform team creates users, protects the last admin, and keeps password reset workflows understandable.",
    metrics: [
      { label: "Platform users", value: "128", detail: "Across all role types." },
      { label: "Pending setups", value: "7", detail: "Profiles awaiting first completion." },
      { label: "Reset actions", value: "3", detail: "Password help issued today." }
    ],
    journey: [
      {
        title: "Create account",
        detail: "Add a user with a temporary password and the right role.",
        status: "Current"
      },
      {
        title: "Protect access",
        detail: "Keep the last remaining admin from being removed.",
        status: "Guardrail"
      },
      {
        title: "Reset safely",
        detail: "Use guided admin reset or self-service token flow.",
        status: "Support"
      },
      {
        title: "Audit everything",
        detail: "Track identity changes without cluttering operational teams.",
        status: "Always"
      }
    ],
    notes: [
      "This prototype is useful for presenting governance strength, not just UX polish.",
      "Admin screens should feel clear and serious, but not intimidating."
    ],
    screens: [
      {
        title: "User provisioning",
        mode: "desktop",
        summary: "A creation panel for owners, drivers, parents, regulators, and more.",
        panels: [
          { label: "Role mix", value: "Owner, driver, parent, regulator" },
          { label: "Temporary password", value: "Set during invite" },
          { label: "Profile state", value: "Awaiting first login" }
        ],
        actions: ["Create account", "Change role", "Review profile state"],
        notes: ["The prototype emphasizes clarity over admin density."]
      },
      {
        title: "Password support",
        mode: "desktop",
        summary: "A support-oriented reset flow with clear delivery expectations.",
        panels: [
          { label: "Reset mode", value: "Admin or self-service" },
          { label: "Email provider", value: "SMTP and preview aware" },
          { label: "Follow-up", value: "Audit log recorded" }
        ],
        actions: ["Send reset", "Check audit", "Return to users"],
        notes: ["Good for demonstrating system maturity to examiners or stakeholders."]
      },
      {
        title: "Governance overview",
        mode: "desktop",
        summary: "A compact admin posture screen with role counts and last-admin protection.",
        panels: [
          { label: "Admins active", value: "2" },
          { label: "Last-admin rule", value: "Protected" },
          { label: "Audit freshness", value: "Live" }
        ],
        actions: ["Open audit log", "Review recent changes"],
        notes: ["The platform story remains strong without stealing space from product workflows."]
      }
    ]
  }
];
