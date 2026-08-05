/**
 * SuddenlySpaces Header Component
 * Matches the Figma design: 70px height, 40px horizontal padding,
 * bottom border #f4f4f4, Montserrat font, black pill CTA button.
 * Background: green (#00ff00). Pill button text: red (#FF0000).
 */

export function SuddenlySpacesHeader() {
  return (
    <header
      style={{
        backgroundColor: "#00ff00",
        borderBottom: "1px solid #f4f4f4",
        height: "70px",
        paddingLeft: "40px",
        paddingRight: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "'Montserrat', sans-serif",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <a
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
          color: "#000000",
        }}
      >
        {/* Logo icon — inline SVG from Figma asset */}
        <svg
          width="26"
          height="26"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g clipPath="url(#clip0_header)">
            <path
              d="M7.26018 4.90608L12 0.16626H5.34665L1.7472 3.76571V10.0855L0 11.8321H6.65354L10.2534 8.23248V4.90589H7.26018V4.90608ZM1.98314 9.84971V7.02343L8.60437 0.402198H11.4306C10.3172 1.51561 4.85926 6.97358 1.98314 9.84971ZM5.44449 0.402198H8.27095L1.98314 6.68983V3.86337L5.44449 0.402198ZM7.02443 5.14201H9.85071L3.39618 11.5965H0.568615L7.02425 5.14201H7.02443ZM6.55588 11.5965H3.7296L10.0172 5.30872V8.135L6.55569 11.5965H6.55588Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_header">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {/* Wordmark */}
        <span
          style={{
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#000000",
            lineHeight: "1",
          }}
        >
          SUDDENLY<span style={{ fontWeight: 400 }}>SPACES</span>
        </span>
      </a>

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
        aria-label="Main navigation"
      >
        {/* Switch to Tenant */}
        <a
          href="#"
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#000000",
            textDecoration: "none",
            lineHeight: "24px",
            whiteSpace: "nowrap",
          }}
        >
          Switch to Tenant
        </a>

        {/* List Your Space — black pill button */}
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000",
            color: "#FF0000",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "24px",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "6px",
            paddingBottom: "6px",
            borderRadius: "1000px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          List Your Space
        </a>

        {/* Language selector */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontFamily: "'Plus Jakarta Sans', 'Montserrat', sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "#000000",
            lineHeight: "14px",
          }}
          aria-label="Select language"
        >
          {/* US flag inline SVG */}
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="20" height="15" fill="#B22234" rx="1" />
            <rect y="1.15" width="20" height="1.15" fill="white" />
            <rect y="2.31" width="20" height="1.15" fill="#B22234" />
            <rect y="3.46" width="20" height="1.15" fill="white" />
            <rect y="4.62" width="20" height="1.15" fill="#B22234" />
            <rect y="5.77" width="20" height="1.15" fill="white" />
            <rect y="6.92" width="20" height="1.15" fill="#B22234" />
            <rect y="8.08" width="20" height="1.15" fill="white" />
            <rect y="9.23" width="20" height="1.15" fill="#B22234" />
            <rect y="10.38" width="20" height="1.15" fill="white" />
            <rect y="11.54" width="20" height="1.15" fill="#B22234" />
            <rect y="12.69" width="20" height="1.15" fill="white" />
            <rect width="8" height="8.08" fill="#3C3B6E" />
          </svg>
          EN
        </button>

        {/* Sign Up */}
        <a
          href="#"
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#1c252e",
            textDecoration: "none",
            lineHeight: "24px",
            whiteSpace: "nowrap",
          }}
        >
          Sign Up
        </a>

        {/* Login */}
        <a
          href="#"
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#1c252e",
            textDecoration: "none",
            lineHeight: "24px",
            whiteSpace: "nowrap",
          }}
        >
          Login
        </a>
      </nav>
    </header>
  );
}
