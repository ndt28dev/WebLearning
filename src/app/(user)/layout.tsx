import Footer from "@/components/client/footer/Footer";
import { Header } from "@/components/client/header/Header";
import MyButtonScroll from "@/components/mybutton/MyButtonScroll";
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
        <main>
          {children}
          <MyButtonScroll />
        </main>
      </Card>
      <Footer />
    </>
  );
}
