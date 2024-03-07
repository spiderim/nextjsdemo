'use client'
import { permanentRedirect } from 'next/navigation';

export default function Redirect1() {

    permanentRedirect("/redirect2");

  return <div>redirect 1</div>;
}