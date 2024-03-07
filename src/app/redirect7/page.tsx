'use client'
import { permanentRedirect } from 'next/navigation';

export default function Redirect5() {

    permanentRedirect("/finalredirect");

  return <div>redirect 1</div>;
}