import {
  Box,
  HStack,
  useColorMode,
  Text,
  Checkbox,
  Flex,
  Image,
  Stack,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { IconExternalLink } from "@tabler/icons-react";
import { isFolder, workflowsTable } from "../db-tables/WorkspaceDB";
import { formatTimestamp, openWorkflowInNewTab, isImageFormat } from "../utils";
import AddTagToWorkflowPopover from "./AddTagToWorkflowPopover";
import { useState, memo, ChangeEvent, useContext } from "react";
import WorkflowListItemRightClickMenu from "./WorkflowListItemRightClickMenu";
import DeleteConfirm from "../components/DeleteConfirm";
import { RecentFilesContext, WorkspaceContext } from "../WorkspaceContext";
import { Workflow } from "../types/dbTypes";

type Props = {
  workflow: Workflow;
};
export default memo(function WorkflowListItem({ workflow }: Props) {
  const { colorMode } = useColorMode();
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    setDraggingFile,
    isMultiSelecting,
    onMultiSelectFlow,
    onDeleteFlow,
    multiSelectedFlowsID,
    onRefreshFilesList,
    draggingFile,
  } = useContext(RecentFilesContext);
  const isChecked =
    multiSelectedFlowsID &&
    multiSelectedFlowsID.length > 0 &&
    multiSelectedFlowsID.includes(workflow.id);
  const { curFlowID, loadWorkflowID } = useContext(WorkspaceContext);
  const isSelected = curFlowID === workflow.id;
  const handleContextMenu = (event: any) => {
    event.preventDefault();
    setMenuPosition({ x: event.clientX, y: event.clientY });
    setIsMenuOpen(true);
  };
  const [isHovered, setIsHovered] = useState(false);
  const handleClose = () => {
    setIsMenuOpen(false);
  };
  const hoverBgColor = colorMode === "light" ? "gray.200" : "#4A5568";

  const basicInfoComp = (
    <Box
      flexShrink={1}
      flexGrow={1}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDraggingOver(true);
      }}
      onDragLeave={() => {
        setIsDraggingOver(false);
      }}
      onDrop={async () => {
        if (draggingFile && !isFolder(draggingFile)) {
          await workflowsTable?.updateFlow(draggingFile.id, {
            parentFolderID: workflow.parentFolderID,
          });
          await onRefreshFilesList?.();
        }
        setIsDraggingOver(false);
      }}
      backgroundColor={
        isSelected ? "teal.200" : isMenuOpen ? hoverBgColor : undefined
      }
      color={isSelected && !isMultiSelecting ? "#333" : undefined}
      draggable={!isMultiSelecting}
      onDragStart={(e) => {
        setDraggingFile && setDraggingFile(workflow);
      }}
      borderRadius={6}
      px={1}
      py={1}
      onClick={() => {
        !isMultiSelecting && loadWorkflowID(workflow.id);
      }}
      _hover={{
        bg: hoverBgColor,
      }}
    >
      <HStack>
        {workflow.coverMediaPath != null &&
          (isImageFormat(workflow.coverMediaPath) ? (
            <Image
              borderRadius={3}
              boxSize="60px"
              objectFit="cover"
              src={`/workspace/view_media?filename=${workflow.coverMediaPath}`}
              alt={workflow.name ?? "workflow cover image"}
            />
          ) : (
            <video
              width={60}
              height={60}
              src={`/workspace/view_media?filename=${workflow.coverMediaPath}`}
              muted={true}
            >
              <track kind="captions" />
            </video>
          ))}

        <Stack textAlign={"left"} gap={0}>
          <Text fontWeight={"500"}>{workflow.name ?? "untitled"}</Text>
          <Text color={"GrayText"} ml={2} fontSize={"sm"}>
            Updated: {formatTimestamp(workflow.updateTime)}
          </Text>
        </Stack>
      </HStack>
      {isDraggingOver && (
        <Box width={"100%"} mt={2} height={"2px"} backgroundColor={"#4299E1"} />
      )}
    </Box>
  );

  return (
    <HStack
      w={"100%"}
      mb={1}
      justify={"space-between"}
      onContextMenu={handleContextMenu}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {isMultiSelecting ? (
        <Checkbox
          isChecked={isChecked}
          spacing={4}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onMultiSelectFlow &&
              onMultiSelectFlow(workflow.id, e.target.checked);
          }}
        >
          {basicInfoComp}
        </Checkbox>
      ) : (
        <>
          {basicInfoComp}
          <Flex width={"90px"} justifyContent={"flex-end"}>
            {isHovered && <AddTagToWorkflowPopover workflow={workflow} />}

            <Tooltip label="Open in new tab">
              <IconButton
                aria-label="Open in new tab"
                size={"sm"}
                variant="ghost"
                onClick={() => openWorkflowInNewTab(workflow.id)}
                icon={<IconExternalLink color={"#718096"} size={23} />}
              />
            </Tooltip>

            <DeleteConfirm
              promptMessage="Are you sure you want to delete this workflow?"
              onDelete={() => {
                onDeleteFlow && onDeleteFlow(workflow.id);
              }}
            />
          </Flex>
        </>
      )}
      {isMenuOpen && (
        <WorkflowListItemRightClickMenu
          menuPosition={menuPosition}
          onClose={handleClose}
          workflowID={workflow.id}
        />
      )}
    </HStack>
  );
});
