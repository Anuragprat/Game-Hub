import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePLatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onselectPlatform: (Platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onselectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePLatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onselectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
