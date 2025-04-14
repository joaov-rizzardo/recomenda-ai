import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Recomenda Ai",
  description:
    "Não perca tempo procurando o que assistir hoje, em nosso aplicativo você pode receber uma indicação perfeita com apenas alguns cliquesPare de perder tempo decidindo o que assistir. No nosso app, você recebe a sugestão perfeita em apenas alguns cliques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${anton.variable}
          ${montserrat.variable}
          w-dvw h-dvh overflow-hidden
        `}
        style={{
          backgroundImage:
            "url('/images/BR-pt-20250331-TRIFECTA-perspective_157f81c2-fd41-421a-8b02-2253912e12e2_large.jpg')",
        }}
      >
        <div className="bg-gradient-to-br from-black/80 to-black/70 w-full h-full flex justify-center items-center flex-col overflow-y-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
