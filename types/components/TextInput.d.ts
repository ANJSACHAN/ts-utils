import React from "react";
import { TextField } from "../types/Component";
export declare const validateInputText: ({ value, required, minLength, maxLength, regex, }: {
    value: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    regex?: RegExp;
}) => string | undefined;
export declare const TextInput: React.FC<TextField>;
