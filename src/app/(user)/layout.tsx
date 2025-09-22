import Footer from "@/components/client/footer/Footer";
import { Header } from "@/components/client/header/Header";
import { Card } from "@mantine/core";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Card radius={0} p={0} bg={"#FCFCFC"}>
        <main>{children}</main>
      </Card>
      <Footer />
    </>
  );
}
