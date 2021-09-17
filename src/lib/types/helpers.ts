import { FC, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<T = unknown> = NextPage<T> & { layout?: FC };

export type Displayable<T> = Record<keyof T, ReactNode>;
