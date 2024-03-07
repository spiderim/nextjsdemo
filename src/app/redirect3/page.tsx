'use client'
import { permanentRedirect } from 'next/navigation';

export default function Redirect3() {

    permanentRedirect("http://localhost:3000/redirect4");

  return <div>redirect 1</div>;
}