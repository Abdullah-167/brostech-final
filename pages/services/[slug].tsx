import MultiPages from "../../Components/MultiPages/MultiPagesSection";
import { pagesData } from "../../Components/MultiPages/pageData";

export async function getStaticPaths() {
  const paths = pagesData.map((page) => ({
    params: { slug: page.pageTitle.toLowerCase().replace(/\s+/g, "-") },
  }));

  return {
    paths,
    fallback: false, // Change to 'true' if you want incremental static generation
  };
}

export async function getStaticProps({ params } : any) {
  const pageData = pagesData.find(
    (page) => page.pageTitle.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageData,
    },
  };
}

const MultiPage = ({ pageData } : any) => {
  if (!pageData) return <p>Page not found</p>;

  return <MultiPages data={pageData.pageSectionsData} />;
};

export default MultiPage;
