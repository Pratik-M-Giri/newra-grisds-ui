import React from "react";

const cards = [
    {
        title: "Access & Onboarding",
        subtitle: "Entry into the system begins with qualification and configuration.",
        points: [
            "Eligibility, documentation, and structured checks are handled through standardized workflows",
            "Open Access, Green Energy (Open Access REOA), and Captive are configured seamlessly within the platform",
            "Activation timelines are reduced from months to weeks by eliminating bespoke onboarding",
        ],
        footer: "This creates a consistent starting point for all participants",
    },
    {
        title: "Structuring & Matching",
        subtitle: "Once onboarded, the platform aligns demand and generation within defined parameters.",
        points: [
            "Demand profiles are structured against suitable generation assets",
            "Hybrid configurations are applied where required to improve reliability",
            "Commercial terms are defined with transparent respective flows",
        ],
        footer: "This layer ensures that scale does not introduce instability.",
    },
    {
        title: "Compliance & Controls",
        subtitle: "Regulatory requirements are treated as system constraints, not exceptions.",
        points: [
            "Approvals, documentation, and filings are digitized to eliminate bottlenecks",
            "Status and dependencies are tracked continuously",
            "Predefined controls reduce reliance on manual interventions",
        ],
        footer: "This lowers regulatory exposure while maintaining audit readiness.",
    },
    {
        title: "Billing, Settlement & Reconciliation",
        subtitle: "Commercial execution follows defined settlement logic.",
        points: [
            "Energy accounting and reconciliation are automated against schedules",
            "Billing and settlement follow consistent, transparent processes",
            "Participants have visibility into charges, credits and invoices",
        ],
        footer: "Predictability at this layer supports cost planning & revenue assurance.",
    },
    {
        title: "Intelligence & Visibility",
        subtitle: "Operational confidence depends on usable information.",
        points: [
            "Generation and consumption performance are monitored continuously",
            "Insights are surfaced to support decisions, not overwhelm users",
            "Dashboards maintain system stability over time",
        ],
        footer: "Intelligence is functional, not ornamental.",
    },
];

const PlatformCards = () => {
    return (
        <div className="relative w-full -mt-20 py-20 overflow-hidden bg-[#F9FBFF]">

            {/* RIGHT SIDE SOFT GRADIENT */}
            <div
                className="absolute right-[-200px] top-0 w-[900px] h-[900px] pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(40,184,180,0.18) 0%, rgba(40,184,180,0) 70%)",
                    filter: "blur(120px)",
                }}
            />

            {/* GRID */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 relative z-10">

                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="
        backdrop-blur-2xl
        bg-white/80
        border border-[#E7EEF6]
        rounded-2xl
        p-8
      "
                        style={{
                            // boxShadow: "0 8px 24px rgba(20,40,80,0.06)",
                        }}
                    >

                        {/* TITLE */}
                        <h3 className="text-[22px] font-semibold text-[#0B1C3D] mb-2">
                            {card.title}
                        </h3>

                        {/* SUBTEXT (optional like screenshot) */}
                        {card.subtitle && (
                            <p className="text-[12px] text-[#050505] mb-6">
                                {card.subtitle}
                            </p>
                        )}

                        {/* LIST */}
                        <ul className="divide-y divide-[#E9EEF5] px-5">

                            {card.points.map((p, i) => (
                                <li
                                    key={i}
                                    className="flex gap-5 py-5 items-start text-[16px] text-[#050505] leading-relaxed font-medium"
                                >
                                    {/* BIG GLASS CHECK ICON */}
                                    <div
                                        className="
                                        w-10 h-10
                                        rounded-full
                                        flex items-center justify-center shrink-0
                                        bg-gradient-to-br
                                        from-[#FFFFFF]
                                        to-[#D4F1F0]
                                      "
                                    >
                                        <svg
                                            className="w-5 h-5 text-[#22C55E]"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>

                                    <span>{p}</span>
                                </li>
                            ))}

                        </ul>

                        {/* BOTTOM BLUE TEXT */}
                        {card.footer && (
                            <p
                                className="
                                           mt-6
                                           text-[15px]
                                           font-medium
                                           bg-gradient-to-r
                                           from-[#09193C]
                                           to-[#2D50A1]
                                           bg-clip-text
                                           text-transparent
                                          "
                            >
                                {card.footer}
                            </p>
                        )}
                    </div>
                ))}

            </div>
            <div
                style={{
                    position: "absolute",
                    width: "900px",
                    height: "900px",
                    top: "60%", // Adjusted top for visibility in this section
                    left: "-50px",
                    borderRadius: "182.5px",
                    background: "rgba(247, 144, 80, 1)",
                    filter: "blur(100px)", // 500px logic scaled for small container visibility
                    opacity: 0.1,
                    zIndex: 0
                }}
            />
        </div>
    );
};

export default PlatformCards;
