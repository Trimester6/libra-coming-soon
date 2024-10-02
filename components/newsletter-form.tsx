"use client";

import { submitForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  consent: boolean;
}

export function NewsletterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    const result = await submitForm(formData);
    if (result.success) {
      router.push("/hvala");
      toast.success("Uspešno ste se prijavili za obaveštenja");
    } else {
      setIsSubmitting(false);
      toast.error("Došlo je do greške, pokušajte ponovo");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="firstName">Ime</Label>
        <Input
          id="firstName"
          {...register("firstName", {
            required: "Ime je obavezno",
          })}
          placeholder="Petar"
        />
        {errors.firstName && (
          <p className="text-sm text-destructive">{errors.firstName.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName">Prezime</Label>
        <Input
          id="lastName"
          {...register("lastName", {
            required: "Prezime je obavezno",
          })}
          placeholder="Petrović"
        />
        {errors.lastName && (
          <p className="text-sm text-destructive">
            {typeof errors.lastName?.message === "string" &&
              errors.lastName.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email", {
            required: "Email je obavezan",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Neispravan email",
            },
          })}
          placeholder="petar.petrovic@domen.com"
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="consent"
          {...register("consent", {
            required: "You must agree to receive communications",
          })}
        />
        <Label htmlFor="consent">
          Slažem se da primam obaveštenja o novostima i promocijama
        </Label>
      </div>
      {errors.consent && (
        <p className="text-sm text-destructive">{errors.consent.message}</p>
      )}
      <Button
        type="submit"
        className="w-full bg-red font-semibold hover:bg-red/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            Slanje...
          </>
        ) : (
          "Prijavi se"
        )}
      </Button>
    </form>
  );
}
