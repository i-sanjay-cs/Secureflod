"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const queryClient = new QueryClient();
export const Provider = ({ children }: Props) => {
    return (
        <QueryClientProvider client={queryClient} > {children}</QueryClientProvider >
    )
}
