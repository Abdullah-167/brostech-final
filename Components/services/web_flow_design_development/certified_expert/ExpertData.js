import { TbRectangleVertical } from "react-icons/tb";
import { CiMobile4 } from "react-icons/ci";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { LiaBoxesSolid } from "react-icons/lia";
import { FaBuromobelexperte } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const availableIcons = [
  <TbRectangleVertical color="blue" />,
  <CiMobile4 color="blue" />,
  <MdOutlineCheckBoxOutlineBlank color="blue" />,
  <LiaBoxesSolid color="blue" />,
  <FaBuromobelexperte color="blue" />,
  <HiOutlineDevicePhoneMobile color="blue" />
];

const ExpertsData = [
  {
    title: 'E-commerce Solutions',
    content:
      'Webflow provides tools for building and managing online stores, including customizable product pages, secure checkout processes, and inventory management features.',
    icon: availableIcons[0], // First icon
  },
  {
    title: 'Hosting & Publishing',
    content:
      'Webflow offers hosting services that ensure fast and reliable website performance. Users can publish their sites directly from the platform with just a few clicks.',
    icon: availableIcons[1], // Second icon
  },
  {
    title: 'SEO Optimization',
    content:
      'Webflow includes features for optimizing websites for search engines, such as customizable meta tags, sitemap generation, and integrated analytics to track website performance.',
    icon: availableIcons[2], // Third icon
  },
  {
    title: 'Template Marketplace',
    content:
      'Webflow provides access to a marketplace where users can browse and purchase pre-designed website templates. These templates cover a wide range of industries and design styles, enabling users to kickstart their projects with professional designs.',
    icon: availableIcons[3], // Fourth icon
  },
  {
    title: 'Code Export',
    content:
      'Webflow allows users to export their designs as clean, production-ready HTML, CSS, and JavaScript code. This feature is valuable for developers who want to further customize their websites or integrate them with other platforms.',
    icon: availableIcons[4], // Fifth icon
  },
  {
    title: 'Form Builder',
    content:
      'Webflow includes a powerful form builder tool that enables users to create custom forms for gathering visitor information, such as contact forms, signup forms, and surveys. Users can customize form fields, design styles, and validation rules to meet their specific needs.',
    icon: availableIcons[5], // Sixth icon
  },
  {
    title: 'Asset Management',
    content:
      'Webflow provides tools for managing media assets such as images, videos, and documents. Users can upload, organize, and optimize their assets directly within the platform, ensuring efficient asset management for their websites.',
    icon: availableIcons[0], // Reuse first icon
  },
  {
    title: 'Webflow CMS API',
    content:
      'For advanced users and developers, Webflow offers an API (Application Programming Interface) for interacting with Webflow\'s CMS. This API allows users to programmatically create, update, and retrieve content from their Webflow CMS collections, enabling seamless integration with external systems and applications.',
    icon: availableIcons[1], // Reuse second icon
  },
];

export default ExpertsData;
