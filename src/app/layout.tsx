import type {Metadata} from "next";
import "./globals.css";

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
      <html lang="de" >
          <body className="">
          <div className="fixed inset-0 -z-10">
              <img
                  src="/assets/backgrounds/Flow2.jpg"
                  alt=""
                  className="h-full w-full object-cover brightness-50 saturate-200"
              />
          </div>
              <main>
                  <section className="container mx-auto max-w-full md:max-w-2/3 pt-4 px-8 md:px-0 relative z-10">
                    {children}
                  </section>
              </main>
          </body>
      </html>
  );
}
