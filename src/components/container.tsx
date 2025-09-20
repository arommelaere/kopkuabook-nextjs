import { useTranslations } from "next-intl";

const Container = (props: { children: React.ReactNode }) => {
  const t = useTranslations('Marketing.Hero');
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
      {/* <div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0"> */}
        {/* <div className="max-w-xl"> */}
          {props.children}
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Container;
