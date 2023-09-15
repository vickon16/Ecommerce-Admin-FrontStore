import ClientOnly from "@/components/ClientOnly";
import PreviewModal from "@/components/preview-modal";
import ToasterProvider from "./ToasterProvider";

const Providers = () => {
  return (
    <ClientOnly>
      <ToasterProvider />
      <PreviewModal />
    </ClientOnly>
  );
};

export default Providers;
