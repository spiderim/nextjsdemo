
// pages/about.tsx

import { GetServerSideProps } from 'next';
import {permanentRedirect}  from 'next/navigation'


export default function AboutPage() {
  permanentRedirect("https://www.bing.com/")
  return <div>page about</div>;
}



