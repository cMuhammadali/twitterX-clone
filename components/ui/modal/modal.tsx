import { ReactElement } from "react";
import { Dialog, DialogContent } from "../dialog";
import { X } from "lucide-react";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  body?: ReactElement;
  footer?: ReactElement;
  step?: number;
  totalStep?: number;
}

export default function Modal({
  body,
  footer,
  isOpen,
  onClose,
  step,
  totalStep,
}: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black p-1">
        <div className="flex justify-start items-center gap-4">
          <button className="p-1 border-0 text-white hover:opacity-70 transition w-fit">
            <X onClick={onClose} scale={28} />
          </button>
          {step && totalStep && (
            <div className="text-xl font-bold">
              Step {step} of {totalStep}
            </div>
          )}
        </div>
        <div className="mt-4">{body}</div>
        {footer && <div>{footer}</div>}
      </DialogContent>
    </Dialog>
  );
}
