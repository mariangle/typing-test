export const metadata = {
    title: 'Leaderboard',
    description: 'View the top performers on the Typing Test leaderboard and compare your typing skills',
  }
  
  export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        {children}
      </div>
    )
  }
  