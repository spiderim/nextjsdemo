'use client'
import { permanentRedirect } from 'next/navigation';

export default function Redirect5() {

    permanentRedirect("/redirect6");

  return <div>redirect 1</div>;
}