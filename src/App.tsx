import { ClipboardList, Plus } from "lucide-react";
import "./App";
import { Button, Container, Input } from "./shared/ui";
import { Footer, Header } from "./widgets";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-section">
      <Container>
        <Header />
      </Container>

      <main className="flex-1">
        <Container>
          <h1 className="uppercase font-bold text-[198px] text-center title-gradient max-md:text-[130px] max-sm:text-[90px] tracking-[0.15em] leading-[1.1]">
            TODO LIST
          </h1>
          <div className="w-full max-w-[908px] min-h-[620px] rounded-3xl m-auto p-8 bg-[#D8D8D8]/3 backdrop-blur-[16px] inner-shadow-block mt-[-85px]">
            <div className="flex flex-col justify-between gap-8">
              <div className="flex w-full items-center gap-8">
                <div className=" relative w-full">
                  <Input
                    type="text"
                    placeholder="Enter the task name"
                    className="text-neutral-200 pl-[43px] placeholder:text-neutral-200"
                  />
                  <ClipboardList className="absolute left-[12px] top-1/2 -translate-y-1/2 text-neutral-200" />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size={"lg"}
                  className="bg-transparent border cursor-pointer"
                >
                  <Plus />
                  Create
                </Button>
              </div>
              <div className="h-[496px] overflow-hidden">
                <div className="space-y-8 overflow-y-auto h-full">
                  <div className="p-3 rounded-md bg-[#E4E4E7]/10 w-full min-h-[80px] border border-[#E4E4E7]/40 backdrop-blur-[0px] inner-shadow-block">
                    <p className="font-normal text-[16px] text-neutral-200">
                      Build a responsive landing page using React and Tailwind
                      CSS. Focus on clean layout, mobile-first design, and
                      component reusability. Build a responsive landing page
                      using React and Tailwind CSS. Focus on clean layout,
                      mobile-first design, and component reusability.
                    </p>
                  </div>
                  <div className="p-3 rounded-md bg-[#E4E4E7]/10 w-full min-h-[80px] border border-[#E4E4E7]/40 backdrop-blur-[0px] inner-shadow-block">
                    <p className="font-normal text-[16px] text-neutral-200">
                      Build a responsive landing page using React and Tailwind
                      CSS. Focus on clean layout, mobile-first design, and
                      component reusability.
                    </p>
                  </div>
                  <div className="p-3 rounded-md bg-[#E4E4E7]/10 w-full min-h-[80px] border border-[#E4E4E7]/40 backdrop-blur-[0px] inner-shadow-block">
                    <p className="font-normal text-[16px] text-neutral-200">
                      Build a responsive landing page using React and Tailwind
                      CSS. Focus on clean layout, mobile-first design, and
                      component reusability.
                    </p>
                  </div>
                  <div className="p-3 rounded-md bg-[#E4E4E7]/10 w-full min-h-[80px] border border-[#E4E4E7]/40 backdrop-blur-[0px] inner-shadow-block">
                    <p className="font-normal text-[16px] text-neutral-200">
                      Build a responsive landing page using React and Tailwind
                      CSS. Focus on clean layout, mobile-first design, and
                      component reusability.
                    </p>
                  </div>
                  <div className="p-3 rounded-md bg-[#E4E4E7]/10 w-full min-h-[80px] border border-[#E4E4E7]/40 backdrop-blur-[0px] inner-shadow-block">
                    <p className="font-normal text-[16px] text-neutral-200">
                      Build a responsive landing page using React and Tailwind
                      CSS. Focus on clean layout, mobile-first design, and
                      component reusability.
                    </p>
                  </div>
                  <div className="p-3 rounded-md bg-[#E4E4E7]/10 w-full min-h-[80px] border border-[#E4E4E7]/40 backdrop-blur-[0px] inner-shadow-block">
                    <p className="font-normal text-[16px] text-neutral-200">
                      Build a responsive landing page using React and Tailwind
                      CSS. Focus on clean layout, mobile-first design, and
                      component reusability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
