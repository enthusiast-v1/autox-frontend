import banner from '@/assets/banner-img.jpg';
import { BookingForm } from '@/components/bookingForm';
import Container from '@/components/container';
import CustomImage from '@/components/customImage';

const HomePage = () => {
  return (
    <Container>
      <div className="relative">
        <CustomImage src={banner} alt="banner-image" className="rounded-none" />
        <div className="absolute text-5xl text-white w-[450px] mx-auto top-[5%] left-[15%]">
          <BookingForm />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
