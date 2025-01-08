import Services from "../../components/Services";
import Layout from "../../components/Layout";

export default function ServicesPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-sky-100 to-white dark:from-gray-800 dark:to-gray-900 py-20 px-4 md:px-0">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Professional Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-inter max-w-3xl mx-auto">
            As a skilled software developer, I offer a range of services to help bring your digital projects to life. From web and mobile development to custom software solutions, I&apos;m here to turn your ideas into reality.
          </p>
        </div>
      </div>
      <Services />
    </Layout>
  );
}


//Version 10.4.0

