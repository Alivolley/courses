// Components
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

function layout({ children }) {
   return (
      <div className="flex min-h-screen flex-col">
         <Header />
         <div className="flex-1">{children}</div>
         <Footer />
      </div>
   );
}

export default layout;
