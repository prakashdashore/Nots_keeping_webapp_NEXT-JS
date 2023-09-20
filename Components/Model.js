import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import  {GrAdd} from 'react-icons/gr'



export default function App({textRef,charLimit,noteText,setNoteText,isEditing,handleSave,handleClearNotes}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  

  return (
    <>
     <Button onPress={onOpen}><GrAdd/></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create Todo</ModalHeader>
              <ModalBody>
              <div className="note new">
            <textarea
              ref={textRef}
              rows="8"
              cols="10"
              placeholder="Type to add a note..."
              onChange={(e) => {
                if (charLimit - e.target.value.length >= 0) {
                  setNoteText(e.target.value);
                }
              }}
              value={noteText}
            ></textarea>
            
            <div className="note-footer">
              <small>{charLimit - noteText.length} Remaining</small>
              <div>
              <button className="save " onClick={handleSave}>
                {isEditing ? "Edit" : "Save"}
              </button>
              <button className="save" onClick={handleClearNotes}>
                Clear  all Notes
              </button>
              </div>
            </div>
          </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
