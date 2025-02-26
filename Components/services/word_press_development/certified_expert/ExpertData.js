import { TbRectangleVertical } from "react-icons/tb";
import { CiMobile4 } from "react-icons/ci";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { LiaBoxesSolid } from "react-icons/lia";
import { FaBuromobelexperte } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaWordpress, FaShoppingCart, FaTools, FaPlug, FaRocket, FaGlobe } from "react-icons/fa";

const ExpertsData = [
  {
    title: 'Responsive Design',
    content:
      'Ensuring websites are optimized for various devices and screen sizes to provide a seamless user experience.',
    icon: <TbRectangleVertical color="blue" />,
  },
  {
    title: 'Customization & Integration',
    content:
      'Tailoring WordPress Development to meet specific business requirements and integrating with third-party tools and services.',
    icon: <CiMobile4 color="blue" />,
  },
  {
    title: 'Website Optimization',
    content:
      'Improving website performance, speed, and user experience through optimization techniques.',
    icon: <MdOutlineCheckBoxOutlineBlank color="blue" />,
  },
  {
    title: 'Content Management',
    content:
      'Offering training and support for clients to effectively manage and update content on their WordPress websites.',
    icon: <LiaBoxesSolid color="blue" />,
  },
  {
    title: 'E-commerce Solutions',
    content:
      'Developing online stores and integrating e-commerce functionalities using WordPress plugins like WooCommerce.',
    icon: <FaShoppingCart color="blue" />,
  },
  {
    title: 'Custom Design',
    content:
      'Crafting unique website designs tailored to clients\' branding and preferences.',
    icon: <FaBuromobelexperte color="blue" />,
  },
  {
    title: 'Plugin Development',
    content:
      'Building custom plugins to add specific functionalities or features to WordPress websites.',
    icon: <FaPlug color="blue" />,
  },
  {
    title: 'Migration Services',
    content:
      'Assisting with the migration of websites from other platforms to WordPress or upgrading from older WordPress versions.',
    icon: <HiOutlineDevicePhoneMobile color="blue" />,
  },
  {
    title: 'SEO Services',
    content:
      'Implementing search engine optimization strategies to improve website visibility and ranking on search engine results pages.',
    icon: <FaRocket color="blue" />,
  },
  {
    title: 'Logo & Branding',
    content:
      'Craft visually compelling brand identities with custom logos and branding solutions in WordPress development.',
    icon: <FaWordpress color="blue" />,
  },
  {
    title: 'Globalization',
    content:
      'Building websites for diverse audiences worldwide, fostering cross-cultural communication and accessibility.',
    icon: <FaGlobe color="blue" />,
  },
  {
    title: 'WordPress Maintenance',
    content:
      'Providing ongoing support, updates, and security measures to keep websites running smoothly.',
    icon: <FaTools color="blue" />,
  },
];

export default ExpertsData;
