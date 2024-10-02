import { ComponentType } from "react";

export type Route = {
    path: string;
    element: ComponentType;
}