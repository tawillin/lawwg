import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Willingham Law Group — Estate Planning, Probate & Elder Law";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          padding: "60px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              color: "#ca8a04",
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              fontFamily: "sans-serif",
              fontWeight: 600,
            }}
          >
            Willingham Law Group
          </div>
          <div
            style={{
              fontSize: "52px",
              color: "#ffffff",
              lineHeight: 1.2,
              maxWidth: "800px",
            }}
          >
            Estate Planning, Probate &amp; Elder Law
          </div>
          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "#ca8a04",
              marginTop: "8px",
            }}
          />
          <div
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.6)",
              fontFamily: "sans-serif",
              marginTop: "8px",
            }}
          >
            Serving McKinney, Southlake &amp; the Dallas-Fort Worth Metroplex
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "40px",
          }}
        >
          {[
            { n: "6,000+", l: "Trusts" },
            { n: "10,000+", l: "Wills" },
            { n: "2,000+", l: "Probates" },
            { n: "350+", l: "5-Star Reviews" },
          ].map((stat) => (
            <div
              key={stat.l}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "28px",
                  color: "#ca8a04",
                  fontWeight: 700,
                }}
              >
                {stat.n}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "sans-serif",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                }}
              >
                {stat.l}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "60px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.4)",
            fontFamily: "sans-serif",
          }}
        >
          lawwg.com &bull; 214-250-4407
        </div>
      </div>
    ),
    { ...size }
  );
}
