
import DeliverySectionClient from "../clientCompoenet/DeliverySectionClient";
const appsadata = [

    {
        title: "Fuel Delivery App Development",
        description: "We develop fuel delivery apps that allow customers to order fuel anytime, anywhere. With GPS tracking, secure payments, and driver management, our solutions make fuel delivery simple and profitable.",
        link: "https://www.comfygen.com/fuel-delivery-app-development",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/fuel-delivery-app-development-services.webp",
        gradient: "from-violet-500 to-purple-500"
    },

    {
        title: "Delivery App Development",
        description: "Comfygen offers custom delivery app development for startups and enterprises. From food and grocery to logistics and courier, we build secure, scalable, and feature-rich delivery apps that boost business growth and customer satisfaction.",
        link: "https://www.comfygen.com/delivery-app-development",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/logistics-delivery-app-development-services.webp",
        gradient: "from-orange-500 to-red-500",
    },
    {
        title: "Food Delivery App Development",
        description: "We create custom food delivery apps like Zomato, Talabat, or UberEats. Our apps come with real-time tracking, multiple payment options, and easy ordering. Start your food delivery business with our scalable food delivery app development services.",
        link: "https://www.comfygen.com/food-delivery-app-development",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/food-delivery-app-development-services.webp",
        gradient: "from-green-500 to-teal-500",
        key: "food-delivery-app-development"
    },
    {
        title: "Grocery Delivery App Development",
        description: "Comfygen builds user-friendly grocery delivery apps that make shopping easy for customers. From product listings to doorstep delivery, our apps ensure fast, secure, and hassle-free service. Launch your grocery delivery business with our powerful solutions.",
        link: "https://www.comfygen.com/ecommerce/grocery",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/grocery-delivery-app-development-services.webp",
        gradient: "from-blue-500 to-cyan-500",
        key: "grocery-app-development"
    },
    {
        title: "Medicine Delivery App Development",
        description: "We design secure and compliant medicine delivery apps with features like e-prescriptions, easy ordering, and real-time delivery tracking. Start your online pharmacy with our trusted medicine delivery app development services.",
        link: "https://www.comfygen.com/medicine-delivery-app-development",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/medicine-delivery-app-development-services.webp",
        gradient: "from-sky-500 to-blue-500"
    },
    {
        title: "Courier Delivery App Development",
        description: "Our courier delivery apps simplify parcel pickup and delivery with route optimization, live tracking, and digital proof of delivery. Build your own courier business platform with our advanced courier delivery app development solutions.",
        link: "https://www.comfygen.com/courier-delivery-app-development",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/courier-and-parcel-delivery-app-development-services.webp",
        gradient: "from-indigo-500 to-purple-500"
    },
    {
        title: "Water Delivery App Development",
        description: "We create custom water delivery apps for businesses offering bottled water services. With subscription models, scheduling, and payment gateways, our apps make water delivery easier for businesses and customers.",
        link: "https://www.comfygen.com/water-delivery-app-development",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/water-delivery-app-development-services.webp",
        gradient: "from-pink-500 to-rose-500",
        key: "water-delivery-app-development"
    },
    {
        title: "Milk Delivery App Development",
        description: "Comfygen offers milk delivery app development with subscription features, recurring orders, and payment integration. Launch your online dairy business with our scalable and easy-to-use milk delivery app solutions.",
        link: "https://www.comfygen.com/milk-delivery-app-development",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/milk-delivery-app-development-services.webp",
        gradient: "from-purple-500 to-pink-500",
        key: "milk-delivery-app-development"
    },
    {
        title: "Parcel Delivery App Development",
        description: "We design parcel delivery apps with live tracking, order management, and quick dispatch features. Our solutions help startups and enterprises manage deliveries efficiently with robust parcel delivery app development.",
        link: "",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/parcel-delivery-app-development-services.webp",
        gradient: "from-yellow-500 to-orange-500"
    },
    // {
    //     title: "Logistics Delivery App Development",
    //     description: "Our logistics app development services cover fleet management, warehouse tracking, and delivery scheduling. We build enterprise-level logistics delivery apps that optimize supply chain operations and ensure fast, reliable deliveries.",
    //     link: "https://www.comfygen.com/logistics-app-development",
    //     image: "https://www.comfygen.com/comfygen-images/delivery-app-development/logistics-delivery-app-development-services.webp",
    //     gradient: "from-teal-500 to-cyan-500"
    // },

    // {
    //     title: "Liquor Delivery App Development",
    //     description: "Comfygen builds liquor delivery apps with age verification, secure payments, and doorstep delivery. Launch your online alcohol delivery service with our feature-rich liquor delivery app development solutions.",
    //     link: "",
    //     image: "https://www.comfygen.com/comfygen-images/delivery-app-development/liquor-delivery-app-development-services.webp",
    //     gradient: "from-red-500 to-pink-500"
    // },

    {
        title: "Fish Delivery App Development",
        description: "Our fish delivery apps help seafood businesses deliver fresh products to customers quickly. With order tracking, freshness updates, and easy payments, our solutions enhance customer trust and satisfaction.",
        link: "",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/fish-delivery-app-development-services.webp",
        gradient: "from-emerald-500 to-green-500"
    },
    {
        title: "Flower Delivery App Development",
        description: "We create elegant flower delivery apps with scheduling, customization, and real-time delivery tracking. Perfect for florists and flower businesses, our apps ensure timely and beautiful flower deliveries.",
        link: "https://www.comfygen.com/flower-delivery-app-development",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/flower-delivery-app-development-services.webp",
        gradient: "from-emerald-500 to-green-500",
        key: "flower-delivery-app-development"
    },
    {
        title: "Meat Delivery App Development",
        description: "Comfygen develops meat delivery apps that ensure freshness and timely delivery. With subscription options, real-time updates, and secure payments, our apps support butcher shops and meat businesses.",
        link: "https://www.comfygen.com/meat-delivery-app-development",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/meat-delivery-app-development-services.webp",
        gradient: "from-emerald-500 to-green-500"
    },
    {
        title: "Gas Cylinder Delivery App Development",
        description: "We build gas cylinder delivery apps with order scheduling, refill tracking, and safety compliance. Our solutions help businesses and households manage gas deliveries with ease and security.",
        link: "",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/gas-cylinder-delivery-app-development-services.webp",
        gradient: "from-emerald-500 to-green-500"
    },
    {
        title: "Ice Cream Delivery App Development",
        description: "Our ice cream delivery apps allow customers to order their favorite flavors with real-time delivery tracking. Enhance your dessert business with our custom ice cream delivery app solutions.",
        link: "https://www.comfygen.com/ice-cream-delivery-app-development",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/ice-cream-delivery-app-development-services.webp",
        gradient: "from-emerald-500 to-green-500"
    },
    {
        title: "Pizza Delivery App Development",
        description: "We design pizza delivery apps with quick ordering, real-time tracking, and multi-payment options. Start your pizza chain app like Domino's with our scalable pizza delivery app development services.",
        link: "https://www.comfygen.com/pizza-delivery-app-development",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/pizza-delivery-app-development-services.webp",
        gradient: "from-emerald-500 to-green-500"
    },
    {
        title: "Pet Food Delivery App Development",
        description: "Comfygen builds pet food delivery apps with subscription models, product catalogs, and doorstep delivery. Grow your pet supply business with our advanced pet food delivery app solutions.",
        link: "",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/pet-food-delivery-app-development-services.webp",
        gradient: "from-emerald-500 to-green-500"
    },
    {
        title: "Hyperlocal Delivery App Development",
        description: "We create hyperlocal delivery apps that connect local stores with nearby customers. With real-time tracking and instant delivery, our apps empower small businesses to compete in the digital market.",
        link: "",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/hyperlocal-delivery-app-development-services.webp",
        gradient: "from-emerald-500 to-green-500"
    },
    {
        title: "Cake Delivery App Development",
        description: "Our cake delivery apps help bakeries and cake shops deliver fresh cakes with live tracking, custom orders, and secure payments. Start your online bakery business with our cake delivery app solutions.",
        link: "",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/cake-delivery-app-development-services.webp",
        gradient: "from-emerald-500 to-green-500"
    },

    {
        title: "Alcohol Delivery App Development",
        description: "Comfygen is a top alcohol delivery app development company offering custom, white-label, and on-demand liquor app solutions with AI-powered, blockchain-based, scalable features.",
        link: "https://www.comfygen.com/alcohol-delivery-app-development",
        image: "https://www.comfygen.com/comfygen-images/delivery-app-development/cake-delivery-app-development-services.webp",
        gradient: "from-emerald-500 to-green-500"
    },





];

const DeliverySection = ({
  title = "We Provide Custom Delivery App Development Services in Diverse Sectors",
  description = "The Comfygen team creates powerful and easy-to-use delivery apps for a variety of industries. Whether you run a startup, small business, or large enterprise, our custom delivery app development services are made to fit your business needs.",
  hideUrl = "",
  apps = appsadata,
}) => {

   const filterData = hideUrl
    ? apps.filter((app) => app.link !== hideUrl)
    : apps;

  return (
     <DeliverySectionClient
      title={title}
      description={description}
      apps={filterData}
    />
  );
};

export default DeliverySection;