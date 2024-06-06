import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "~components/components";
import { AppRoute } from "~enums/enums";
import { Feed } from "./libs/components/components";

const SocialNewsModal: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isSocialNewsUrl = pathname === AppRoute.SOCIAL_NEWS;

  const isSocialModalOpen = isSocialNewsUrl;

  const handleCloseModal = useCallback(() => {
    navigate(AppRoute.ROOT);
  }, [navigate]);

  return (
    <Modal isOpen={isSocialModalOpen} onClose={handleCloseModal}>
      <div className="flex p-[10px] lg:p-[30px] pt-[60px] lg:pt-[70px] w-screen lg:w-[min(900px,calc(100vw-50px))] h-[100dvh] lg:h-auto lg:max-h-[calc(100dvh-50px)] text-jz-white">
        <div className="relative h-full min-h-[600px] lg:max-h-[calc(100dvh-300px)] overflow-y-scroll grow">
          <Feed feedId="dd40e0a5-e345-4159-b754-877b2c90ebf8" />
        </div>
      </div>
    </Modal>
  );
};

export { SocialNewsModal };
