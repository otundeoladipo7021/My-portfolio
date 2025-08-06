export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-primary/70 text-white shadow z-50">
  <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
    <h1 className="text-2xl font-bold">My Portfolio</h1>
    <ul className="hidden md:flex gap-6">
      <li><a href="#home" className="hover:text-accent transition">Home</a></li>
      <li><a href="#about" className="hover:text-accent transition">About</a></li>
      <li><a href="#resume" className="hover:text-accent transition">Education & Experience</a></li>
      <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
      <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
    </ul>
  </div>
</nav>
  );
}