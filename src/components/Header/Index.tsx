import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { SearchBox } from "./Search";
import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";

export function Header() {
    const isWideVersion = useBreakpointValue ({
        base: false,
        md: true,
    });

    return (
        <Flex
          as="header"
          w="100%"
          maxW={1400}
          h="20"
          mx="auto"
          mt="4"
          px="6"
          align="center"
        >
            <Logo />

            { isWideVersion && <SearchBox /> }
            <Flex
            align="center"
            ml="auto"
            >
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    );
}