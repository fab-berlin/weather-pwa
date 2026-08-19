import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Weather @home PWA",
  description: "---",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="de"
      >
      <body>
      <section className="container mx-auto max-w-full md:max-w-2/3 pt-8 px-8 md:px-0">
        {children}
      </section>
      </body>
      </html>
  );
}
