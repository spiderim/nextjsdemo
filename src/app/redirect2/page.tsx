'use client'
import {permanentRedirect}  from 'next/navigation'


export default function Redirect2() {
  permanentRedirect("/redirect3")
  return <div>redirect 2</div>;
}