'use client'
import { notFound,  } from 'next/navigation';

export default function NotFound() {

   notFound();

  return <div>redirect 1</div>;
}