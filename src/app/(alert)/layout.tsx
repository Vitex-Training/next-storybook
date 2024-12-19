'use client';

import React from 'react';
import { AlertProvider } from 'src/shared/context/AlertContext';

export default function AlertLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AlertProvider>{children}</AlertProvider>;
}
