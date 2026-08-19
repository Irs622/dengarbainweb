import LegalLayout from '@/components/legal/LegalLayout';
import LegalHeader from '@/components/legal/LegalHeader';
import LegalPageIntro from '@/components/legal/LegalPageIntro';


export default function LicensePage() {
  return (
    <LegalLayout>
      <LegalHeader />

      <main className="w-full px-6 flex flex-col">
        <LegalPageIntro
          title="Open Source License"
          description="DengarBain is open-source software released under the MIT License."
        />
        <div
          style={{
            width: "calc(100% - 32px)",
            padding: "24px",
            margin: "16px 16px",
            position: "relative",
            background: "#E8F5EE",
            borderRadius: "48px",
            outline: "1px rgba(0, 53, 39, 0.10) solid",
            outlineOffset: "-1px",
            boxShadow: "0px 4px 20px -2px rgba(6, 78, 59, 0.05)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {/* Title */}
          <div
            style={{
              width: "100%",
              color: "#003527",
              fontFamily: "'Liberation Serif', serif",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "32px",
            }}
          >
            MIT License
          </div>

          {/* Copyright */}
          <div
            style={{
              width: "100%",
              color: "#404944",
              fontFamily: "'Liberation Serif', serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            Copyright (c) 2026 Irsal Shydiq &amp; Fardho Zurrahman
          </div>

          {/* License Content */}
          <div
            style={{
              width: "100%",
              paddingTop: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            {/* YOU MAY */}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  color: "#003527",
                  fontFamily: "'Liberation Serif', serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  lineHeight: "20px",
                  letterSpacing: "0.7px",
                }}
              >
                YOU MAY
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {[
                  "Use",
                  "Copy",
                  "Modify",
                  "Merge, Publish, Distribute",
                  "Sublicense, Sell",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        flexShrink: 0,
                        border: "1.5px solid #003527",
                        borderRadius: "50%",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          width: "4px",
                          height: "2px",
                          borderLeft: "1px solid #003527",
                          borderBottom: "1px solid #003527",
                          transform: "rotate(-45deg)",
                          left: "3px",
                          top: "3px",
                        }}
                      />
                    </span>

                    <span
                      style={{
                        color: "#1B1C1B",
                        fontFamily: "'Liberation Serif', serif",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "24px",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CONDITIONS */}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  color: "#416656",
                  fontFamily: "'Liberation Serif', serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  lineHeight: "20px",
                  letterSpacing: "0.7px",
                }}
              >
                CONDITIONS
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    marginTop: "4px",
                    flexShrink: 0,
                    border: "1.5px solid #416656",
                    borderRadius: "50%",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "4px",
                      top: "2px",
                      color: "#416656",
                      fontFamily: "Arial, sans-serif",
                      fontSize: "8px",
                      fontWeight: 700,
                    }}
                  >
                    i
                  </span>
                </span>

                <p
                  style={{
                    margin: 0,
                    color: "#1B1C1B",
                    fontFamily: "'Liberation Serif', serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                  }}
                >
                  Include copyright and permission notice
                  <br />
                  in all copies or substantial portions of the
                  <br />
                  software.
                </p>
              </div>
            </div>
          </div>
        </div>

          {/* Card 1: MIT License */}
          <div
            style={{
              minHeight: "145px",
              boxSizing: "border-box",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              backgroundColor: "#FFFFFF",
              borderRadius: "48px",
              width: "calc(100% - 32px)",
            padding: "24px",
            margin: "16px 16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            {/* Title */}
            <div
              style={{
                width: "100%",
                color: "#003527",
                fontFamily: "'Liberation Serif', serif",
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "32px",
              }}
            >
              Full License
            </div>

            <div
              className="flex flex-col gap-6 text-[13px] leading-relaxed text-[#2D2D2D]"
              style={{
                fontFamily: "monospace",
              }}
            >
              <p className="font-medium text-black">MIT License</p>

              <p>
                Copyright (c) 2026 Irsal Shydiq &amp;<br />
                Fardho Zurrahman
              </p>

              <p>
                Permission is hereby granted, free of charge, to any person obtaining
                a copy of this software and associated documentation files (the
                &quot;Software&quot;), to deal in the Software without restriction,
                including without limitation the rights to use, copy, modify, merge,
                publish, distribute, sublicense, and/or sell copies of the Software,
                and to permit persons to whom the Software is furnished to do so,
                subject to the following conditions:
              </p>

              <p>
                The above copyright notice and this permission notice shall be included
                in all copies or substantial portions of the Software.
              </p>

              <p className="uppercase">
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
                LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
                ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
                IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
              </p>
            </div>
          </div>

          {/* Card 2: Source Code */}
          <div
            style={{
              minHeight: "145px",
              boxSizing: "border-box",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              backgroundColor: "#FFFFFF",
              borderRadius: "48px",
              width: "calc(100% - 32px)",
            padding: "24px",
            margin: "16px 16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <h2 className="font-playfair text-[26px] font-semibold text-[#003527]">
              Source Code
            </h2>

            <p className="max-w-[320px] font-serif text-[15px] leading-snug text-[#4A5550]">
              DengarBain is an open-source project. You can view the source code, explore the project, and contribute through its GitHub repository.
            </p>

            <a
              href="https://github.com/Irs622/dengarbainweb"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "100%",
                height: "56px",
                borderRadius: "30px",
                backgroundColor: "#003F2F",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                fontFamily: "Georgia, serif",
                fontSize: "1rem",
                fontWeight: 700,
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}
            >
              View Source Code on GitHub
            </a>
          </div>
      </main>
    </LegalLayout>
  );
}