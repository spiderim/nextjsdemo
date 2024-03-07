'use client'
import { permanentRedirect } from 'next/navigation';

export default function Redirect3() {

    permanentRedirect("/redirect4");

  return <div>redirect 1</div>;
}