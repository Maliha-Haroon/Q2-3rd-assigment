"use client";
import React from 'react'
import Link from 'next/link' ;
import { useRouter } from 'next/navigation';

function navbar() {
    const router = useRouter();
  return (
    <div><Link href = "/navbar">Welcome to NAVBAR</Link></div>
    
  );
}

export default navbar;