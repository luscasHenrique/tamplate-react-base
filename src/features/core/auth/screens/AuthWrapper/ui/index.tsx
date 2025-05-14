import React, { JSX } from "react";

interface StateProps {
  children: React.ReactNode;
}

type AuthWrapperContainerProps = StateProps;

export const AuthWrapperContainer = ({
  children,
}: AuthWrapperContainerProps): JSX.Element => (
  <>
    <div className="wrapper w-full">
      <header></header>
      <main className="overflow-hidden">{children}</main>
      <footer></footer>
    </div>
  </>
);
