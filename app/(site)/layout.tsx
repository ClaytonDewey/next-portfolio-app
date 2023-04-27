import '../sass/main.scss';

export const metadata = {
  title: 'Clayton Dewey :: Frontend Developer',
  description:
    'Discover the portfolio of a skilled frontend web developer, specializing in creating beautiful and user-friendly websites. Explore my work and contact me to start building your next project.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
