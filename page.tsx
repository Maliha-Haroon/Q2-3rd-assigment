"use client";

import React from 'react';
import { usePathname, useRouter } from 'next/navigation'; // Importing usePathname and useRouter from next/navigation
import Link from 'next/link';

export default function Home() {
  const router = useRouter(); // Use the router from next/navigation

  return (
    <>
      <h1>Home Page</h1>
      <h2>Link</h2>
      <Link href="/about">Go to About Page</Link>
      <br />
      <Link href="/footer">Go to Footer</Link>
      <br />
      <Link href="/navbar">This is Navbar</Link>
      <br />
      <Link href="/contact">Contact Us</Link>

      <h2>Navigation</h2>
      <button onClick={() => router.push("/about")}><b><i>ABOUT</i></b></button>
      <br />
      <button onClick={() => router.push("/footer")}><b><i>FOOTER</i></b></button>
      <br />
      <button onClick={() => router.push("/navbar")}><b><i>NAVBAR</i></b></button>
      <br />
      <button onClick={() => router.push("/contact")}><b><i>CONTACT</i></b></button>
    </>
  );
}
