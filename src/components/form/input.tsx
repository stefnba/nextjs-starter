'use client';

import { forwardRef } from 'react';
import { useFormStatus } from 'react-dom';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormFieldContextValue
} from '@/components/ui/form';

import { FormErrors } from './error';
import { FieldValues, FieldPath } from 'react-hook-form';
import type { UseFormReturn } from 'react-hook-form';

type FormInputProps<
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
    name: TName;
    label?: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    form: UseFormReturn<TFieldValues>;
    description?: string;
};

export function FormInput<TFieldValues extends FieldValues>({
    name,
    label,
    type,
    placeholder,
    className,
    form,
    description
}: FormInputProps<TFieldValues>) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Input
                            className={className}
                            type={type}
                            placeholder={placeholder}
                            {...field}
                            disabled={form.formState.isSubmitting}
                            // onBlur={() => form.trigger(name)}
                        />
                    </FormControl>
                    {description && (
                        <FormDescription>{description}</FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
