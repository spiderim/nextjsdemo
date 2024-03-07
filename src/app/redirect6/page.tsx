'use client'
import { permanentRedirect } from 'next/navigation';

export default function Redirect6() {

    permanentRedirect("http://localhost:3000/redirect7");

  return <div>redirect 1</div>;
}