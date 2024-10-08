"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import toast from "react-hot-toast";

const formSchema = z.object({
  email: z
    .string()
    .min(5, {
      message: "Email must be at least 5 characters.",
    })
    .email("This is not a valid email."),
});

export const SubscribeForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("You have successfully subscribed!");
  };

  const handleErrors = (errors: any) => {
    if (errors.email) {
      toast.error(errors.email.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, handleErrors)} className="">
        <FormLabel
          htmlFor="email"
          className="text-white text-xl font-normal mb-3 block w-fit"
        >
          Subscribe To Our News Letter
        </FormLabel>
        <div className="relative mb-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="pr-[200px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="default"
            className={cn(
              buttonVariants(),
              "absolute right-4 top-3.5 bg-white hover:bg-white hover:text-black text-black"
            )}
          >
            Subscribe
            <Image
              src="/assets/arrow-btn.svg"
              width={24}
              height={24}
              alt="Arrow icon"
              className="filter invert w-6 h-6"
            />
          </Button>
        </div>
        <p className="text-sm font-normal text-white">
          *We Will Not Share Your Personal Info
        </p>
      </form>
    </Form>
  );
};
