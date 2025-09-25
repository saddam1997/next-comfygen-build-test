import React, { useEffect, useState } from "react";
import { axiosPrivate } from "../../../super-admin-components/apiFunctions";
import { componentsMap } from "../../../super-admin-components/AllComponents";
import { SyncLoader } from "react-spinners";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  pageName: string;
}

const PreviewPage: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  pageName = "",
}) => {
  if (!isOpen) return null;
  const [activeView, setActiveView] = useState("desktop");
  const [components, setComponents] = useState<any>([]);
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const openModal = false;
  const closeModal = () => {};
  const getPageComponents = async () => {
    try {
      setLoading(true);
      let res = await axiosPrivate.get(`page/get?name=${pageName}`);
      setComponents(res?.data?.data?.components || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPageComponents();
  }, []);

  const handleClose = () => {
    setComponents([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <SyncLoader color="#1b2c55" size={15} />
        </div>
      ) : (
        <React.Fragment>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={handleClose}
          />
          <div className="relative bg-white rounded-lg shadow-xl w-[95vw] max-h-[90vh] overflow-hidden z-50">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Preview: {pageName}</h3>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>

            {/* Custom Tabs */}
            <div className="flex justify-center gap-4 p-2 border-b">
              <button
                onClick={() => setActiveView("desktop")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  activeView === "desktop"
                    ? "bg-gray-100 text-gray-900"
                    : "bg-transparent text-gray-600 hover:bg-gray-50"
                }`}
              >
                {/* Desktop Icon */}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Desktop View
              </button>
              <button
                onClick={() => setActiveView("mobile")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  activeView === "mobile"
                    ? "bg-gray-100 text-gray-900"
                    : "bg-transparent text-gray-600 hover:bg-gray-50"
                }`}
              >
                {/* Mobile Icon */}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12" y2="18.01" />
                </svg>
                Mobile View
              </button>
            </div>

            {/* Content Area */}
            <div className="overflow-auto max-h-[70vh]">
              <div
                className={`w-full bg-gray-50 transition-all duration-300 ${
                  activeView === "mobile" ? "flex justify-center" : ""
                }`}
              >
                <div
                  className={activeView === "mobile" ? "w-[375px]" : "w-full"}
                >
                  {components &&
                    Array.isArray(components) &&
                    components?.map((component: any, index: number) => {
                      const Component =
                        componentsMap[component.componentId?.name];
                      if (
                        component.componentId?.name === "HeroSectionForAllPages"
                      ) {
                        return Component ? (
                          <Component
                            key={index}
                            {...component.propValues}
                            openModal={openModal}
                            talkToExpertModal={talkToExpertModal}
                            setTalkToExpertModal={setTalkToExpertModal}
                            closeModal={closeModal}
                          />
                        ) : null;
                      } else {
                        return Component ? (
                          <Component key={index} {...component.propValues} />
                        ) : null;
                      }
                    })}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-2 p-4 border-t">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default PreviewPage;
