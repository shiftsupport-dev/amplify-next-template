import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";

import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.eu-west-1.amazonaws.com/eu-west-1_5xXwHgy1m",
  client_id: "1lalel32jqnrn7n6cpc1ucd5n1",
  redirect_uri: "https://example.com",
  response_type: "code",
  scope: "aws.cognito.signin.user.admin email openid phone profile",
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veranderbaan",
  description:
    "Veranderbaan biedt je de tools om je carrière te verbeteren. De eerste stap naar een nieuwe carrière!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider {...cognitoAuthConfig}>{children}</AuthProvider>
      </body>
    </html>
  );
}
