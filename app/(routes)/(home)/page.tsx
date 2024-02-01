import banner from '@/assets/banner-img.png';
import Container from '@/components/container';
import CustomImage from '@/components/customImage';
import BookingPage from './components/booking';
import BookingStep from './components/bookingStep';
import DownloadApp from './components/downloadApp';
import TopVehicle from './components/topVehicle';

const HomePage = () => {
  return (
    <Container>
      <div className="relative bg-black min-h-screen overflow-hidden">
        <CustomImage
          src={banner}
          alt="banner-image"
          className="absolute right-[-10%] top-32 w-[70%] rounded-none z-0"
        />
        <div className="flex flex-col justify-start pt-28 pl-20">
          <div className="text-white font-bold space-y-2 ">
            <h1 className="text-5xl">Rent a Vehicle</h1>
            <h2 className="text-4xl ">Autox Rental. Let&apos;s Go!</h2>
          </div>
        </div>
        <div className="absolute bottom-[20%] left-0 right-0 mx-auto w-[70%]">
          <BookingPage />
        </div>
      </div>

      <BookingStep />

      <TopVehicle />
      <DownloadApp />
    </Container>
  );
};

export default HomePage;
