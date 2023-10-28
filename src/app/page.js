import CustomerReviews from '@/components/home_components/customer_reviews';
import HaloBanner from '@/components/home_components/halo_banner';
import HomeCarousel from '@/components/home_components/home_carousel';
import ImageGallery from '@/components/home_components/image_gallery';
import MostPopular from '@/components/home_components/most_popular';
import NewArrival from '@/components/home_components/new_arrival';
import NewProducts from '@/components/home_components/new_products';
import { RecentPosts } from '@/components/home_components/recent_posts';


export default function Home() {
  return (
    <main>
     
      <HomeCarousel />
     
      <NewArrival />
      <MostPopular />
      <NewProducts />
      <HaloBanner />
      <ImageGallery />
      <CustomerReviews />
      {/* <RecentPosts />  */}
    </main>
  );
}

