import Navbar from '../components/Navbar';
import ImageGallery from '../components/ImageGallery';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <h1 className="text-center text-4xl font-bold text-red-500 py-8">
        Anita Gonzalez Arte
      </h1>
      <ImageGallery />
    </div>
  );
}
