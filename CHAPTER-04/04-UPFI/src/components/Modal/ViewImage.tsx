import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent
        bgColor="gray.800"
        width="auto"
        height="auto"
        maxWidth="900px"
      >
        <ModalBody padding="0">
          <Image src={imgUrl} width="100%" maxWidth="900px" maxHeight="600px" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
