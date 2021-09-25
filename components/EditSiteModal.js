import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Switch,
  useToast,
  useDisclosure
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';

import { updateSite } from '@/lib/db';

const EditSiteModal = ({ settings, siteId, children }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register } = useForm();

  const onUpdateSite = async (newSettings) => {
    await updateSite(siteId, {
      settings: newSettings
    });
    toast({
      title: 'Success!',
      description: "We've updated your site.",
      status: 'success',
      duration: 5000,
      isClosable: true
    });

    mutate(`/api/site/${siteId}`);
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        fontWeight="semibold"
        leftIcon={<SettingsIcon />}
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        {children}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onUpdateSite)}>
          <ModalHeader fontWeight="bold">Edit Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl display="flex" alignItems="center">
              <Switch
                key={settings?.timestamp}
                {...register('timestamp')}
                colorScheme="green"
                defaultIsChecked={settings?.timestamp}
              />
              <FormLabel ml={2} htmlFor="show-timestamp" mb="0">
                Show Timestamp
              </FormLabel>
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <Switch
                key={settings?.icons}
                {...register('icons')}
                colorScheme="green"
                defaultIsChecked={settings?.icons}
              />
              <FormLabel ml={2} htmlFor="show-icons" mb="0">
                Show Icon
              </FormLabel>
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <Switch
                key={settings?.ratings}
                {...register('ratings')}
                colorScheme="green"
                defaultIsChecked={settings?.ratings}
              />
              <FormLabel ml={2} htmlFor="show-ratings" mb="0">
                Show Ratings
              </FormLabel>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="semibold">
              Cancel
            </Button>
            <Button
              id="edit-site-button"
              colorScheme="brand"
              fontWeight="semibold"
              type="submit"
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditSiteModal;
