"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SignUpEmailBox } from "./SignUpEmailBox";
import { SignUpPasswordBox } from "./SignUpPasswordBox";
import { toast } from "sonner";
import { useFormik } from "formik";
import { DataTable } from "@/components/admin/orders/data-table";

export const Signup = () => {
  const { push } = useRouter();
  
  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const signUp = async (values: { email?: string; password?: string }) => {
    console.log(values);
    try {
      const response = await fetch("http://localhost:3001/user", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          address: "address",
          phoneNumber: "phoneNumber",
        }),
        headers: {
          "content-type": "application/json;  charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log("response", data);

      if (!response.ok) {
        throw new Error("Failed to create category");
      }
      toast.success("successfully created user");


    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await signUp(values);
    },
  });

  const StepComponents = [
    <SignUpEmailBox
      key={0}
      values={formik.values}
      errors={formik.errors}
      touched={formik.touched}
      handleChange={formik.handleChange}
      onSubmit={formik.handleSubmit}
    />,
    // <SignUpPasswordBox key={1} values={formik.values} />,
  ];

  return StepComponents;
};