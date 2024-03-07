'use client'
import { permanentRedirect } from 'next/navigation';

export default function Redirect4() {

    permanentRedirect("/redirect5");

  return <div>redirect 1</div>;
}