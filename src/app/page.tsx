'use client' 
export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <a href="/about" >Go to About Page</a>
        </p>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <a href="/mypage">Go to MyPage</a>
        </p>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <a href="/redirect1">Go to Redirect Loop1</a>
        </p>
        <div>

      <main>
        
        <h1>Welcome to Our Website!</h1>
        <p>Explore and discover amazing content right here.</p>

        <section>
          <h2>Featured Content</h2>
          <p>
            Check out our handpicked featured content, ranging from articles and videos to interactive experiences.
          </p>
        </section>

        <section>
          <h2>Latest Updates</h2>
          <ul>
            <li>Exciting news and announcements</li>
            <li>New releases and updates</li>
            <li>Upcoming events and activities</li>
          </ul>
        </section>

        <section>
          <h2>Join Our Community</h2>
          <p>
            Connect with like-minded individuals, share your thoughts, and participate in discussions.
          </p>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p>
            Have questions or need assistance? Feel free to reach out to our support team.
          </p>
          <p>Email: support@ourwebsite.com</p>
        </section>
      </main>
    </div>
      </div>
    </main>
  );
}
