'use client';

import { useFormStatus } from 'react-dom';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { UseFormReturn } from 'react-hook-form';
import { Loader2 } from 'lucide-react';

interface FormSubmitProps {
    disabled?: boolean;
    className?: string;
    title?: string;
    form: UseFormReturn<any>;
    variant?:
        | 'default'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'ghost'
        | 'link';
    // | 'primary';
}

export const FormSubmit = ({
    disabled,
    className,
    variant = 'default',
    title = 'Submit',
    form
}: FormSubmitProps) => {
    return (
        <Button
            variant={variant}
            disabled={form.formState.isSubmitting || disabled}
            type="submit"
            className={cn(className)}
        >
            {form.formState.isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            {title}
        </Button>
    );
};
