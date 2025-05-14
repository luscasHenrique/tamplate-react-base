import React from "react";

import { AuthWrapperContainer } from "./ui";

interface AuthWrapperProps {
  children: React.ReactNode;
}

export const AuthWrapper = ({ children }: AuthWrapperProps): JSX.Element => {
  return <AuthWrapperContainer>{children}</AuthWrapperContainer>;
};
