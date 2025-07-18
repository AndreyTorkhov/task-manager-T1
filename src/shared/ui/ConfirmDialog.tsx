import { Modal, Button } from "@admiral-ds/react-ui";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

/**
 * Пропсы компонента ConfirmDialog
 * @typedef {Object} ConfirmDialogProps
 * @property {string} [title="Confirm action"] - Заголовок модального окна. По умолчанию: "Confirm action"
 * @property {string} [description] - Описание/сообщение в модальном окне (опционально)
 * @property {() => void} onConfirm - Обработчик подтверждения действия (клик по кнопке Delete)
 * @property {() => void} onClose - Обработчик закрытия модального окна (клик по кнопке Cancel или вне модалки)
 */
interface ConfirmDialogProps {
  title?: string;
  description?: string;
  onConfirm: () => void;
  onClose: () => void;
}

export const ConfirmDialog = ({
  title = "Confirm action",
  description,
  onConfirm,
  onClose,
}: ConfirmDialogProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <Modal
      dimension="s"
      mobile={isMobile}
      displayCloseIcon={false}
      closeOnOutsideClick
      closeOnEscapeKeyDown
      onClose={onClose}
      style={{ maxWidth: 360 }}
    >
      <div className="px-6 py-2">
        <h3 className="mb-2 text-base font-semibold text-center">{title}</h3>
        {description && (
          <p className="mb-5 text-sm sm:text-base text-gray-700">
            {description}
          </p>
        )}

        <div className="flex justify-end gap-2">
          <Button
            appearance="secondary"
            dimension="s"
            className="min-w-[88px]"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            appearance="danger"
            dimension="s"
            className="min-w-[88px]"
            onClick={onConfirm}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};
