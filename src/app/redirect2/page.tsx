'use client'
import {permanentRedirect}  from 'next/navigation'


export default function Redirect2() {
  permanentRedirect("http://localhost:3000/redirect3")
  return <div>redirect 2</div>;
}