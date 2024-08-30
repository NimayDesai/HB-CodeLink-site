import {
  ComponentWithAs,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

export type headingSize = "sm" | "lg";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  textarea?: boolean;
  headingSize?: headingSize;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  textarea,
  headingSize = "sm",
  ...props
}) => {
  const [field, { error }] = useField(props);
  let InputorTextarea: ComponentWithAs<"input"> | ComponentWithAs<"textarea"> =
    Input;
  if (textarea) {
    InputorTextarea = Textarea;
  }
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel
        fontSize={headingSize === "lg" ? "3xl" : undefined}
        htmlFor="username"
      >
        {label}
      </FormLabel>
      <InputorTextarea
        {...field}
        {...props}
        placeholder={props.placeholder}
        id={field.name}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
