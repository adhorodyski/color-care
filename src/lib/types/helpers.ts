import { FC } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<T = unknown> = NextPage<T> & { layout?: FC };
