"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { HeartFilledIcon } from "@/components/icons";

export default function DonateModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="text-sm font-normal text-default-600 bg-default-100"
        href={siteConfig.links.sponsor}
        startContent={<HeartFilledIcon className="text-danger" />}
        variant="flat"
        onPress={onOpen}
      >
        Donate
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Support FHHSAA
              </ModalHeader>
              <ModalBody>
                <p>Payment Method Here</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
