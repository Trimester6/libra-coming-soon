import { NewsletterForm } from "@/components/newsletter-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Uskoro — Libra Delivery",
  description:
    "Budite u toku sa našim velikim otkrićem! Prijavite se na naš newsletter da biste prvi saznali o našem lansiranju, ekskluzivnim ponudama i uzbudljivim novostima. Ne propustite ono što dolazi – pridružite nam se danas!",
};

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen bg-rose-50 flex flex-col">
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
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Prijavi se za obaveštenja
            </CardTitle>
            <CardDescription className="text-center">
              I budi prvi koji će saznati sve o novostima i promocijama
            </CardDescription>
          </CardHeader>
          <CardContent>
            <NewsletterForm />
          </CardContent>
          <CardFooter className="flex justify-center space-x-4">
            {/* <Button variant="ghost" size="icon">
              <Icons.facebook className="h-5 w-5 text-red" />
              <span className="sr-only">Facebook</span>
            </Button> */}
            <Button variant="ghost" size="icon">
              <Icons.instagram className="h-5 w-5 text-red" />
              <span className="sr-only">Instagram</span>
            </Button>
            {/* <Button variant="ghost" size="icon">
              <Icons.twitter className="h-5 w-5 text-red" />
              <span className="sr-only">Twitter</span>
            </Button> */}
          </CardFooter>
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
