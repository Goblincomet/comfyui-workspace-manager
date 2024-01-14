import { Button, Wrap, WrapItem } from "@chakra-ui/react";

interface Props {
  selectedModel: string;
  setSelectedModel: (v: string) => void;
  modelTypeList: string[];
}

export function ModelsTags({
  selectedModel,
  setSelectedModel,
  modelTypeList,
}: Props) {
  const clickHanlder = (v: string) => {
    setSelectedModel(v);
  };

  return (
    <Wrap>
      {modelTypeList.map((v) => {
        return (
          <WrapItem>
            <Button
              colorScheme="teal"
              variant={selectedModel === v ? "solid" : "outline"}
              onClick={() => clickHanlder(v)}
              size={"sm"}
            >
              {v}
            </Button>
          </WrapItem>
        );
      })}
    </Wrap>
  );
}
