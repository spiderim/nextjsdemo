'use client'
import { permanentRedirect } from 'next/navigation';

export default function Redirect5() {

    permanentRedirect("http://localhost:3000/finalredirect");

  return <div>redirect 1</div>;
}