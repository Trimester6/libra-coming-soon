import { Confetti } from "@/components/confetti";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hvala — Libra Delivery",
  description:
    "Budite u toku sa našim velikim otkrićem! Prijavite se na naš newsletter da biste prvi saznali o našem lansiranju, ekskluzivnim ponudama i uzbudljivim novostima. Ne propustite ono što dolazi – pridružite nam se danas!",
};

export default function ThankYou() {
  return (
    <div className="relative min-h-screen bg-rose-50 flex flex-col">
      <Confetti />
      <div
        className="h-[60px] w-full"
        style={{
          backgroundImage: `
            linear-gradient(45deg, 
            rgba(220,38,38, 1) 25%,
              transparent 25%, 
              transparent 75%, 
             rgba(220,38,38, 1)  75%, 
             rgba(220,38,38, 1) 
            ),
            linear-gradient(45deg, 
             rgba(220,38,38, 1)  25%, 
              transparent 25%, 
              transparent 75%, 
             rgba(220,38,38, 1)  75%, 
             rgba(220,38,38, 1) 
            )
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <Image
          src="/logo.png"
          alt="Libra Delivery"
          width={300}
          height={200}
          className="h-40 w-auto"
        />

        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Hvala!</CardTitle>
            <CardDescription>
              Uspešno ste se prijavili za obaveštenja.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Uskoro ćete primiti email sa kuponom koji možete iskoristiti dva
              puta za 250 dinara popusta na Vaše sledeće dve kupovine.
            </p>
          </CardContent>
        </Card>
      </div>
      <div
        className="h-[60px] w-full"
        style={{
          backgroundImage: `
            linear-gradient(45deg, 
             rgba(220,38,38, 1)  25%, 
              transparent 25%, 
              transparent 75%, 
             rgba(220,38,38, 1)  75%, 
             rgba(220,38,38, 1) 
            ),
            linear-gradient(45deg, 
             rgba(220,38,38, 1)  25%, 
              transparent 25%, 
              transparent 75%, 
             rgba(220,38,38, 1)  75%, 
             rgba(220,38,38, 1) 
            )
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />
    </div>
  );
}
