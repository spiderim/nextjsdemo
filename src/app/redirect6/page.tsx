'use client'
import { permanentRedirect } from 'next/navigation';

export default function Redirect6() {

    permanentRedirect("/redirect7");

  return <div>redirect 1</div>;
}